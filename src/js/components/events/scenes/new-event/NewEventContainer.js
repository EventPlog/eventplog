// external
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

/// utilities
import {
  createEvent,
  mockCreateEvent,
  checkForValidSlug,
} from '../../actions'

import {
  getUserCommunities,
  getCommunities,
  getCommunity,
  getCommunitiesByVerb
} from 'js/components/communities/actions'

import Auth from 'js/auth'


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


  onSelectChange = (e, attr) => {
    this.setState({event: {...this.state.event, [attr.name]: attr.value}});
  }

  onSearchChange = (e, data) => {
    this.setState({ searchQuery: e.target.searchQuery });
  }

  onCloseModal = (e) => {
    this.setState({isModalOpen: false})
  }

  submitEvent = () => {
    this.setState({ loading: true })
    this.props.createEvent(this.state.event).then(event => {
      this.setState({event, loading: false, eventCreated: true})
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
  })

  render() {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {communities = {}, community = {}} = state.communities

  const userOwnsActiveCommunity = 
    communities.data.find(c => c.id == community.id)

  return {
    community: userOwnsActiveCommunity ? community : {},
    communities,
    currentUser: Auth.currentUser(),
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    createEvent,
    getUserCommunities,
    getCommunitiesByVerb,
    getCommunity,
    getCommunities,
    checkForValidSlug,
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventContainer))
