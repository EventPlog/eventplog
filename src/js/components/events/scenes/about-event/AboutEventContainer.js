import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import checkEqual from 'js/utils/checkEqual'
import Auth from 'js/auth'

import {
  getEvent,
  updateEvent,
  createComment,
  updateComment,
  getAnnouncements,
  createAnnouncement,
  updateAnnouncement,
  getPastEvents,
  attendEvent,
} from '../../actions'

import { secureAction } from 'js/auth/actions'

class EventContainer extends Component {
  state = {event: {}}

  componentWillMount() {
  }

  shouldComponentUpdate(nextProps) {
    return !checkEqual(this.props, nextProps);
  }

  handleChange = (key, value) => {
    const event = this.state.event && this.state.event.id
                    ? this.state.event
                    : this.props.event
    this.setState({event: {...event, [key]: value }})
  }

  handleSubmit = () => {
    const {commuity, ...others} = this.state.event
    return this.props.updateEvent(others).then(event => this.setState({event}))
  }

  getProps = () => ({
    ...this.state,
    ...this.props,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    attendEvent: this.attendEvent,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {event = {}, past_events = {}} = state.events
  const { organizers } = state.organizers
  const {link_color } = event;
  const { community, communities_suggestions } = state.communities
  return {
    activeLink: community.brand_color,
    event,
    community,
    organizers,
    past_events,
    communities_suggestions,
    currentUser: Auth.currentUser(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvent,
    getPastEvents,
    updateEvent: secureAction(updateEvent),
    attendEvent: secureAction(attendEvent),
    getAnnouncements,
    createComment: secureAction(createComment),
    updateComment: secureAction(updateComment),
    createAnnouncement: secureAction(createAnnouncement),
    updateAnnouncement: secureAction(updateAnnouncement),
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventContainer))