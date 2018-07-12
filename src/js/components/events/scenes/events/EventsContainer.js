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
    this.props.getEvents();
    this.props.getEventsSuggestions();
    this.props.getCommunitiesSuggestions();
  }

  render () {
    return this.props.children({ ...this.props })
  }
}

const mapStateToProps = (state, ownProps) => {
  const { community_id = 0} = ownProps.match.params
  const {events = [], events_suggestions = []} = state.events
  const {communities_suggestions = []} = state.communities
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