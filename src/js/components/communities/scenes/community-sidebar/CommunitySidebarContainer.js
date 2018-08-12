import React, { Component} from 'react'
import { withRouter, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  followCommunity,
  getCommunitiesSuggestions,
} from '../../actions'

import checkEqual  from 'js/utils/checkEqual'


class CommunityContainer extends Component {

  componentDidMount(props) {
    this.getData()
  }

  componentDidUpdate(props, prevProps) {
    if (props.match.url !== this.props.match.url) {
      this.getData()
    }
  }

  shouldComponentUpdate(nextProps) {
    return !checkEqual(this.props, nextProps);
  }

  getParams = () => {
    return (matchPath(this.props.location.pathname, '/communities/:community_id/events/:id') || this.props.match).params
  }

  getData() {
    const {community_id, id} = this.getParams()
    const sureCommunityId = community_id || id

    this.props.getCommunitiesSuggestions({
      community_id: sureCommunityId,
      page: 1,
      per_page: 3
    })
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {community = {}, communities_suggestions, loading} = state.communities

  return {
    activeLink: community.link_color,
    communities_suggestions,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    followCommunity,
    getCommunitiesSuggestions,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommunityContainer))