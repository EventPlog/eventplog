import React from 'react'
import { Link } from 'react-router-dom';
import {
  Dropdown,
  Icon,
  Menu,
} from 'semantic-ui-react'

// internal
import logo from 'img/eventplog-small.png'
import { genUserProfileLink } from 'js/utils'

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