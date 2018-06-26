import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCommunities, mockGetCommunities, mockGetCommunity } from '../../actions'
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
    this.props.getCommunities()
    this.props.getEvents()
  }

  render () {
    return this.props.children({ ...this.props })
  }
}

const mapStateToProps = (state, ownProps) => {
  const {loading, events = []} = state.events
  const {communities = []} = state.communities
  return {
    loading,
    communities: communities.filter(c => c.joined) || state.communities,
    communities_suggestions: communities.filter(c => !c.joined) || state.communities,
    events_suggestions: events.filter(e => e.interested).slice(0,2) || state.events,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCommunities: mockGetCommunities,
    getEvents: mockGetEvents,
    getCommunity: mockGetCommunity
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentContainer))