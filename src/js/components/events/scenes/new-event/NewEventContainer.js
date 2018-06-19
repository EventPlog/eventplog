// external
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

/// utilities
import { createEvent, mockCreateEvent } from '../../actions'

export class EventContainer extends Component {
  state = {
    event: {name: ''},
    error: false,
    eventCreated: false
  }

  handleChange = (e) => {
    this.setState({event: {[e.target.name]: e.target.value} })
  }

  submitEvent = () => {
    this.setState({ loading: true })
    this.props.createEvent(this.state.event).then(res => {
      this.setState({loading: false, eventCreated: true})
    })
      .catch(error => this.setState({loading: false, error}))
  }

  getProps = () => ({
    ...this.state,
    token: this.props.token,
    handleChange: this.handleChange,
    submitEvent: this.submitEvent,
  })

  render() {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  let token = ownProps.match ? ownProps.match.params.token : null
  return {token}
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    createEvent: mockCreateEvent
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventContainer))
