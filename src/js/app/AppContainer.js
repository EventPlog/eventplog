import React, { Component} from 'react'
import { withRouter, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import defaults from 'js/styles/theme/variables'
import Auth from 'js/auth'

import { getSlugFromHostName } from 'js/utils'

class AppContainer extends Component {
  getProps = () => ({
    ...this.state,
    ...this.props,
    onHideMenu: this.onHideMenu,
    user: Auth.currentUser(),
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const slug = getSlugFromHostName(window.location.hostname, process.env.REACT_APP_KNOWN_SUBDOMAINS)
  const {community = {}} = state.communities
  const isCommunityPath = !!slug || matchPath(ownProps.location.pathname, '/communities/:id')
  const isHomePath = matchPath(ownProps.location.pathname, {path: '/', exact: true})
  const isLoginPath = matchPath(ownProps.location.pathname, {path: '/login', exact: true})
  const isSignuPath = matchPath(ownProps.location.pathname, {path: '/signup', exact: true})
  return {
    ...ownProps,
    slug,
    activeLink: isCommunityPath && Object.keys(community).length > 0 ? (community.brand_color || defaults.activeLink) : defaults.activeLink,
    showBreadCrumb: !(isHomePath || isLoginPath || isSignuPath)
  }
}

export default withRouter(connect(mapStateToProps)(AppContainer))


