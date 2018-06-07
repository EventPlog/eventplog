import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../../img/eventplog-logo-small.png'
import { Icon } from 'semantic-ui-react'
import Nav from '../../shared/nav'

const Header = ({ hideMenu, onHideMenu }) => (
  <div className="app-container">
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
    </Nav>
  </div>
)

export default Header