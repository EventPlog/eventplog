import React from 'react'
import { Link } from 'react-router-dom';

// internal
import logo from 'img/eventplog-logo-small.png'
import { Icon } from 'semantic-ui-react'
import Button from 'js/components/shared/button'
import Nav from 'js/components/shared/nav'
import grayLogo from 'img/logo-gray-full.png'

const Header = ({ activeLink, hideMenu, onHideMenu}) => (
  <div className="main-header app-container">
    <div className="logo">
      <Link to="/">
        <img src={activeLink ? grayLogo : logo } alt='eventplog-logo' />
      </Link>
      <Icon name='content' onClick={onHideMenu} />
    </div>

    <Nav hideOnMobile={hideMenu}>
      <Nav.Item>
        <Button.Link to="/communities/new"
                     activeClassName="hidden">
              <span className="hidden-lg">
                <Icon name="plus" />
                <Icon name="users" />
              </span>
          <span className="hidden-md">Create a community</span>
        </Button.Link>
      </Nav.Item>

      <Nav.Item>
        <Link to="/user/profile">My Profile</Link>
      </Nav.Item>

      <Nav.Item>

        <Link to="/logout">Log out</Link>
      </Nav.Item>
    </Nav>
  </div>
)

export default Header