import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getCommunities,
  followCommunity,
  mockGetCommunity,
  mockGetCommunities,
  getCommunitiesSuggestions,
} from '../../actions'
import { getEvents, getEventsSuggestions, mockGetEvents } from 'js/components/events/actions'
import checkEqual from 'js/utils/checkEqual'

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
    this.props.getCommunities()
    this.props.getCommunitiesSuggestions()
    this.props.getEventsSuggestions()
  }

  render () {
    return this.props.children({ ...this.props })
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
    getCommunities,
    followCommunity,
    getEventsSuggestions,
    getCommunitiesSuggestions,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentContainer))