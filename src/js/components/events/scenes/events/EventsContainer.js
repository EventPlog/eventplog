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
import { paramsToObj } from 'js/utils'

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
    this.props.getCommunitiesSuggestions({page: 1, per_page: 5});
  }

  getParams = () => {
    return {...paramsToObj(this.props.location.search.substr(1))}
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
  return {
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