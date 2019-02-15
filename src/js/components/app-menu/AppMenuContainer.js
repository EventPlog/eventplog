import React, { Component } from 'react'
import { withRouter, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import { withTheme } from 'styled-components'

// ========= INTERNAL ============
import Auth from 'js/auth/actions'
import menuItemsGen from './sidebarMenuItems'
import {
  genEventLink,
  genCommunityLink,
  genUserProfileLink,
} from 'js/utils'

class AppMenuContainer extends Component {
  state = {}

  toggleSidebar = () => this.props.toggleSidebar()
  handleSidebarHide = () => this.props.toggleSidebar()
  handleContextRef = contextRef => this.setState({ contextRef })

  getProps = () => ({
    ...this.state,
    ...this.props,
    toggleSidebar: this.toggleSidebar,
    handleSidebarHide: this.handleSidebarHide,
    handleContextRef: this.handleContextRef,
  })

  render() {
    const { visible } = this.state

    return (
      this.props.children(this.getProps())
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // const {menu = {}} = state.sidebar || {}
  const { event = {} } = state.events
  const { community = {} } = state.communities
  const { category = {} } = state.categories
  const { user = {} } = state.users
  const currentUser = Auth.currentUser()
  const isMobile = ownProps.theme.width < 650
  const { showSidebar, toggleSidebar, sidebarWidth } = ownProps.theme
  const menuMatch = menuItemsGen.find(menuItem => matchPath(ownProps.location.pathname, {path: menuItem.path, isExact: true}))

  const menuToShow = {
    category: () => menuMatch.genItems(category),
    community: () => menuMatch.genItems(community),
    event: () => menuMatch.genItems(event),
    backstage: () => menuMatch.genItems(event),
    user: () => menuMatch.genItems(user),
  }

  return {
    isMobile,
    showSidebar,
    toggleSidebar,
    sidebarWidth,
    user: currentUser,
    menu: menuMatch && menuToShow[menuMatch.name] ? menuToShow[menuMatch.name]() : {}
  }
}

export default withRouter(withTheme(connect(mapStateToProps)(AppMenuContainer)))
