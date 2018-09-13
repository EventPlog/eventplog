import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getFeedbackReport,
  getFeedbackResponses,
  updateFeedbackReport,
} from '../../actions'

import Auth from 'js/auth'

class FeedbackReportContainer extends Component {
  state = {feedback_report: {}}

  componentWillMount() {
    this.props.getFeedbackReport(this.props.event.id)
      .catch(err => this.setState({error: err}))
  }

  getFeedbackResponses = (meta) => {
    return this.props.getFeedbackResponses({...meta, event_id: this.props.event.id})
  }

  handleChange = (key, value) => {
    const feedback_report = this.state.feedback_report && this.state.feedback_report.id
      ? this.state.feedback_report
      : this.props.feedback_report
    this.setState({feedback_report: {...feedback_report, [key]: value }})
  }

  toggleShowReport = (shown_to_guests) => {
    this.setState({loading: true})
    const feedback_report = {id: this.props.feedback_report.id, shown_to_guests}
    this.props.updateFeedbackReport(feedback_report)
  }

  handleSubmit = () => {
    this.setState({loading: true})
    const {feedback_responses, report, ...feedback_report} = this.state.feedback_report
    return this.props.updateFeedbackReport(feedback_report)
      .then(feedback_report => this.setState({feedback_report, loading: false}))
      .catch(err => this.setState({loading: false}))
  }

  getProps = () => ({
    ...this.props,
    getFeedbackResponses: this.getFeedbackResponses,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    toggleShowReport: this.toggleShowReport,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    feedback_report: state.feedback.feedback_report,
    event: state.events.event,
    isLoggedIn: Auth.isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getFeedbackReport,
    getFeedbackResponses,
    updateFeedbackReport,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedbackReportContainer))