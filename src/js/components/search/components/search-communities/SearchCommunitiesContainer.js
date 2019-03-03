import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// ---------- Internal -----------

import {
  getCommunitiesByName,
  followCommunity
} from 'js/components/communities/actions'

import checkEqual from 'js/utils/checkEqual'
import Auth from 'js/auth'
import { secureAction } from 'js/auth/actions'

// -------- Components -----------

class SearchCommunitiesContainer extends Component {
  componentWillMount(props) {
    this.getData()
  }

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.query, this.props.query)) {
      this.getData()
      mixpanel.track('SEARCH_COMMUNITIES_INDEX_PAGE_VIEW')
    }
  }

  getData() {
    this.props.getCommunitiesByName({page: 1, per_page: 10, ...this.getNameFromProps()});
  }

  getNameFromProps() {
    const { query = {}} = this.props
    return {name: query.title}
  }

  getCommunities = (e, meta) => {
    const { per_page } = this.props.events.meta || {}
    mixpanel.track('SEARCH_COMMUNITIES_INDEX_PAGINATION_CLICK', {meta})
    return this.props.getCommunitiesByName({...this.getNameFromProps(), page: meta.activePage, per_page})
  }

  getProps = () => ({
    ...this.props,
    ...this.props.location,
    getCommunities: this.getCommunities,
    currentUser: Auth.currentUser(),
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {communities = {}} = state.communities
  const { query = {} } = state.search
  return {
    communities,
    query,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCommunitiesByName,
    followCommunity: secureAction(followCommunity),
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchCommunitiesContainer))