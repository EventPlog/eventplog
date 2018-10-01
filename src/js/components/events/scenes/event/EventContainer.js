import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import checkEqual from 'js/utils/checkEqual'
import Auth from 'js/auth'
import { paramsToObj } from 'js/utils'
import { secureAction } from 'js/auth/actions'

import {
  getEvent,
  updateEvent,
  createComment,
  updateComment,
  getComments,
  getAnnouncements,
  createAnnouncement,
  updateAnnouncement,
  getPastEvents,
  attendEvent,
  checkForValidSlug,
  updateViewCount,
  addEventToStore,
} from '../../actions'

import {
  getBrowserName,
  getDeviceType,
} from 'js/utils/browserCheck'

class EventContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {event: {}}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    this.getData()
  }

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.match.params, this.props.match.params)) {
      this.getData()
    }
  }

  handleChange = (key, value) => {
    const event = this.state.event && this.state.event.id
                    ? this.state.event
                    : this.props.event
    this.setState({event: {...event, [key]: value }})
  }

  handleSubmit = () => {
    const {commuity, ...others} = this.state.event
    return this.props.updateEvent(others).then(event => {
      this.state.event.id
        ? mixpanel.track('EVENT_CREATE')
        : mixpanel.track('EVENT_UPDATE')
      this.setState({event})
    })
  }

  toggleVisibilityStatus = ({id, visibility_status: status}) => {
    const visibility_status = status == 'private_event' ? 'public_event' : 'private_event'
    this.setState({loading: true})
    this.props.updateEvent({id, visibility_status}).then(res => {
      this.setState({loading: false})
      mixpanel.track('EVENT_UPDATE', {visibility_status})
    })
  }

  eventFetchedFromServer = () => (
    (!this.props.event ||
        !this.props.event.id) &&
        window.__INITIAL_DATA__ &&
        window.__INITIAL_DATA__.event
  )

  getData() {
    const {community_id, id} = this.props.match.params

    if(this.eventFetchedFromServer()) {
      this.props.addEventToStore(window.__INITIAL_DATA__.event)
      this.updateViewCount()
      return
    }

    if (!this.props.event || !this.props.event.id || this.props.event.id != id) {
      this.setState({loading: true})
      this.props.getEvent(id, this.props.match.params.event_slug)
        .then(event => {
          this.setState({loading: false, event})
          this.updateViewCount()
        })
        .catch(error => this.setState({loading: false, error}))
    }
  }

  updateViewCount = () => {
    const { currentUser = {} } = this.props
    this.props.updateViewCount({
      user_id: currentUser.id,
      user_agent: getBrowserName(),
      device_type: getDeviceType(),
      recipient_id: this.state.event.id,
      recipient_type: 'Event'
    })
    mixpanel.track('EVENT_PAGE_VIEW')
  }

  getParams = () => {
    return {...paramsToObj(this.props.location.search.substr(1))}
  }

  getProps = () => ({
    ...this.state,
    ...this.props,
    ...this.getParams(),
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    toggleVisibilityStatus: this.toggleVisibilityStatus,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {event = {}, past_events = {}} = state.events
  const { organizers } = state.organizers
  const {link_color } = event;
  const { community, communities_suggestions } = state.communities
  return {
    activeLink: community.brand_color,
    event,
    community,
    organizers,
    past_events,
    communities_suggestions,
    currentUser: Auth.currentUser(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvent,
    getComments,
    getAnnouncements,
    createAnnouncement,
    updateAnnouncement,
    checkForValidSlug,
    updateViewCount,
    addEventToStore,
    attendEvent: secureAction(attendEvent),
    updateEvent: secureAction(updateEvent),
    createComment: secureAction(createComment),
    updateComment: secureAction(updateComment),
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventContainer))