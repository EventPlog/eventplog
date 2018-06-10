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
    communities: mockData.communities.filter(c => c.joined) || state.communities,
    communities_suggestions: mockData.communities.filter(c => !c.joined) || state.communities,
    events_suggestions: mockData.events || state.events,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCommunities: mockGetCommunities
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentContainer))