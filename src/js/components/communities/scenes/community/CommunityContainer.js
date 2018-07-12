import React, { Component} from 'react'
import { withRouter, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getCommunity,
  updateCommunity,
  getCommunitiesSuggestions,
} from '../../actions'

import {
  getEvents,
  getEventsSuggestions,
  attendEvent,
  mockGetEvents
} from 'js/components/events/actions'

import checkEqual from 'js/utils/checkEqual'


class CommunityContainer extends Component {
  componentWillMount(props) {
    this.getData()
  }

  componentWillReceiveProps(nextProps, prevProps) {
    this.setState({community: nextProps.community})
  }

  handleChange = (e) => {
    this.setState({community: {...this.state.community, [e.target.name]: e.target.value} })
  }

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.match.params, this.props.match.params)) {
      this.getData()
    }
  }

  handleSubmit = () => {
    this.setState({ loading: true })
    this.props.updateCommunity(this.state.community)
      .then(community => {
        this.setState({community, loading: false, communityCreated: true})
      })
      .catch(error => this.setState({loading: false, error}))
  }

  getParams = () => {
    return (matchPath(this.props.location.pathname, '/communities/:community_id/events/:id') || this.props.match).params
  }
  getData() {
    const {community_id, id} = this.getParams()
    this.props.getCommunity(community_id || id)
    if (community_id && id) { return }
    this.props.getEvents({ community_id })
    this.props.getEventsSuggestions({ community_id })
    this.props.getCommunitiesSuggestions()
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {events = [], events_suggestions = [], loading} = state.events
  const {community = {}, communities = [], communities_suggestions} = state.communities

  return {
    activeLink: community.link_color,
    loading,
    community,
    communities_suggestions,
    events,
    events_suggestions
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvents,
    getEventsSuggestions,
    attendEvent,
    getCommunity,
    updateCommunity,
    getCommunitiesSuggestions,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommunityContainer))