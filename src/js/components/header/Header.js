import React, { Component } from 'react'
import LoginHeader from './login-header'
import LoggedinHeader from './logged-in-header'
import Auth from '../../auth'
import styled from 'styled-components'
import defaults from '../../styles/theme/variables'
import { media } from '../../styles/mixins'

const StyledHeader = styled.div`
  border-bottom: 1px solid ${defaults.gray};
  
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
      
      i {
        display: none;
        
        ${
          media.phone`
            display: block;
            font-size: 2rem;
          `
        }
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
    
    ul {
      margin: auto 0 auto 50px;
    }
    
    a {
      color: ${defaults.activeLink};
      color: var(--activeLink);
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