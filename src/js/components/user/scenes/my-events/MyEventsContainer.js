import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getEvents,
  getEventsByVerb,
  getPastEvents,
  attendEvent,
} from 'js/components/events/actions'

import checkEqual from 'js/utils/checkEqual'
import Auth from 'js/auth'
import { secureAction } from 'js/auth/actions'

const labelVerbMapping = {
  'Attended': 'attended',
  'Spoke at': 'user_spoke_at',
  'Organized': 'organized',
  'Registered': 'registered',
  'Invited to': 'invited',
}

class MainContentContainer extends Component {
  state = {
    labelVerbMapping,
    activeItem: Object.keys(labelVerbMapping)[0]
  }

  componentWillMount(props) {
    this.getData()
    mixpanel.track('USER_PROFILE_EVENTS_INDEX_PAGE_VIEW')
  }

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.match.params, this.props.match.params)) {
      this.getData()
      mixpanel.track('USER_PROFILE_EVENTS_INDEX_PAGE_VIEW')
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.getEventsByVerb({
      verb: labelVerbMapping[name],
      page: 1,
      per_page: 10,
      user_id: this.props.user.id
    });
  }

  getData() {
    const { labelVerbMapping, activeItem } = this.state

    this.props.getEventsByVerb({
      verb: labelVerbMapping[activeItem],
      page: 1,
      per_page: 10,
      user_id: this.props.user.id
    });
  }

  getEvents = (e, meta) => {
    const { per_page } = this.props.events.meta || {}
    this.props.getEvents({page: meta.activePage, per_page})
    mixpanel.track('USER_EVENTS_INDEX_PAGINATION_CLICK', {meta})
  }

  getEventsAttended = (e, meta) => {
    const { per_page } = this.props.events.meta || {}
    this.props.getEventsByVerb({verb: 'attended', page: meta.activePage, per_page})
    mixpanel.track('USER_EVENTS_ATTENDED_INDEX_PAGINATION_CLICK', {meta})
  }

  getPastEvents = (e, meta) => {
    const { per_page } = this.props.events.meta || {}
    this.props.getPastEvents({page: meta.activePage, per_page})
  }

  getProps = () => ({
    ...this.props,
    ...this.props.location,
    ...this.state,
    getEvents: this.getEvents,
    getPastEvents: this.getPastEvents,
    currentUser: Auth.currentUser(),
    handleItemClick: this.handleItemClick,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {events = {}, past_events = {}} = state.events
  return {
    events,
    past_events,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvents,
    getPastEvents,
    getEventsByVerb,
    attendEvent: secureAction(attendEvent),
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentContainer))
