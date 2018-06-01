import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../../../../img/eventplog-logo-small.png'
import defaults from '../../../../theme/variables'
import Auth from '../../../auth'
import { Icon } from 'semantic-ui-react'

const Header = ({ hideMenu, onHideMenu}) => (
  <div className="app-container">
    <div className="logo">
      <Link to="/">
        <img src={logo} alt='eventplog-logo' />
      </Link>
      <Icon name='content' onClick={onHideMenu} />
    </div>

    <div className={`menu ${hideMenu ? 'hidden' : '' }`}>
      <ul>
        <li><Link to="/user/profile">My Profile</Link></li>
        <li><Link to="/logout">Log out</Link></li>
      </ul>
    </div>
  </div>
)

export default Header