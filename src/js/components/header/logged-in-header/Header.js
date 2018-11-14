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
import MainMenu from './MainMenu'

const Header = ({
  toggleSidebar,
  ...otherProps,
}) => (
  <div className="main-header app-container">
    <div className="logo">
      <Link to="/">
        <img src={logo} alt='eventplog-logo' />
      </Link>
      <Icon name='content' onClick={toggleSidebar} />
    </div>

  </div>
)

export default Header