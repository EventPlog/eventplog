import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../../../../../img/eventplog-logo-small.png'
import defaults from '../../../../../theme/variables'

const StyledHeader = styled.div`
  border-bottom: 1px solid #eee;
  
  > .app-container {
    display: flex;
    justify-content: space-between; 
    
    .logo {
      margin: auto 50px;
    }
    
    img {
      width: 200px;
    }
    
    ul {
      list-style: none;
      display: inline-flex;
      margin: auto 0 auto 50px;
      line-height: 70px;
      font-weight: 600;
      
    }
    
    li:not(:last-child) {
      margin: auto 50px;
    }
    
    a {
      color: ${defaults.activeLink};
      color: var(--activeLink);
    }
  }
`

const Header = () => (
  <StyledHeader className="header">
    <div className="app-container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt='eventplog-logo' />
        </Link>
      </div>

      <div className="menu">
        <ul>
          <li><Link to="/why-eventplog">Why EventPlog?</Link></li>
          <li><Link to="/about-us">About Us?</Link></li>
        </ul>
      </div>
    </div>
  </StyledHeader>
)

export default Header