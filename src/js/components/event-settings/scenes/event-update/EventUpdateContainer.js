import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class EventUpdateContainer extends Component {
  state = { event: {} }

  componentDidMount() {
    this.setState({event: this.props.event})
  }

  handleChange = (key, value) => {
    const event = this.state.event && this.state.event.id
      ? this.state.event
      : this.props.event
    this.setState({event: {...event, [key]: value }})
  }

  handleSubmit = () => {
    const {commuity, ...others} = this.state.event
    return this.props.updateEvent(others).then(event => this.setState({event}))
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
  return {
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventUpdateContainer))