import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getEvent } from '../actions'

class MainContentContainer extends Component {
  componentWillMount(props) {
    const {events} = this.props
    if(events && events.length > 0) return
    this.props.getEvent(this.props.match.params.id);
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentContainer))