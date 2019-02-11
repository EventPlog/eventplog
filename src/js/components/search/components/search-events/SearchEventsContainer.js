import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// ---------- Internal -----------

import {
  searchEvents,
  attendEvent,
} from 'js/components/events/actions'

import checkEqual from 'js/utils/checkEqual'
import Auth from 'js/auth'
import { secureAction } from 'js/auth/actions'

// -------- Components -----------

class SearchEventsContainer extends Component {
  componentWillMount(props) {
    this.getData()
  }

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.query, this.props.query)) {
      this.getData()
      mixpanel.track('SEARCH_EVENTS_INDEX_PAGE_VIEW')
    }
  }

  getData() {
    this.props.searchEvents({page: 1, per_page: 10, ...this.props.query});
  }

  getEvents = (e, meta) => {
    const { per_page } = this.props.events.meta || {}
    this.props.searchEvents({...this.props.query, page: meta.activePage, per_page})
      .then(() => document.querySelector('.pusher').scrollTop = 0)
    mixpanel.track('SEARCH_EVENTS_INDEX_PAGINATION_CLICK', {meta})
  }

  getProps = () => ({
    ...this.props,
    ...this.props.location,
    getEvents: this.getEvents,
    currentUser: Auth.currentUser(),
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {events = {}} = state.events
  const { query = {} } = state.search
  return {
    events,
    query,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    searchEvents,
    attendEvent: secureAction(attendEvent),
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchEventsContainer))