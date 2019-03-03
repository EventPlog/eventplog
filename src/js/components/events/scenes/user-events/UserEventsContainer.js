import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// ---------- Internal -----------

import {
  getEvents,
  getPastEvents,
  attendEvent,
  addEventsToStore,
} from '../../actions'

import checkEqual from 'js/utils/checkEqual'
import Auth from 'js/auth'
import { secureAction } from 'js/auth/actions'

// -------- Components -----------

class UserEventsContainer extends Component {
  componentWillMount(props) {
    this.getData()
  }

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.match.params, this.props.match.params)) {
      this.getData()
      mixpanel.track('USER_EVENTS_INDEX_PAGE_VIEW')
    }
  }

  eventFetchedFromServer = () => (
    (!this.props.events ||
    !this.props.events.data) &&
    window.__INITIAL_DATA__ &&
    window.__INITIAL_DATA__.events
  )

  getData() {
    if(this.eventFetchedFromServer()) {
      const events = window.__INITIAL_DATA__.events
      this.setState({loading: false, events})
      this.props.addEventsToStore(events)
    } else {
      this.props.getEvents({page: 1, per_page: 15});
    }

    this.props.getPastEvents({page: 1, per_page: 10});
  }

  getEvents = (e, meta) => {
    const { per_page } = this.props.events.meta || {}
    this.props.getEvents({page: meta.activePage, per_page})
    mixpanel.track('USER_EVENTS_INDEX_PAGINATION_CLICK', {meta})
  }

  getPastEvents = (e, meta) => {
    const { per_page } = this.props.events.meta || {}
    this.props.getPastEvents({page: meta.activePage, per_page})
  }

  getProps = () => ({
    ...this.props,
    ...this.props.location,
    getEvents: this.getEvents,
    getPastEvents: this.getPastEvents,
    currentUser: Auth.currentUser(),
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
    attendEvent: secureAction(attendEvent),
    addEventsToStore,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserEventsContainer))