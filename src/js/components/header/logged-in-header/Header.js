import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../../../../img/eventplog-logo-small.png'
import defaults from '../../../../styles/theme/variables'
import Auth from '../../../auth'
import { Icon } from 'semantic-ui-react'
import Button from '../../shared/button'

const Header = ({ hideMenu, onHideMenu}) => (
  <div className="app-container">
    <div className="logo">
      <Link to="/">
        <img src={logo} alt='eventplog-logo' />
      </Link>
      <Icon name='content' onClick={onHideMenu} />
    </div>

    <div className={`menu ${hideMenu ? 'hidden-xs' : '' }`}>
      <ul>
        <li>
          <Button.Link to="/communities/new"
                       activeClassName="hidden">
            <span className="hidden-lg">
              <Icon name="plus" />
              <Icon name="users" />
            </span>
            <span className="hidden-md">Create a community</span>
          </Button.Link>
        </li>
        <li><Link to="/user/profile">My Profile</Link></li>
        <li><Link to="/logout">Log out</Link></li>
      </ul>
    </div>
  </div>
)

export default Header