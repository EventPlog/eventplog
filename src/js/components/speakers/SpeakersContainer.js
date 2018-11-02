import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ---------- Internal -----------
import { getSpeakers } from './actions'
import Auth from 'js/auth'
import checkEqual from 'js/utils/checkEqual'

import {
  getEvent,
  addEventToStore,
} from 'js/components/events/actions'

class SpeakersContainer extends Component {
  state = {loading: false, error: false}

  componentDidMount() {
    this.getData()
    mixpanel.track('SPEAKERS_INDEX_PAGE_VIEW')
  }

  eventFetchedFromServer = () => (
    (!this.props.event ||
    !this.props.event.id) &&
    window.__INITIAL_DATA__ &&
    window.__INITIAL_DATA__.event
  )

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.match.params, this.props.match.params)) {
      this.getSpeakers()
    }
  }

  getData() {
    const { event = {}, match} = this.props
    if (event.id) {
      this.getSpeakers(event)
      return
    }

    if(this.eventFetchedFromServer()) {
      const event = window.__INITIAL_DATA__.event
      this.setState({loading: false, event})
      this.props.addEventToStore(event)
      this.getSpeakers(event)
      return
    }

    this.setState({loading: true})

    this.props.getEvent(match.params.event_id)
      .then(event => {
        this.setState({loading: false, event})
        this.getSpeakers(event)
      })
      .catch(error => {
        this.setState({loading: false, error})
      })
  }

  getSpeakers = (event = {}, meta = {}) => {
    this.setState({ loading: true })

    const { per_page = 10 } = this.props.speakers.meta || {}

    this.props.getSpeakers({
      per_page,
      page: meta.activePage || 1,
      speaker: {
        event_id: event.id ? event.id : this.props.event.id,
      }
    }).finally(res => this.setState({ loading: false}))
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    getSpeakers: this.getSpeakers,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {speakers = {}} = state.speakers
  const { event = {}} = state.events

  return {
    speakers,
    event,
    currentUser: Auth.currentUser(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSpeakers,
    getEvent,
    addEventToStore,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SpeakersContainer))
