import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../../img/eventplog-logo-small.png'

const Header = () => (
  <div className="app-container">
    <div className="logo">
      <Link to="/">
        <img src={logo} alt='eventplog-logo' />
      </Link>
    </div>

    <div className="menu">
      <ul>
        <li><Link to="/why-eventplog">Why EventPlog?</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
      </ul>
    </div>
  </div>
)

export default Header