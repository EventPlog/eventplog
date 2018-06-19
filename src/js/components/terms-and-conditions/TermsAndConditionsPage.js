import React from 'react'
import styled from 'styled-components'

const StyledTermsAndConditionsPage =styled.div`
  .content{
    text-align:justify;
  }
  .title{
    text-align:center;
  }
`

const TermsAndConditionsPage =()=>{
  return(
    <StyledTermsAndConditionsPage>
    <div className="terms-and-conditions-container">
        <heading><h5 className="title"> Terms and Conditions</h5></heading><br/>
        
        <text className="content">A Terms and Conditions agreement is the agreement that includes the terms, the rules and the guidelines of acceptable behavior, plus other useful sections, to which users must agree in order to use or access your website and mobile app.</text>
          <subtitle><h6>Intellectual Property Rights</h6></subtitle>
          <text className="content">A Terms and Conditions agreement is the agreement that includes the terms, the rules and the guidelines of acceptable behavior, plus other useful sections, to which users must agree in order to use or access your website and mobile app.</text>
          <subtitle><h6>Restrictions</h6></subtitle>
          <text className="content">A Terms and Conditions agreement is the agreement that includes the terms, the rules and the guidelines of acceptable behavior, plus other useful sections, to which users must agree in order to use or access your website and mobile app.</text>
          <subtitle><h6>Limitation of liability</h6></subtitle>
          <text className="content">A Terms and Conditions agreement is the agreement that includes the terms, the rules and the guidelines of acceptable behavior, plus other useful sections, to which users must agree in order to use or access your website and mobile app.</text>

    </div>
    </StyledTermsAndConditionsPage>
  )
}
export default TermsAndConditionsPage