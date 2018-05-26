import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../../img/eventplog-logo-small.png'


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
        <li><Link to="/why-eventplog">Why EventPlog?</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
      </ul>
    </nav>
  </nav>
)

export default Header