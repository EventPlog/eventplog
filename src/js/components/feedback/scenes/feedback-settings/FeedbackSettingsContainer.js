import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateEvent } from 'js/components/events/actions'

class MessengerCheckInContainer extends Component {
  state = { event: {} }

  static getDerivedStateFromProps(nextProps) {
    return {event: nextProps.event}
  }

  handleChange = (e) => {
    this.setState({event: {...this.state.event, [e.target.name]: e.target.value}})
  }

  handleSubmit = (e) => {
    this.setState(() => ({loading: true}))
    const {id, feedback_url} = this.state.event
    this.props.updateEvent({id, feedback_url}).then(res => {
      this.setState(() => ({loading: false, success: true}))
    })
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
  return {event: state.events.event}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateEvent
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessengerCheckInContainer))