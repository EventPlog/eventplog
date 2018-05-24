import React from 'react'
import styled from 'styled-components'
import defaults from '../../../../../../../theme/variables'
import ContentBeforeEmailSubmit from '../content-before-email-submit'
import ContentAfterEmailSubmit from '../content-after-email-submit'

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h3 {
    color: ${defaults.grayMedium};
  }
  
  > p {
    margin: 20px 0 50px;
    font-size: 1.2rem;
    font-weight: 300;
  }
  
  .selection {
    width: 100%;
    
    .selection-dropdown {
      display: flex;
      justify-content: space-around;
      margin: 30px 0;
    }
  },
  
`


const MainContent = ({
  email,
  emailSubmitted,
  handleChange,
  submitEmail
}) => (
    <StyledMainContent className="main-content app-container">
      <h3>Forgot your password?</h3>
      { !emailSubmitted && <ContentBeforeEmailSubmit {...{email, handleChange}} />}
      { emailSubmitted && <ContentAfterEmailSubmit {...{email, handleChange}} /> }
    </StyledMainContent>
    )

    export default MainContent
