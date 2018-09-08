import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// ---------- Internal -----------

import {
  getEventsSuggestions,
  attendEvent,
} from '../../actions'

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
    this.props.getEventsSuggestions({page: 1, per_page: 10});
  }

  getEventsSuggestions = (e, meta) => {
    const { per_page } = this.props.events_suggestions.meta || {}
    this.props.getEventsSuggestions({page: meta.activePage, per_page})
  }

  getProps = () => ({
    ...this.props,
    getEventsSuggestions: this.getEventsSuggestions,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {events_suggestions = {}} = state.events
  return {
    events_suggestions,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    attendEvent,
    getEventsSuggestions,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentContainer))