import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class EventUpdateContainer extends Component {
  state = { event: {} }

  componentWillMount() {
    this.setState({event: this.props.event})
  }

  handleChange = (e) => {
    this.setState({event: {
      ...this.state.event,
      [e.target.name]: e.target.value
    }})
  }

  handleSubmit = () => {
    return this.props.updateEvent(this.state.event)
                     .then(event => this.setState({event}))
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