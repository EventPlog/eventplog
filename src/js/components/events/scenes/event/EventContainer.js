import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getEvent, getEvents, mockGetEvent, mockGetEvents } from '../../actions'
import { getCommunities, mockGetCommunities } from 'js/components/communities/actions'
import checkEqual from 'js/utils/checkEqual'


class MainContentContainer extends Component {
  componentWillMount() {
    this.getData()
  }

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.match.params, this.props.match.params)) {
      this.getData()
    }
  }

  getData() {
    this.props.getCommunities();
    this.props.getEvent(this.props.match.params.id);
    this.props.getEvents()
  }
  render () {
    return this.props.children({ ...this.props })
  }
}

const mapStateToProps = (state, ownProps) => {
  const {community_id, id} = ownProps.match.params
  const {event = {}, events = []} = state.events
  const {link_color, community = {} } = event;
  const { communities } = state.communities
  return {
    activeLink: link_color,
    event,
    community,
    events_suggestions: events.filter(e => !e.interested && e.community.id != community_id),
    communities_suggestions: communities.filter(c => c.joined).slice(0,1),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvent: mockGetEvent,
    getEvents: mockGetEvents,
    getCommunities: mockGetCommunities
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentContainer))