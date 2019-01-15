import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// ---------- Internal -----------

import {
  getEvents,
  getPastEvents,
  attendEvent,
} from '../../actions'

import checkEqual from 'js/utils/checkEqual'
import Auth from 'js/auth'
import { secureAction } from 'js/auth/actions'

// -------- Components -----------

class MainContentContainer extends Component {
  componentWillMount(props) {
    this.getData()
  }

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.match.params, this.props.match.params)) {
      this.getData()
      mixpanel.track('USER_EVENTS_INDEX_PAGE_VIEW')
    }
  }

  getData() {
    this.props.getEvents({page: 1, per_page: 10});
    this.props.getPastEvents({page: 1, per_page: 10});
  }

  getEvents = (e, meta) => {
    const { per_page } = this.props.events.meta || {}
    this.props.getEvents({page: meta.activePage, per_page})
      .then(() => document.querySelector('.pusher').scrollTop = 0)
    mixpanel.track('USER_EVENTS_INDEX_PAGINATION_CLICK', {meta})
  }

  getPastEvents = (e, meta) => {
    const { per_page } = this.props.events.meta || {}
    this.props.getPastEvents({page: meta.activePage, per_page})
      .then(() => document.querySelector('.pusher').scrollTop = 0)
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
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentContainer))