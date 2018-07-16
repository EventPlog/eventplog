import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// ---------- Internal -----------

import {
  getEvents,
  getEventsSuggestions,
  attendEvent,
} from '../../actions'

import {
  followCommunity,
  getCommunitiesSuggestions
} from 'js/components/communities/actions'

import checkEqual from 'js/utils/checkEqual'

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
    this.props.getEvents({page: 1, per_page: 5});
    this.props.getEventsSuggestions({page: 1, per_page: 5});
    this.props.getCommunitiesSuggestions({page: 1, per_page: 2});
  }

  getEvents = (e, meta) => {
    const { per_page } = this.props.events.meta || {}
    this.props.getEvents({page: meta.activePage, per_page})
  }

  getEventsSuggestions = (e, meta) => {
    const { per_page } = this.props.events_suggestions.meta || {}
    this.props.getEventsSuggestions({page: meta.activePage, per_page})
  }

  getProps = () => ({
    ...this.props,
    getEvents: this.getEvents,
    getEventsSuggestions: this.getEventsSuggestions,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { community_id = 0} = ownProps.match.params
  const {events = {}, events_suggestions = {}} = state.events
  const {communities_suggestions = {}} = state.communities
  return {
    events,
    events_suggestions,
    communities_suggestions,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvents,
    followCommunity,
    attendEvent,
    getEventsSuggestions,
    getCommunitiesSuggestions,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentContainer))