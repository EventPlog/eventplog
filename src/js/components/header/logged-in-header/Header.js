import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../../img/eventplog-logo-small.png'
import { Icon } from 'semantic-ui-react'
import Button from '../../shared/button'
import Nav from '../../shared/nav'

const Header = ({ hideMenu, onHideMenu}) => (
  <div className="app-container">
    <div className="logo">
      <Link to="/">
        <img src={logo} alt='eventplog-logo' />
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