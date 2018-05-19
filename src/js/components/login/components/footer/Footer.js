import React from 'react'
import styled from 'styled-components'
import color from '../../../../../theme/colors'
import footerLogo from '../../../../../img/eventplog-logo-name-inverted-small.png'

const StyledFooter = styled.div`

   display: flex;
   flex-direction: column;

   .footer-menu{
    flex: 1;
    justify-content: center;
    background: ${color.blueDark}; 
    display: flex;
    flex-direction: row; 
   }
   .footer-copyright{
    background: ${color.blueLight};
    height:50px

   }
   .footer-image{
      width:200px
      margin: 50px;
      display: inline-flex;
      justify-content: center;
   }
   .footer-text{
    margin: 50px;
    

   }
`


const Footer = () => (
  <StyledFooter className="footer">
  

    <div className="footer-menu"> 
      <div className="footer-image">
        <img src={footerLogo} alt="eventplog logo"></img>
      </div>
      <div className="footer-text">
      footertext
      </div>
    </div>

    <div className="footer-copyright">footer copyrights</div>
  
   </StyledFooter>
)

export default Footer
