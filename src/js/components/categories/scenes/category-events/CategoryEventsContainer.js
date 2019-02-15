import React, { Component} from 'react'
import { withRouter, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getEvents,
  getPastEvents,
  attendEvent,
  getParentEvents,
} from 'js/components/events/actions'

import checkEqual  from 'js/utils/checkEqual'
import { secureAction } from 'js/auth/actions'


class CategoryContainer extends Component {
  componentDidMount(props) {
    this.getData()
  }

  componentDidUpdate(props, prevProps) {
    if (props.match.url !== this.props.match.url) {
      // this.getData()
      mixpanel.track('CATEGORY_EVENTS_INDEX_PAGE_VIEW')
    }
  }

  shouldComponentUpdate(nextProps) {
    return !checkEqual(this.props, nextProps);
  }

  getParams = () => {
    return (matchPath(this.props.location.pathname, '/categories/:category_id/events/:id') || this.props.match).params
  }

  getCategoryId = () => {
    const {category_id, id} = this.getParams()
    return category_id || id
  }

  getParentParams = () => ({
    parent_id: this.getCategoryId(),
    parent_type: 'Category'
  })

  getData() {
    const category_id = this.getCategoryId()
    const category_slug = this.props.slug
    this.props.getParentEvents({ ...this.getParentParams(), page: 1, per_page: 10})
    this.props.getPastEvents({ ...this.getParentParams(), page: 1, per_page: 10})
  }

  getEvents = (e, meta) => {
    const { per_page } = this.props.events.meta || {}
    this.props.getParentEvents({
      page: meta.activePage, per_page,
      ...this.getParentParams()
    }).then(() => document.querySelector('.pusher').scrollTop = 0)
    mixpanel.track('CATEGORY_CURRENT_EVENTS_INDEX_PAGINATION_CLICK', {meta})
  }

  getPastEvents = (e, meta) => {
    const { per_page, activePage: page } = meta
    this.props.getPastEvents({
      page, per_page,
      slug: this.props.slug,
      ...this.getParentParams(),
    })
    mixpanel.track('CATEGORY_PAST_EVENTS_INDEX_PAGINATION_CLICK', {meta})
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryContainer))