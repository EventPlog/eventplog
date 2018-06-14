import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getEvents, mockGetEvents } from '../../actions'
import { getCommunities, mockGetCommunities } from 'js/components/communities/actions'
import checkEqual from 'js/utils/checkEqual'

class MainContentContainer extends Component {
  componentWillMount(props) {
    this.getData()
  }

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.match.params, this.props.match.params)) {
      this.getData()
    }
  }

  getData() {
    this.props.getEvents();
    this.props.getCommunities();
  }

  render () {
    return this.props.children({ ...this.props })
  }
}

const mapStateToProps = (state, ownProps) => {
  const { community_id = 0} = ownProps.match.params
  const {events = []} = state.events
  const {communities = []} = state.communities
  return {
    events: events.filter(e => e.interested) || state.events,
    events_suggestions: events.filter(e => !e.interested) || state.events,
    communities_suggestions: communities.filter(c => !c.joined).slice(0,1) || state.communities,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvents: mockGetEvents,
    getCommunities: mockGetCommunities
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentContainer))