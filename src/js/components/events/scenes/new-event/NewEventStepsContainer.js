// external
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


export class NewEventStepsContainer extends Component {
  getProps = () => ({
    ...this.props,
    ...this.state,
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
