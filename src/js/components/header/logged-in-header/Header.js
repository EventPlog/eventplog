import React from 'react'
import { Link } from 'react-router-dom';
import {
  Dropdown,
  Icon,
  Menu,
} from 'semantic-ui-react'

// internal
import logo from 'img/eventplog-logo-name-inverted-small-v2.png'
import Button from 'js/components/shared/button'
import Nav from 'js/components/shared/nav'
import { genUserProfileLink } from 'js/utils'
import UserAvatar from './UserAvatar'

const Header = ({
  inCommunity,
  hideMenu,
  onHideMenu,
  user = {},
}) => (
  <div className="main-header app-container">
    <div className="logo">
      <Link to="/">
        <img src={logo} alt='eventplog-logo' />
      </Link>
      <Icon name='content' onClick={onHideMenu} />
    </div>

    <Nav hideOnMobile={hideMenu}>
      <Nav.Item>
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

      <Nav.Item>
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
                <Link to="/logout">Log out</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Nav.Item>


    </Nav>
  </div>
)

export default Header