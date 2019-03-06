import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getCommunities,
  followCommunity,
  getCommunitiesSuggestions,
} from 'js/components/communities/actions'

import {
  getEventsSuggestions,
  attendEvent
} from 'js/components/events/actions'

import checkEqual from 'js/utils/checkEqual'
import { paramsToObj } from 'js/utils'
import { secureAction } from 'js/auth/actions'

class MainContentContainer extends Component {
  componentDidMount(props) {
    this.getData()
  }

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.match.params, this.props.match.params)) {
      this.getData()
    }
  }

  getCommunitiesSuggestions = (e, meta) => {
    const { per_page } = this.props.communities_suggestions.meta || {}
    return this.props.getCommunitiesSuggestions({page: meta.activePage, per_page})
  }

  getData() {
    this.props.getCommunitiesSuggestions({page: 1, per_page: 3})
    this.props.getEventsSuggestions({page: 1, per_page: 4})
  }

  getParams = () => {
    return {...paramsToObj(this.props.location.search.substr(1))}
  }

  getProps = () => ({
    ...this.props,
    ...this.getParams(),
    getEventsSuggestions: this.getEventsSuggestions,
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
    getEventsSuggestions,
    getCommunitiesSuggestions,
    attendEvent: secureAction(attendEvent),
    followCommunity: secureAction(followCommunity),
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentContainer))