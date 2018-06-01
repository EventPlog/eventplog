import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
    onHideMenu: this.onHideMenu
  })

  render () {
    return this.props.children(this.getProps())
  }
}

export default HeaderContainer
