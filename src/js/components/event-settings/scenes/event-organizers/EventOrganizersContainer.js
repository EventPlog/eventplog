import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class MessengerCheckInContainer extends Component {
  render () {
    return this.props.children({ ...this.props })
  }
}

const mapStateToProps = (state, ownProps) => {
  return {event: state.events.event}
}

export default withRouter(connect(mapStateToProps)(MessengerCheckInContainer))