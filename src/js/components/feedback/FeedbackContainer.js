import React, { Component} from 'react'
import { withRouter, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  mockGetFeedbackReport,
  submitFeedback,
} from './actions'

import {
  getEvent,
  addEventToStore,
} from 'js/components/events/actions'

import checkEqual from 'js/utils/checkEqual'


class FeedbackContainer extends Component {
  state = {feedback: {}}

  componentDidMount() {
    this.getData()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.guest_id == nextProps.guest_id) return
    const { guest_id, guest_name } = nextProps
    return { guest_id, guest_name, feedback: {} }
  }

  eventFetchedFromServer = () => (
    (!this.props.event ||
    !this.props.event.id) &&
    window.__INITIAL_DATA__ &&
    window.__INITIAL_DATA__.event
  )

  getData() {
    const { event = {}, match} = this.props
    if (event.id || !match.params.id) return

    if(this.eventFetchedFromServer()) {
      const event = window.__INITIAL_DATA__.event
      this.setState({loading: false, event})
      this.props.addEventToStore(event)
      return
    }

    this.setState({loading: true})

    this.props.getEvent(match.params.id)
      .then(event => {
        this.setState({loading: false})
      })
      .catch(error => {
        this.setState({loading: false, error})
      })
  }

  handleChange = (key, value) => {
    this.setState({
      feedback: {
        ...this.state.feedback,
        [key]: value
      }
    })
  }

  handleSubmit = () => {
    this.setState({ loading: true })
    const { event = {}, guest_id } = this.props
    let payload = {...this.state.feedback, guest_id, event_id: event.id}
    this.props.submitFeedback(payload)
      .then(feedback => {
        this.setState({feedback, loading: false, feedbackCreated: true})
      })
      .catch(error => this.setState({loading: false, error}))
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const getQueryParams = (str) => {
  if (!str || !str.trim()) return {}
  let params = {}
  str.substr(1).split('&').forEach(query => {
    const [key, value] = query.split('=')
    params[key] = value
  })
  return params
}

const mapStateToProps = (state, ownProps) => {
  const {event = {}, events_suggestions = [], loading} = state.events
  const queryParams = getQueryParams(ownProps.location.search)
  return {
    event,
    ...queryParams
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    mockGetFeedbackReport,
    submitFeedback,
    getEvent,
    addEventToStore,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedbackContainer))