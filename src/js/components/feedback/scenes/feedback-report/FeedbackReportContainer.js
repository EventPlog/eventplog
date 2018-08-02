import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getFeedbackReport
} from '../../actions'

class MessengerCheckInContainer extends Component {
  componentWillMount() {
    this.props.getFeedbackReport(this.props.event.id)
      .catch(err => this.setState({error: err}))
  }

  render () {
    return this.props.children({ ...this.props })
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
    getFeedbackReport
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessengerCheckInContainer))