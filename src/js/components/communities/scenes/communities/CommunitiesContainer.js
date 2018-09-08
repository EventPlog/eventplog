import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getCommunities,
  followCommunity,
  getCommunitiesSuggestions,
} from '../../actions'

import {
  getEvents,
  getEventsSuggestions,
  mockGetEvents,
  attendEvent
} from 'js/components/events/actions'

import checkEqual from 'js/utils/checkEqual'

class MainContentContainer extends Component {
  componentDidMount(props) {
    this.getData()
  }

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.match.params, this.props.match.params)) {
      this.getData()
    }
  }

  getCommunities = (e, meta) => {
    const { per_page } = this.props.communities.meta || {}
    this.props.getCommunities({page: meta.activePage, per_page})
  }

  getCommunitiesSuggestions = (e, meta) => {
    const { per_page } = this.props.communities_suggestions.meta || {}
    this.props.getCommunitiesSuggestions({page: meta.activePage, per_page})
  }

  getData() {
    this.props.getCommunities({page: 1, per_page: 10})
    this.props.getCommunitiesSuggestions({page: 1, per_page: 10})
    this.props.getEventsSuggestions({page: 1, per_page: 3})
  }

  getProps = () => ({
    ...this.props,
    getCommunities: this.getCommunities,
    getCommunitiesSuggestions: this.getCommunitiesSuggestions,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {loading, events = [], events_suggestions = []} = state.events
  const {communities = [], communities_suggestions = []} = state.communities
  return {
    loading,
    communities,
    communities_suggestions,
    events_suggestions
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    attendEvent,
    getCommunities,
    followCommunity,
    getEventsSuggestions,
    getCommunitiesSuggestions,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentContainer))