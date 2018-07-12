import React, { Component} from 'react'
import { withRouter, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import defaults from 'js/styles/theme/variables'
import Auth from 'js/auth'

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
  const {community = {}} = state.communities
  const match = matchPath(ownProps.location.pathname, '/communities/:id')
  return {
    ...ownProps,
    activeLink: match && Object.keys(community).length > 0 ? (community.brand_color || defaults.activeLink) : defaults.activeLink,
  }
}

export default withRouter(connect(mapStateToProps)(AppContainer))


