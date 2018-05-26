import React, { Component } from 'react'
import LoginHeader from './login-header'
import LoggedinHeader from './logged-in-header'
import Auth from '../../auth'
import styled from 'styled-components'
import defaults from '../../../theme/variables'

const StyledHeader = styled.div`
  border-bottom: 1px solid #eee;
  
  > .app-container {
    display: flex;
    justify-content: space-between; 
    
    .logo {
      margin: auto 0;
    }
    
    img {
      width: 180px;
    }
    
    ul {
      list-style: none;
      display: inline-flex;
      margin: auto 0 auto 50px;
      line-height: 70px;
      font-weight: 500;
      text-transform: uppercase;
      font-size: 0.9rem;
      letter-spacing: 1.2px;
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
  <StyledHeader className="app-header">
    {  Auth.isLoggedIn
        ? <LoggedinHeader />
        : <LoginHeader />
    }
  </StyledHeader>
)

export default Header