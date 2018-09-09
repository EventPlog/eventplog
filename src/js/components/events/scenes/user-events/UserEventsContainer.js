import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// ---------- Internal -----------

import {
  getEvents,
  getPastEvents,
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
    this.props.getEvents({page: 1, per_page: 10});
    this.props.getPastEvents({page: 1, per_page: 10});
  }

  getEvents = (e, meta) => {
    const { per_page } = this.props.events.meta || {}
    this.props.getEvents({page: meta.activePage, per_page})
  }

  getPastEvents = (e, meta) => {
    const { per_page } = this.props.events.meta || {}
    this.props.getPastEvents({page: meta.activePage, per_page})
  }

  getProps = () => ({
    ...this.props,
    ...this.props.location,
    getEvents: this.getEvents,
    getPastEvents: this.getPastEvents,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {events = {}, past_events = {}} = state.events
  return {
    events,
    past_events,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvents,
    getPastEvents,
    attendEvent,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentContainer))