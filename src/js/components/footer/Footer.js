import React from 'react'
import styled from 'styled-components'
import color from '../../../theme/colors'
import footerLogo from '../../../img/eventplog-logo-small.png'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const StyledFooter = styled.div`
   display: flex;
   flex-direction: column;

    a{
      color:${color.grayLight}
    }
   .footer-content {
     background: ${color.white}; 
     border-top: 1px solid #ccc;
     display: flex;
     flex: 1;
     flex-direction: row; 
     justify-content: space-between;
     justify-content: center;
     padding: 40px 0;
   }
   
   h6 {
     text-transform: uppercase;
     margin: 0 0 1.4em 0;
   }
   
   .footer-image {
      display: inline-flex; 
      justify-content: center;
      margin: auto 30px;
      padding-left: 85px;
      width:200px
   }
   .footer-menu {
    flex: 1;
    margin: 0;

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
   }
   li {
      color: ${color.grayMedium}
      margin: auto 70px;
      white-space: nowrap;
      font-weight: 500;
      text-transform: uppercase;
      font-size: 0.9rem;
      letter-spacing: 1.2px;
      
   }
   .footer-legal-section{
     background: ${color.white};
     flex-direction: row;
     display: flex;
     justify-content: space-between;
     background: #fff;
     background: #eee;
     color: ${color.grayMedium};
     
     .left-wing, .right-wing {
       display: flex;
       align-items: center;
     }
     
     .app-container {
       width: 100%;
       display: flex;
       justify-content: space-between;
       padding: 0;
     }
   }
   
   .copyright-text { 
   }
   
   .footer-icons {
     justify-content: center;
     font-size: 25px;
   }
   .privacy-term-text{
     margin: 15px;
     display: inherit;
   }
   .privacy-terms{
   }
   .twitter{
     float : right;
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
              <h6>Company</h6>
              <Link to="/about-us">
                <p>About us</p>
              </Link>
            </li>
            <li>
              <h6>Products</h6>
              <Link to="/about-us">
                <p>Why Eventplog?</p>
              </Link>
            </li>
            <li>
              <h6>Resources</h6>
              <Link to="/about-us">
                <p>Events</p>
              </Link>
            </li>
            <li>
              <h6>Extras</h6>
              <Link to="/about-us">
                <p>Communities</p>
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
              Copyright (c) {(new Date().getFullYear())}
            </li>
          </ul>
        </div>

        <div className="left-links">
          <ul>
            <li>
              <Link to="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <div className="footer-icons">
                <Icon name="facebook"/>
                <Icon name="twitter square" className="twitter"/>
              </div>
            </li>
          </ul>

        </div>
      </div>


    </div>

  </StyledFooter>
)

export default Footer
