import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class EventUpdateContainer extends Component {
  state = { event: {}, slug_check: {} }

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

  checkForValidSlug = () => {
    if (this.props.event.slug == this.state.event.slug) { return }
    this.setState({slug_check: {loading: true}})

    this.props.checkForValidSlug(this.state.event.slug).then(res => {
      this.setState({slug_check: !res.slug ? {valid: true} : {error: 'Slug not available'}})
    }).catch(error => this.setState({slug: {error}}))
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    checkForValidSlug: this.checkForValidSlug,
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