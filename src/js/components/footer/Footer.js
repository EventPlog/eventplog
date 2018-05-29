import React from 'react'
import styled from 'styled-components'
import color from '../../../theme/variables'
import footerLogo from '../../../img/eventplog-logo-small.png'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { lighten } from 'polished'

const StyledFooter = styled.div`
   display: flex;
   flex-direction: column;
   border-top: 1px solid #ccc;
   color: var(--fg);
   font-family: "proxima-nova", sans-serif;
   
    a{
      color:${color.grayLight}
    }
   .footer-content {
     background: ${color.white}; 
     display: flex;
     flex: 1;
     flex-direction: row; 
     justify-content: space-between;
     justify-content: center;
     padding-top: 40px;
     padding-bottom: 40px;
     width: 100%;
     padding: 4% !important;
   }
   
   .header {
     color: var(--fg);
     text-transform: uppercase;
     margin: 0 0 1.4em 0;
   }
   
   .footer-image {
      display: inline-flex; 
      justify-content: center;
      margin: 1% auto auto 0;
      padding: 0;
      padding-right: 81px;
      padding-bottom: 20px;
   }
   .footer-menu {
      flex: 1;
      text-transform: uppercase;
      margin: 0;
      .footer-item{
        
        margin-bottom: 15px !important;
          a{
            color: ${color.grayMedium};
            font-size: 0.8em;
          }
          a:hover{
            color: var(--activeLink);
          }
      }
   }
   
   .footer-menu-list {
      /*float: right;*/
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
     background: ${color.white};
     flex-direction: row;
     display: flex;
     justify-content: space-between;
     background: #fff;
     background: #eee;
     
     li {
       margin: 0;
       margin-right: 50px;
       
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
       display: flex;
       justify-content: space-between;
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


    <div className="footer-content app-container row">

      <div className="footer-image col-xs-12 col-s-12 col-m-4 col-l-4">
        <Link to="/">
          <img src={footerLogo} alt='eventplog-logo' />
        </Link>
      </div>


      <div className="footer-menu col-xs-12 col-s-12 col-m-8 col-l-8">
        <div className="row">
            <div className="footer-item col-xs-6 col-s-6 col-m-3 col-l-3">
              <div className="header">Company</div>
              <Link to="/about-us">
                About us
              </Link>
            </div>
            <div className="footer-item col-xs-6 col-s-6 col-m-3 col-l-3">
              <div className="header">Products</div>
              <Link to="/about-us">
                Why Eventplog?
              </Link>
            </div>
            <div className="footer-item col-xs-6 col-s-6 col-m-3 col-l-3">
              <div className="header">Resources</div>
              <Link to="/about-us">
                Events
              </Link>
            </div>
            <div className="footer-item col-xs-6 col-s-6 col-m-3 col-l-3">
              <div className="header">Extras</div>
              <Link to="/about-us">
                Communities
              </Link>
            </div>
        </div>
      </div>
    </div>

    <div className="footer-legal-section">
      <div className="app-container row">
        <div className="right-links col-xs-12 col-s-6 col-m-6 col-l-6">
          <ul>
            <li>
              <Link to="/">
                Copyright (c) {(new Date().getFullYear())}
              </Link>
            </li>
          </ul>
        </div>

        <div className="left-links col-xs-12 col-s-6 col-m-6 col-l-6">
          <ul>
            <li>
              <Link to="/privacy-policy">
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