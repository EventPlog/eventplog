import React, { Component} from 'react'
import { withRouter, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import defaults from 'js/styles/theme/variables'
import Auth from 'js/auth'

import { getSlugFromHostName } from 'js/utils'

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, showSidebar: false };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  toggleSidebar = () => {
    const { showSidebar } = this.state
    const show = showSidebar == undefined ? window.innerHeight >= 650 : !showSidebar
    this.setState({ showSidebar: show })
  }

  getProps = () => ({
    ...this.state,
    ...this.props,
    onHideMenu: this.onHideMenu,
    currentUser: Auth.currentUser(),
    toggleSidebar: this.toggleSidebar
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {community = {}} = state.communities
  const { event = {}} = state.events
  const user = Auth.currentUser();
  const linkColor = community.id ? community.brand_color : event.brand_color
  const isCommunityPath = matchPath(ownProps.location.pathname, '/c/:id')
  const isEventPath = matchPath(ownProps.location.pathname, '/e/:id')
  const isInternalPath = !matchPath(ownProps.location.pathname, '/ext/*')
  const isHomePath = matchPath(ownProps.location.pathname, {path: '/', exact: true})
  const isLoginPath = matchPath(ownProps.location.pathname, {path: '/login', exact: true})
  const isSignuPath = matchPath(ownProps.location.pathname, {path: '/signup', exact: true})
  const shouldApplyBrandColor = (isCommunityPath || isEventPath || !isInternalPath) && linkColor

  return {
    ...ownProps,
    isInternalPath,
    user,
    activeLink: shouldApplyBrandColor ? (linkColor || defaults.activeLink) : (user.brand_color || defaults.activeLink),
    showBreadCrumb: !(isHomePath || isLoginPath || isSignuPath)
  }
}

export default withRouter(connect(mapStateToProps)(AppContainer))


