import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ---------- Internal -----------
import { getPresentations } from './actions'
import Auth from 'js/auth'
import checkEqual from 'js/utils/checkEqual'

import {
  getEvent,
  addEventToStore,
} from 'js/components/events/actions'

class PresentationsContainer extends Component {
  state = {loading: false, error: false}

  componentDidMount() {
    this.getData()
    mixpanel.track('PRESENTATIONS_INDEX_PAGE_VIEW')
  }

  eventFetchedFromServer = () => (
    (!this.props.event ||
    !this.props.event.id) &&
    window.__INITIAL_DATA__ &&
    window.__INITIAL_DATA__.event
  )

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.match.params, this.props.match.params)) {
      this.getPresentations()
    }
  }

  getData() {
    const { event = {}, match} = this.props
    if (event.id) {
      this.getPresentations(event)
      return
    }

    if(this.eventFetchedFromServer()) {
      const event = window.__INITIAL_DATA__.event
      this.setState({loading: false, event})
      this.props.addEventToStore(event)
      this.getPresentations(event)
      return
    }

    this.setState({loading: true})

    this.props.getEvent(match.params.event_id)
      .then(event => {
        this.setState({loading: false, event})
        this.getPresentations(event)
      })
      .catch(error => {
        this.setState({loading: false, error})
      })
  }

  getPresentations = (event = {}, meta = {}) => {
    this.setState({ loading: true })

    const { per_page = 10 } = this.props.presentations.meta || {}

    this.props.getPresentations({
      per_page,
      page: meta.activePage || 1,
      presentation: {
        event_id: event.id ? event.id : this.props.event.id,
      }
    }).finally(res => this.setState({ loading: false}))
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    getPresentations: this.getPresentations,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {presentations = {}} = state.presentations
  const { event = {}} = state.events

  return {
    presentations,
    event,
    currentUser: Auth.currentUser(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getPresentations,
    getEvent,
    addEventToStore,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PresentationsContainer))
