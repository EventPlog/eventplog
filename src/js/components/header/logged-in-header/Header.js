import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../../../../img/eventplog-logo-small.png'
import defaults from '../../../../theme/variables'
import Auth from '../../../auth'

const Header = () => (
  <nav className="navBar">
    <nav className="wrapper">
      <div className="logo ">
        <Link to="/">
          <img src={logo} alt='eventplog-logo' />
        </Link>
      </div>
      <input type="checkbox" id="menu-toggle" />
      <label for="menu-toggle" className="label-toggle"></label>
      <ul>
      <li><Link to="/user/profile">My Profile</Link></li>
        <li><Link to="/logout">Log out</Link></li>
      </ul>
    </nav>
  </nav>
  
)

export default Header