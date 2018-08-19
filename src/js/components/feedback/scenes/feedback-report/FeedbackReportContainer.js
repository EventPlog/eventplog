import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getFeedbackReport,
  getFeedbackResponses,
} from '../../actions'

class FeedbackReportContainer extends Component {
  componentWillMount() {
    this.props.getFeedbackReport(this.props.event.id)
      .catch(err => this.setState({error: err}))
  }

  getFeedbackResponses = (meta) => {
    return this.props.getFeedbackResponses({...meta, event_id: this.props.event.id})
  }

  getProps = () => ({
    ...this.props,
    getFeedbackResponses: this.getFeedbackResponses
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    feedback_report: state.feedback.feedback_report,
    event: state.events.event
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getFeedbackReport,
    getFeedbackResponses,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedbackReportContainer))