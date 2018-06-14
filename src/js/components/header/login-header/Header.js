import React from 'react'
import { Link, matchPath } from 'react-router-dom';
import logo from 'img/eventplog-logo-small.png'
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
    <div className="main-header app-container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt='eventplog-logo' />
        </Link>

        <Icon name='content' onClick={onHideMenu} />
      </div>

      <Nav hideOnMobile={hideMenu}>
        <Nav.Item>
          <Link to="/why-eventplog">Why EventPlog?</Link>
        </Nav.Item>

        <Nav.Item>
          <Link to="/about-us">About Us</Link>
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
    </div>
  )
}

export default Header