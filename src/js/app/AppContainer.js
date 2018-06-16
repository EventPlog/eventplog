import React, { Component} from 'react'
import { withRouter, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import defaults from 'js/styles/theme/variables'
import Auth from 'js/auth'

class AppContainer extends Component {
  getProps = () => ({
    ...this.state,
    onHideMenu: this.onHideMenu,
    user: Auth.currentUser(),
    location: this.props.location,
    activeLink: this.props.activeLink
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {community = {}} = state.communities
  const match = matchPath(ownProps.location.pathname, '/communities/:id')
  return {
    activeLink: match && Object.keys(community).length > 0 ? community.link_color : defaults.activeLink,
  }
}

export default withRouter(connect(mapStateToProps)(AppContainer))


