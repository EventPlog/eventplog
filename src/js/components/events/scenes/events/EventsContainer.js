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
  addEventsToStore,
} from '../../actions'

import {
  followCommunity,
  getCommunitiesSuggestions
} from 'js/components/communities/actions'

import checkEqual from 'js/utils/checkEqual'
import { paramsToObj } from 'js/utils'
import { secureAction } from 'js/auth/actions'

// -------- Components -----------

class EventsContainer extends Component {
  state = { lazyLoadEvents: false }

  componentDidMount(props) {
    this.getData()
  }

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.match.params, this.props.match.params)) {
      this.getData()
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
      this.props.getEvents({page: 1, per_page: 10});
    }
    this.props.getPastEvents({page: 1, per_page: 10});
    this.props.getCommunitiesSuggestions({page: 1, per_page: 10});

  }

  getParams = () => {
    // retrieve any '?activeIndex=1' query in url
    return {...paramsToObj(this.props.location.search.substr(1))}
  }

  getEvents = (e, meta) => {
    const { per_page, current_page } = this.props.events.meta || {}

    // if (!this.state.lazyLoadEvents) this.setState({lazyLoadEvents: true})

    mixpanel.track('USER_EVENTS_INDEX_PAGINATION_CLICK', {meta})
    return this.props.getEvents({page: meta.activePage, per_page})
      .then(events => {
        // if(this.state.lazyLoadEvents) {
        //   console.log('got to lazyload')
        //   this.setState({lazyLoadEvents: false})
        //   this.getEvents(null, {activePage: current_page})
        // }
      })
  }

  getPastEvents = (e, meta) => {
    const { per_page } = this.props.events.meta || {}
    return this.props.getPastEvents({page: meta.activePage, per_page})
  }

  getProps = () => ({
    ...this.props,
    ...this.getParams(),
    getEvents: this.getEvents,
    getPastEvents: this.getPastEvents
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
    addEventsToStore,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsContainer))