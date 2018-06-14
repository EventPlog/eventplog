import React from 'react'
import styled from 'styled-components'
import defaults from '../../../../../../styles/theme/variables'
import ContentBeforeEmailSubmit from '../content-before-email-submit'
import ContentAfterEmailSubmit from '../content-after-email-submit'

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  
  h3 {
    color: ${defaults.grayMedium};
  }
  
  > p {
    margin: 20px 0 50px;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.9rem;
  }
  
`


const MainContent = ({
  email,
  error,
  loading,
  emailSubmitted,
  handleChange,
  submitEmail
}) => (
    <StyledMainContent className="main-content app-container">
      <h3>Forgot your password?</h3>
      { !emailSubmitted &&
        <ContentBeforeEmailSubmit {...{loading, error, email, handleChange, submitEmail}} />}

      { emailSubmitted && <ContentAfterEmailSubmit {...{email, handleChange}} /> }
    </StyledMainContent>
    )

    export default MainContent
