import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getOrganizations } from '../actions'

class MainContentContainer extends Component {
  componentWillMount(props) {
    const {events} = this.props
    if(events && events.length > 0) return
    this.props.getOrganizations();
  }
  render () {
    return this.props.children({ ...this.props })
  }
}

const mapStateToProps = (state, ownProps) => {
  return {events: state.events}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getOrganizations
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentContainer))