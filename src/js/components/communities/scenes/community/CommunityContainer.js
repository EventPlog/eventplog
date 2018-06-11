import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCommunities, mockGetCommunities } from '../../actions'

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
    community: mockData.communities[0] || state.communities,
    communities_suggestions: mockData.communities.filter(c => !c.joined).slice(0,1) || state.communities,
    events: mockData.events.filter(e => e.interested) || state.events,
    events_suggestions: mockData.events.filter(e => !e.interested).slice(0,2) || state.events,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCommunities: mockGetCommunities
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentContainer))