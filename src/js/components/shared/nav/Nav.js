import React from 'react'
import styled, { css } from 'styled-components'
import { media } from '../../../styles/mixins'
import Button from '../button'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

const Styles = styled.div`
    transition: display 2s;
    
    ul {
      list-style: none;
      display: inline-flex;
      font-weight: 500;
      text-transform: uppercase;
      font-size: var(--font-size, 0.9rem);
      letter-spacing: 1.2px;
      
      ${
        media.tablet`
          margin: 0;
          padding: 0;
        `
      } 
      
      ${
        media.phone`
          flex-direction: column;
          /*margin-top: 2rem;*/
          width: 100%;
          justify-content: space-between;
        `
      }
    }
    
    li {
      margin: auto 50px auto 0;
      
      &:last-child, .right-last-child {
        margin-right: 0;
      }
      
      ${
        media.phone`
          margin: 0;
        `
      }
      
      ${
        media.tablet`
          margin: auto 20px auto 0;
          
          &:last-child, .right-last-child {
            margin-right: 0;
          }
          
          
        `
      }
      
    }
    
`

const Nav = function({
  hideOnMobile,
  className = '',
  children
}) {
  return (
    <Styles>
      <div className={`${className} menu ${hideOnMobile ? 'hidden-xs' : '' }`}>
        <ul>
          {children}
        </ul>
      </div>
    </Styles>
  )
}

Nav.Item = function({className, children}) {
  return (
    <li className={className}>{children}</li>
  )
}

export default Nav