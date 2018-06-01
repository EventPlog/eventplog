import React, { Component } from 'react'
import LoginHeader from './login-header'
import LoggedinHeader from './logged-in-header'
import Auth from '../../auth'
import styled from 'styled-components'
import defaults from '../../../theme/variables'
import { media } from '../../../styles/mixins'

const StyledHeader = styled.div`
  border-bottom: 1px solid #eee;
  
  > .app-container {
    display: flex;
    justify-content: space-between; 
    
    .logo {
      margin: auto 0;
      
      ${
        media.phone`
         color: var(--activeLink);
         display: flex;
         justify-content: space-between;
         align-items: flex-end;
        ` 
      }
      
    }
    img {
      width: 180px;
      
      ${
        media.phone`
          width: 150px;
        `
      }
    }
    
    .menu {
      transition: display 2s;
     
      &.hidden {
        display: none;
      }
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
      
      ${
        media.phone`
          margin: 0;
          padding: 0;
          flex-direction: column;
          margin-top: 2rem;
        `
      }
    }
    
    li:not(:last-child) {
      margin: auto 50px;
      
      ${
        media.phone`
          margin: 0;
        `
      }
    }
    
    a {
      color: ${defaults.activeLink};
      color: var(--activeLink);
    }
    
    i {
      ${
        media.phone`
          font-size: 2rem;
        `
      }
    }
  }
`

const Header = (props) => (
  <StyledHeader className="app-header">
    {  Auth.isLoggedIn
        ? <LoggedinHeader {...props} />
        : <LoginHeader {...props} />
    }
  </StyledHeader>
)

export default Header