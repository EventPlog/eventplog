import React from 'react'
import { Link, matchPath } from 'react-router-dom';
import {
  Dropdown,
  Icon,
  Menu,
} from 'semantic-ui-react'

// internal
import Button from 'js/components/shared/button'
import Nav from 'js/components/shared/nav'
import { genUserProfileLink } from 'js/utils'
import UserAvatar from './UserAvatar'

const MainMenu = ({
  inCommunity,
  hideMenu = false,
  onHideMenu,
  toggleSidebar,
  user = {},
  className,
}) => {
  const matchLogin = matchPath(location.pathname, '/login')
  if (!user.id) {
    return (
      <Nav className={className} hideOnMobile={hideMenu}>
        <Nav.Item className="sidebar-btn login">
          {matchLogin && <Button.Link to="/signup">Sign Up</Button.Link>}
          {!matchLogin && <Button.Link to="/login">Login</Button.Link>}
        </Nav.Item>
      </Nav>
    )
  }
  return (
    <Nav className={className} hideOnMobile={hideMenu}>
      <Nav.Item className="sidebar-btn">
        <Button.Link to="/events/new">Create Event</Button.Link>
      </Nav.Item>
      <Nav.Item className="user-profile">
        <Menu.Menu position='right'>
          <Dropdown text={<UserAvatar user={user} />}
                    pointing
                    className='link item'>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to={genUserProfileLink(user)}>
                  <Icon name="user circle" /> My Profile
                </Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link to={`${genUserProfileLink(user)}/settings`}>
                  <Icon name="settings" /> Settings
                </Link>
              </Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item>
                <Link to="/logout">
                  <Icon name="lock open" /> Log out
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Nav.Item>


    </Nav>
  )
}

export default MainMenu