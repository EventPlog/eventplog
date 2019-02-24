import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// ---------- Internal -----------

import {
  getEvents,
  getPastEvents,
  getEventsSuggestions,
  attendEvent,
} from '../../actions'

import {
  followCommunity,
  getCommunitiesSuggestions
} from 'js/components/communities/actions'

import checkEqual from 'js/utils/checkEqual'
import { paramsToObj } from 'js/utils'
import { secureAction } from 'js/auth/actions'

// -------- Components -----------

class MainContentContainer extends Component {
  componentWillMount(props) {
    this.getData()
  }

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.match.params, this.props.match.params)) {
      this.getData()
    }
  }

  getData() {
    this.props.getEvents({page: 1, per_page: 10});
    this.props.getPastEvents({page: 1, per_page: 10});
    this.props.getCommunitiesSuggestions({page: 1, per_page: 5});
  }

  getParams = () => {
    // retrieve any '?activeIndex=1' query in url
    return {...paramsToObj(this.props.location.search.substr(1))}
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
    ...this.getParams(),
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {communities_suggestions = {}} = state.communities
  const { events = {}, past_events = {} } = state.events
  return {
    communities_suggestions,
    events,
    past_events
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvents,
    getPastEvents,
    followCommunity: secureAction(followCommunity),
    attendEvent: secureAction(attendEvent),
    getEventsSuggestions,
    getCommunitiesSuggestions,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentContainer))