import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getEvent } from '../actions'

class EventContainer extends Component {
  state = {}

  static getDerivedStateFromProps(nextProps, prevState) {
    const {events} = nextProps
    if(events && events.length > 0) return
    nextProps.getEvent(nextProps.match.params.id);
    return {}
  }

  render () {
    return this.props.children({ ...this.props })
  }
}

const mapStateToProps = (state, ownProps) => {
  return {event: state.events.event}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvent
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventContainer))