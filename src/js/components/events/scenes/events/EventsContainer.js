import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getEvents, mockGetEvent } from '../../actions'

import mockData from '../../mockApi/data'

class MainContentContainer extends Component {
  componentWillMount(props) {
    const {events} = this.props
    if(events && events.length > 0) return
    // this.props.getCommunities();
  }
  render () {
    return this.props.children({ ...this.props })
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    events: mockData.events || state.events,
    communities: mockData.communities.filter(c => c.joined) || state.communities,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvents
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentContainer))