import React, { Component} from 'react'
import { withRouter, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getCommunity,
  updateCommunity,
  followCommunity,
  unFollowCommunity,
  getCommunitiesSuggestions,
  checkForValidSlug,
} from '../../actions'

import { secureAction } from 'js/auth/actions'
import { getSlugFromHostName } from 'js/utils'


class CommunityContainer extends Component {
  state = {community: {}, slug_check: {}}

  componentDidMount(props) {
    this.getData()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {community: nextProps.community}
  }

  componentDidUpdate(props, prevProps) {
    if (props.match.url !== this.props.match.url) {
      this.getData()
    }
  }

  handleChange = (e, attr) => {
    var elAttr = attr && attr.name ? attr : e
    this.setState({
      community: {
        ...this.state.community,
        [elAttr.name]: elAttr.value
      }
    })
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
    return (matchPath(this.props.location.pathname, '/c/:community_id/e/:id') || this.props.match).params
  }

  getData() {
    const {community_id, id} = this.getParams()
    const sureCommunityId = community_id || id

    // don't bother fetching if within an event
    if (community_id && id) return

    if(!this.props.community || !this.props.community.id || !(this.props.community.id == sureCommunityId || this.props.community.slug == sureCommunityId)) {
      this.props.getCommunity(community_id || id, this.props.slug)
        .then(community => this.setState({loading: false, community}))
        .catch(error => this.setState({loading: false, error}))
    }
  }

  checkForValidSlug = () => {
    if (this.props.community.slug == this.state.community.slug) { return }
    this.setState({slug_check: {loading: true}})

    this.props.checkForValidSlug(this.state.community.slug).then(res => {
      this.setState({slug_check: !res.slug ? {valid: true} : {error: 'Slug not available'}})
    }).catch(error => this.setState({slug: {error}}))
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    checkForValidSlug: this.checkForValidSlug,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {community = {}, communities = [], communities_suggestions} = state.communities

  return {
    activeLink: community.link_color,
    community,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCommunity,
    getCommunitiesSuggestions,
    checkForValidSlug,
    updateCommunity: secureAction(updateCommunity),
    followCommunity: secureAction(followCommunity),
    unFollowCommunity: secureAction(unFollowCommunity),
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommunityContainer))