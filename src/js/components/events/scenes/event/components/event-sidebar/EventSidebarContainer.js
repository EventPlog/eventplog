import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import checkEqual from 'js/utils/checkEqual'

import {
  getPastEvents,
  attendEvent,
} from 'js/components/events/actions'


class EventContainer extends Component {
  state = {event: {}}

  componentWillMount() {
    this.getData()
  }

  shouldComponentUpdate(nextProps) {
    return !checkEqual(this.props, nextProps);
  }

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.match.params, this.props.match.params)) {
      this.getData()
    }
  }

  getData() {
    const {community_id, id} = this.props.match.params
    this.props.getPastEvents({id, community_id, page: 1, per_page: 3})
  }

  getProps = () => ({
    ...this.state,
    ...this.props,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {event = {}, past_events = {}} = state.events
  const { community } = state.communities
  const { announcements } = event
  return {
    activeLink: community.brand_color,
    event,
    announcements,
    community,
    past_events,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getPastEvents,
    attendEvent
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventContainer))