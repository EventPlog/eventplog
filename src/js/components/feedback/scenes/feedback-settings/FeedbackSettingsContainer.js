import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class FeedbackSettingsContainer extends Component {
  state = { feedback: {} }

  componentWillMount() {
    this.setState({feedback: this.props.feedback})
  }

  handleChange = (e, attr) => {
    const elAttr = attr ? attr : e.target
    if (attr && attr.type == 'checkbox') { elAttr.value = attr.checked }
    this.setState({feedback: {
      ...this.state.feedback,
      [elAttr.name]: elAttr.value
    }})
  }

  handleChangeForRadio = (e, attr) => {
    this.setState({feedback: {
      ...this.state.feedback,
      [attr.name]: attr.value
    }})
  }

  handleSubmit = () => {
    
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    handleChangeForRadio: this.handleChangeForRadio,
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
  }, dispatch)
}

export default withRouter(connect(mapStateToProps)(FeedbackSettingsContainer))