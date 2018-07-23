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
    let payload = {...this.state.feedback, event_id: this.props.event.id}
    this.props.submitFeedback(payload)
      .then(feedback => {
        this.setState({feedback, loading: false, feedbackCreated: true})
      })
      .catch(error => this.setState({loading: false, error}))
  }

  getParams = () => {
    return (matchPath(this.props.location.pathname, '/communities/:feedback_id/events/:id') || this.props.match).params
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

const mapStateToProps = (state, ownProps) => {
  const {event = {}, events_suggestions = [], loading} = state.events
  const {feedback = {}, communities = [], communities_suggestions} = state.communities

  return {
    event
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    mockGetFeedbackReport,
    submitFeedback,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedbackContainer))