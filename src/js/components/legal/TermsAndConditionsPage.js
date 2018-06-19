import React from 'react'
import styled from 'styled-components'
import {media} from '../../styles/mixins'
import Button from '../shared/button/Button'

const StyledTermsAndConditionsPage =styled.div`

${
  media.phone`
    margin:5px;
  `
}
  .title{
    text-align:center;
    ${
      media.phone`
        display: block;
        font-size: 1.2rem;
        
      `
    }
  }
  .subtitle{
    
    ${
      media.phone`
        display: block;
        font-size: 1rem;
        margin: 8px auto;
      `
    }
  }
  .content{
    text-align:justify;
    ${
      media.phone`
        display: block;
        font-size: 0.8rem;
      `
    }
  }

  .close-button{
   display:flex;
    justify-content: center;
  }
  
`

const TermsAndConditionsPage =()=>{
  return(
    <StyledTermsAndConditionsPage>
    <div className="terms-and-conditions-container">
        <heading><h5 className="title"> Terms and Conditions</h5></heading><br/>
        
        <text className="content">A Terms and Conditions agreement is the agreement that includes the terms, the rules and the guidelines of acceptable behavior, plus other useful sections, to which users must agree in order to use or access your website and mobile app.</text>
          <subtitle><h6 className="subtitle">Intellectual Property Rights</h6></subtitle>
          <text className="content">A Terms and Conditions agreement is the agreement that includes the terms, the rules and the guidelines of acceptable behavior, plus other useful sections, to which users must agree in order to use or access your website and mobile app.</text>
          <subtitle><h6 className="subtitle">Restrictions</h6></subtitle>
          <text className="content">A Terms and Conditions agreement is the agreement that includes the terms, the rules and the guidelines of acceptable behavior, plus other useful sections, to which users must agree in order to use or access your website and mobile app.</text>
          <subtitle><h6 className="subtitle">Limitation of liability</h6></subtitle>
          <text className="content">A Terms and Conditions agreement is the agreement that includes the terms, the rules and the guidelines of acceptable behavior, plus other useful sections, to which users must agree in order to use or access your website and mobile app.</text>
          <div classname="close-button">
          <Button >close</Button>
          </div>
    </div>
    </StyledTermsAndConditionsPage>
  )
}
export default TermsAndConditionsPage