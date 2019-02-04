import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ---------- Internal -----------
import Auth from 'js/auth'

import { getResources } from './actions'
import {
  getEvent,
  addEventToStore,
} from 'js/components/events/actions'

class EventResourcesContainer extends Component {
  state = {loading: false, error: false}

  componentDidMount() {
    this.getData()
    mixpanel.track('EVENT_RESOURCES_INDEX_PAGE_VIEW')
  }

  eventFetchedFromServer = () => (
    (!this.props.event ||
    !this.props.event.id) &&
    window.__INITIAL_DATA__ &&
    window.__INITIAL_DATA__.event
  )

  getData() {
    const { event = {}, match} = this.props
    if (event.id) {
      this.getResources()
      return
    }

    if(this.eventFetchedFromServer()) {
      const event = window.__INITIAL_DATA__.event
      this.setState({loading: false, event})
      this.props.addEventToStore(event)
      this.getResources()
      return
    }

    this.setState({loading: true})

    this.props.getEvent(match.params.event_id)
      .then(event => {
        this.setState({loading: false})
        this.getResources()
      })
      .catch(error => {
        this.setState({loading: false, error})
      })
  }

  getResources = (e, meta = {}) => {
    this.setState({ loading: true })

    const { per_page = 10 } = this.props.resources.meta || {}

    this.props.getResources({
      per_page,
      page: meta.activePage || 1,
      resource: { ...this.props.requester }
    }).finally(res => this.setState({ loading: false}))
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    getResources: this.getResources,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {resources = {}} = state.resources
  const { event = {}} = state.events

  const requester = ownProps.requester && ownProps.requester.trackable_id
    ? ownProps.requester
    : {
      trackable_id: event.id,
      trackable_type: 'Event'
    }

  return {
    resources,
    event,
    requester,
    currentUser: Auth.currentUser(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getResources,
    getEvent,
    addEventToStore,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventResourcesContainer))
