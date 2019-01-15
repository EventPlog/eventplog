import React from 'react'
import styled from 'styled-components'
import color from '../../styles/theme/variables'
import footerLogo from 'img/eventplog-inverted-small.png'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { lighten } from 'polished'
import { media } from '../../styles/mixins'

const StyledFooter = styled.div`
   display: flex;
   flex-direction: column;
   border-top: 1px solid #ccc;
   color: var(--fg);
   background: ${props => lighten(-0.1, props.theme.activeLinkBg)}; 
   z-index: 100;
   
   .app-container {
    padding: 1rem 2rem;
   }
   
    a {
      color: ${color.grayLight}
    }
    
   .footer-content {
      display: flex;
      flex: 1;
      flex-direction: row; 
      justify-content: space-between;
      padding-top: 40px;
      padding-bottom: 40px;
      width: 100%;
     
      ${
        media.tablet`
          flex-direction: column;
        `
      }
     
      ${
        media.phone`
          display: flex;
          flex-direction: column;
          padding: 2rem;
        `
      }
   }
   
   .header {
      color: ${lighten(0.3, color.fg)};
      text-transform: uppercase;
      margin: 0 0 1.4em 0;
   }
   
   .footer-image {
      display: inline-flex; 
      margin: auto 60px auto 0;
      padding: 0;
      justify-content: end;
      
     ${
       media.phone`
         position: relative;
         margin-top: 2rem;
         align-self: baseline;
       `
     }
     
     a {
        ${
          media.phone`
            position: absolute;
            left: 0;
          `
        }
     }
   }
   
   .footer-menu {
      flex: 1;
      margin: 0;
      width: 100%;
      max-width: 780px;
   }
   
   .footer-menu-list {
      width: 100%;
      max-width: 780px;
    
      ${
        media.phone`
          width: 100%;
        `
      }
      
      ul {
        margin-top: 2.5rem;
        justify-content: space-between;
        display: flex;
        width: 100%;
        
        li {
          margin: 0;
        }
    
        ${
          media.phone`
            display: inline-block;
            width: 100%;
            
            li {
              width: 50%;
              margin: 30px 0;
              display: inline-block;
              font-size: 90%;
            }
          `
        }
      }
   }
   
   img {
     width: 150px;
   }
   
   
   .footer-text-header {
      list-style: none;
   }
   ul {
        list-style: none;
        display: inline-flex;
        padding: 0;
   }
   li {
      margin: auto 70px;
      white-space: nowrap;
      font-weight: 500;
      text-transform: uppercase;
      font-size: 0.9rem;
      letter-spacing: 1.2px;
      
      &:last-child {
        margin-right: 0;
      }
       
     a {
       color: ${color.grayMedium};
       font-size: 0.9em;
       
       &:hover {
         color: color.activeLink;
         color: var(--activeLink);
       }
     }
   }
   .footer-legal-section{
     background: ${props => lighten(-0.7, props.theme.activeLink)};
     flex-direction: row;
     display: flex;
     justify-content: space-between;
     
     li {
       margin: 0;
       margin-right: 50px;
       
      
       ${
         media.phone`
          margin-right: 2rem;
         `
       }
       
       &:last-child {
         margin-right: 0;
       }
     }
     
     .left-wing, .right-wing {
       display: flex;
       align-items: center;
     }
     
     .app-container {
       width: 100%;
       justify-content: space-between;
       align-items: baseline;
     }
   }
   
   i {
     justify-content: center;
     font-size: 25px;
   }
   .privacy-term-text{
     margin: 15px;
     display: inherit;
   }
`


const Footer = () => (
  <StyledFooter className="footer">

    <div className="footer-content app-container">
      <div className="footer-image">
        <Link to="/">
          <img src={footerLogo} alt='eventplog-logo' />
        </Link>
      </div>
      <div className="footer-menu">
        <div className="footer-menu-list">
          <ul>
            <li>
              <div className="header">Company</div>
              <Link to="/about-us">
                About us
              </Link>
            </li>
            <li>
              <div className="header">Products</div>
              <Link to="/why-eventplog">
                Why Eventplog?
              </Link>
            </li>
            <li>
              <div className="header">Resources</div>
              <Link to="/events">
                Events
              </Link>
            </li>
            <li>
              <div className="header">Extras</div>
              <Link to="/help">
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-legal-section">
      <div className="app-container">
        <div className="right-links">
          <ul>
            <li>
              <Link to="/">
                Copyright (c) {(new Date().getFullYear())}
              </Link>
            </li>
          </ul>
        </div>
        <div className="left-links">
          <ul>
            <li>
              <Link to="/legal/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/">
                <Icon name="facebook"/>
              </Link>
            </li>
            <li>
              <Link to="/">
                <Icon name="twitter square" className="twitter"/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </StyledFooter>
)

export default Footer
