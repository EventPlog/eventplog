// external
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  clearEventInStore
} from 'js/components/events/actions'

export class NewEventStepsContainer extends Component {
  state = { newEvent: {} }
  updateState = (updates) => this.setState(updates)

  getProps = () => ({
    ...this.props,
    ...this.state,
    updateState: this.updateState
  })


  render() {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { event = {} } = state.events
  return {
    event,
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
  }, dispatch)
)

export default connect(mapStateToProps)(NewEventStepsContainer)
