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
} from '../../actions'

import checkEqual  from 'js/utils/checkEqual'


class CommunityContainer extends Component {
  state = {community: {}}

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
    return (matchPath(this.props.location.pathname, '/communities/:community_id/events/:id') || this.props.match).params
  }

  getData() {
    const {community_id, id} = this.getParams()
    const sureCommunityId = community_id || id

    // don't bother fetching if within an event
    if (community_id && id) return

    if(!this.props.community || this.props.community.id != sureCommunityId) {
      this.props.getCommunity(community_id || id)
    }
    // this.props.getCommunitiesSuggestions({page: 1, per_page: 3})
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
  const {community = {}, communities = [], communities_suggestions} = state.communities

  return {
    activeLink: community.link_color,
    community,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCommunity,
    updateCommunity,
    followCommunity,
    unFollowCommunity,
    getCommunitiesSuggestions,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommunityContainer))