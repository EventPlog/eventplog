import React, { Component } from 'react'
import LoginHeader from './login-header'
import LoggedinHeader from './logged-in-header'
import Auth from '../../auth'
import styled, { css } from 'styled-components'
import defaults from '../../styles/theme/variables'
import { media } from '../../styles/mixins'

const StyledHeader = styled.div`
  border-bottom: 1px solid ${defaults.gray};
  
  .main-header {
    padding: 1rem 2rem;
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
         width: 100%; 
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
      width: 150px;
      
      ${
        media.phone`
          width: 120px;
        `
      }
    }
    
    ul {
      margin: auto 0 auto 50px;
      
      ${
        media.phone`
          margin: 2rem 0;
          
          li {
            margin: 2rem 0;
            
            &:last-child {
              margin-bottom: 0;
            }
          }
        `
      }
    }
    
    
  }
  
`

const Header = (props) => {
  return (
    <StyledHeader  className="app-header">
      {  Auth.isLoggedIn
        ? <LoggedinHeader {...props} />
        : <LoginHeader {...props} />
      }
    </StyledHeader>
  )
}

export default Header