// external
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

/// utilities
import {
  createEvent,
  updateEvent,
  mockCreateEvent,
  checkForValidSlug,
} from '../../actions'

import {
  getUserCommunities,
  getCommunities,
  getCommunity,
  getCommunitiesByVerb,
  getCommunitiesByName,
} from 'js/components/communities/actions'

import { genEventLink } from 'js/utils'
import recachePage from 'js/utils/recachePage'
import SlackService from 'js/utils/slackService'
import Auth from 'js/auth'

const sendToSlack = (event, user) => {
  const slackPayload = {
    title: event.title,
    url: window.location.origin + genEventLink(event),
    prefixMsg: 'A new event have been created',
    channel: '#events-supply',
    description: `
      Details
      Description: ${event.goals}
      Created by: ${user.first_name} ${user.last_name} 
      `
  }
  SlackService.send(slackPayload)
}

export class EventContainer extends Component {
  state = {
    event: {
      title: '',
      start_time: new Date(),
      end_time: new Date(),
      community_id: this.props.community.id,
      visibility_status: 'public_event',
    },
    error: false,
    eventCreated: false,
    searchQuery:'',
    selected: null,
    isModalOpen: true,
    slug_check: {}
  }

  componentDidMount(props) {
    this.getData()
    const { newEvent = {} } = this.props
    if (newEvent.id) this.setState({ event: newEvent })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { community = {} } = nextProps
    if (community.id) { 
      return { event: {...prevState.event, community_id: community.id} }
    }
    return null
  }

  handleChange = (key, value) => {
    this.setState({ event: {...this.state.event, [key]: value}})
  }

  handleEventChange = (updates) => {
    this.setState({ event: {...this.state.event, ...updates}})
  }


  onSelectChange = (e, attr) => {
    this.setState({event: {...this.state.event, [attr.name]: attr.value}});
  }

  onSearchChange = (e, data) => {
    this.setState({ searchQuery: e.target.searchQuery });
  }

  onCloseModal = (e) => {
    this.setState({isModalOpen: false})
  }

  allowNext = (goToNext) => {
    this.props.allowNext && this.props.allowNext(this.state.event && this.state.event.id, goToNext)
  }

  submitEvent = () => {
    this.setState({ loading: true })

    if (!this.state.event.id) sendToSlack(this.state.event, Auth.currentUser())
    const callback = this.state.event.id
      ? this.props.updateEvent
      : this.props.createEvent
    callback(this.state.event).then(event => {

      this.state.event.id
        ? mixpanel.track('EVENT_UPDATE')
        : mixpanel.track('EVENT_CREATE')

      this.setState({event, loading: false, eventCreated: true})
      this.props.updateState({newEvent: event})
      this.allowNext(true)
      recachePage()
    })
      .catch(error => this.setState({loading: false, error}))
  }

  getData() {
    this.getCommunitiesByVerb()
  }

  getCommunitiesByVerb(page = 1, per_page = 10) {
    this.props.getCommunitiesByVerb({
        verb: 'owned',
        page,
        per_page,
        user_id: this.props.currentUser.id
    });
  }

  getCommunities = (e, meta) => {
    const { per_page } = this.props.communities.meta || {}
    const { activeItem } = this.state
    this.getCommunitiesByVerb(meta.activePage, per_page)
  }

  getCommunitiesByName = (searchQuery, meta = {}) => {
    this.setState({ searchLoading: true })

    const { per_page = 10 } = this.props.communities.meta || {}

    return this.props.getCommunitiesByName({
      per_page,
      page: meta.activePage || 1,
      community: {
        name: searchQuery,
      }
    }).then(res => {
      this.setState({ searchLoading: false })
      return res
    })
  }

  checkForValidSlug = () => {
    if(!this.state.event.slug) return

    this.setState({slug_check: {loading: true}})

    this.props.checkForValidSlug(this.state.event.slug).then(res => {
      this.setState({slug_check: !res.slug ? {valid: true} : {error: 'Slug not available'}})
    }).catch(error => this.setState({slug: {error, loading: false}}))

    mixpanel.track('EVENT_SLUG_CHANGE')
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    submitEvent: this.submitEvent,
    userCommunities:this.userCommunities,
    mockGetUserCommunities: this.mockGetUserCommunities,
    getCommunity: this.getCommunity,
    onSearchChange: this.onSearchChange,
    onSelectChange: this.onSelectChange,
    onCloseModal: this.onCloseModal,
    getUserCommunitiesByVerb:this.getCommunitiesByVerb,
    getCommunities: this.getCommunities,
    checkForValidSlug: this.checkForValidSlug,
    handleEventChange: this.handleEventChange,
    getCommunitiesByName: this.getCommunitiesByName,
  })

  render() {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {communities = {}, community = {}} = state.communities
  const { event = {} } = state.events

  const userOwnsActiveCommunity = 
    communities.data.find(c => c.id == community.id)

  return {
    event,
    community: userOwnsActiveCommunity ? community : {},
    communities,
    currentUser: Auth.currentUser(),
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    createEvent,
    updateEvent,
    getUserCommunities,
    getCommunity,
    getCommunities,
    getCommunitiesByName,
    getCommunitiesByVerb,
    checkForValidSlug,
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventContainer))
