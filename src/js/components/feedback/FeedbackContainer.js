import React, { Component} from 'react'
import { withRouter, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  mockGetFeedbackReport,
  submitFeedback,
} from './actions'

import checkEqual from 'js/utils/checkEqual'


class FeedbackContainer extends Component {
  state = {feedback: {}}

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.guest_id == nextProps.guest_id) return
    const { guest_id, guest_name } = nextProps
    return { guest_id, guest_name, feedback: {} }
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
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedbackContainer))