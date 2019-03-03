import React, { Component} from 'react'
import { withRouter, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getEvents,
  getParentEvents,
  getPastEvents,
  attendEvent,
} from 'js/components/events/actions'

import checkEqual  from 'js/utils/checkEqual'
import { secureAction } from 'js/auth/actions'


class CommunityContainer extends Component {
  componentDidMount(props) {
    this.getData()
  }

  componentDidUpdate(props, prevProps) {
    if (props.match.url !== this.props.match.url) {
      this.getData()
      mixpanel.track('COMMUNITY_EVENTS_INDEX_PAGE_VIEW')
    }
  }

  shouldComponentUpdate(nextProps) {
    return !checkEqual(this.props, nextProps);
  }

  getParams = () => {
    return (matchPath(this.props.location.pathname, '/communities/:community_id/events/:id') || this.props.match).params
  }

  getCommunityId = () => {
    const {community_id, id} = this.getParams()
    return community_id || id
  }

  getData() {
    const community_id = this.getCommunityId()
    const community_slug = this.props.slug
    this.props.getParentEvents({
      parent_id: community_id || community_slug,
      page: 1, per_page: 3,
      parent_type: 'Community',
    })
    this.props.getPastEvents({ community_id, community_slug, page: 1, per_page: 10})
  }

  getEvents = (e, meta) => {
    const { per_page } = this.props.events.meta || {}
    mixpanel.track('COMMUNITY_CURRENT_EVENTS_INDEX_PAGINATION_CLICK', {meta})
    return this.props.getParentEvents({
      page: meta.activePage, per_page,
      parent_id: this.getCommunityId() || this.props.slug,
      parent_type: 'Community',
    })
  }

  getPastEvents = (e, meta) => {
    const { per_page, activePage: page } = meta
    this.props.getPastEvents({
      page, per_page,
      community_id: this.getCommunityId(),
      slug: this.props.slug,
    })
    mixpanel.track('COMMUNITY_PAST_EVENTS_INDEX_PAGINATION_CLICK', {meta})
  }

  getProps = () => ({
    ...this.props,
    getEvents: this.getEvents,
    getPastEvents: this.getPastEvents
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {events = [], past_events, loading, error} = state.events

  return {
    events,
    past_events,
    loading,
    error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvents,
    getPastEvents,
    getParentEvents,
    attendEvent: secureAction(attendEvent),
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommunityContainer))