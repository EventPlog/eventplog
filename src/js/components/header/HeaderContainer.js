import React, { Component} from 'react'
import { withRouter, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import Auth from '../../auth/actions'

class HeaderContainer extends Component {
  state = {
    hideMenu: true
  }

  onHideMenu = () => {
    this.setState((state) => ({hideMenu: !state.hideMenu}))
  }

  getProps = () => ({
    ...this.state,
    onHideMenu: this.onHideMenu,
    user: Auth.currentUser(),
    location: this.props.location,
    inCommunity: this.props.inCommunity
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {community = {}} = state.communities
  const match = matchPath(ownProps.location.pathname, '/communities/:id')
  return {
    inCommunity: match && Object.keys(community).length > 0 && community.link_color
  }
}

export default withRouter(connect(mapStateToProps)(HeaderContainer))


