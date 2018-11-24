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
  state = { visible: false }

  toggleSidebar = () => this.setState({ visible: !this.state.visible })
  handleSidebarHide = () => {
    this.setState({ visible: false })
    this.props.toggleSidebar()
  }
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
  const { user = {} } = state.users
  const currentUser = Auth.currentUser()
  const isMobile = ownProps.theme.width < 650
  const { showSidebar, toggleSidebar } = ownProps.theme
  const menuMatch = menuItemsGen.find(menuItem => matchPath(ownProps.location.pathname, {path: menuItem.path, isExact: true}))

  return {
    isMobile,
    showSidebar,
    toggleSidebar,
    user: currentUser,
    menu: menuMatch ? menuMatch.genItems(community, event, user) : {}
  }
}

export default withRouter(withTheme(connect(mapStateToProps)(AppMenuContainer)))
