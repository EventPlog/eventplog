import React from 'react'
import { Link } from 'react-router-dom';

// internal
import logo from 'img/eventplog-logo-name-inverted-small-v2.png'
import { Icon } from 'semantic-ui-react'
import Nav from 'js/components/shared/nav'
import grayLogo from 'img/logo-gray-full-v2.png'

const Header = ({ inCommunity, hideMenu, onHideMenu}) => (
  <div className="main-header app-container">
    <div className="logo">
      <Link to="/">
        <img src={logo} alt='eventplog-logo' />
      </Link>
      <Icon name='content' onClick={onHideMenu} />
    </div>

    <Nav hideOnMobile={hideMenu}>
      {/**<Nav.Item>
        {!inCommunity &&
          <Button.Link to="/c/new"
                     activeClassName="hidden">
              <span className="hidden-lg hidden-xs">
                <Icon name="plus" />
                <Icon name="users" />
              </span>
            <span className="hidden-md">Create a community</span>
          </Button.Link>}

        {inCommunity &&
          <Link to="/c/new"
                     activeClassName="hidden">
              <span className="hidden-lg hidden-xs">
                <Icon name="plus" />
                <Icon name="users" />
              </span>
            <span className="hidden-md">Create a community</span>
          </Link>}
      </Nav.Item>
        **/}

      {/*<Nav.Item>*/}
        {/*<Link to="/user/profile">My Profile</Link>*/}
      {/*</Nav.Item>*/}

      <Nav.Item>
        <Link to="/events/new">Create Event</Link>
      </Nav.Item>

      <Nav.Item>
        <Link to="/logout">Log out</Link>
      </Nav.Item>
    </Nav>
  </div>
)

export default Header