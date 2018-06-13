import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getCommunities,
  mockGetCommunities,
  mockGetCommunity
} from '../../actions'
import { getEvents, mockGetEvents } from 'js/components/events/actions'
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
    this.props.getCommunity(this.props.match.params.id)
    this.props.getCommunities()
    this.props.getEvents()
  }
  render () {
    return this.props.children({ ...this.props })
  }
}

const mapStateToProps = (state, ownProps) => {
  const {community_id, id} = ownProps.match.params
  const {events = [], loading} = state.events
  const {community = {}, communities = []} = state.communities
  return {
    activeLink: community.link_color,
    loading,
    community,
    communities_suggestions: communities.filter(c => !c.joined).slice(0,1) || state.communities,
    events: events.filter(e => e.interested) || state.events,
    events_suggestions: events.filter(e => !e.interested).slice(0,2) || state.events,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvents: mockGetEvents,
    getCommunity: mockGetCommunity,
    getCommunities: mockGetCommunities
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentContainer))