import React from 'react'
import { Link, matchPath } from 'react-router-dom';
import logo from 'img/eventplog-logo-name-inverted-small-v2.png'
import { Icon } from 'semantic-ui-react'
import Button from 'js/components/shared/button'
import Nav from 'js/components/shared/nav'

const Header = ({
  location = {},
  hideMenu,
  onHideMenu
}) => {
  const matchLogin = matchPath(location.pathname, '/login')
  return (
    <Nav hideOnMobile={hideMenu}>
      <Nav.Item>
        <Link to="/about-us">About Us</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/login">Create Event</Link>
      </Nav.Item>

      {!matchLogin &&
      <Nav.Item>
        <Button.Link to="/login"
                     activeClassName="hidden">
          <span>Login</span>
        </Button.Link>
      </Nav.Item>}

      {matchLogin &&
      <Nav.Item>
        <Button.Link to="/signup"
                     activeClassName="hidden">
          <span>Sign Up</span>
        </Button.Link>
      </Nav.Item>}
    </Nav>
  )
}

export default Header