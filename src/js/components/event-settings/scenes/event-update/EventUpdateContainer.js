import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import recachePage from 'js/utils/recachePage'
import { genEventLink } from 'js/utils'

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

  onSearchChange = (e, data) => {
    this.setState({ searchQuery: e.target.searchQuery });
  }

  handleSubmit = () => {
    this.setState({ loading: true, error: false, success: false })
    const {commuity, ...others} = this.state.event
    return this.props.updateEvent(others).then(event => {
      this.setState({event, success: 'Event updated successfully'})
      mixpanel.track('EVENT_UPDATE')
      recachePage(genEventLink(event))
    }).catch(error => this.setState({success: false, error: 'An error occured. Please try again.'}))
  }

  checkForValidSlug = () => {
    if (this.props.event.slug == this.state.event.slug) { return }
    this.setState({slug_check: {loading: true}})

    this.props.checkForValidSlug(this.state.event.slug).then(res => {
      this.setState({slug_check: !res.slug ? {valid: true} : {error: 'Slug not available'}})
    }).catch(error => this.setState({slug: {error}}))

    mixpanel.track('EVENT_SLUG_CHANGE')
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    onSearchChange: this.onSearchChange,
    checkForValidSlug: this.checkForValidSlug,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { event } = state.events
  return {
    ...ownProps,
    event
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventUpdateContainer))