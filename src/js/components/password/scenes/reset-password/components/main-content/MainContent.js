import React from 'react'
import styled from 'styled-components'
import defaults from '../../../../../../styles/theme/variables'
import ContentBeforePasswordChange from '../content-before-password-change'
import ContentAfterPasswordChange from '../content-after-password-change'

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
  }
  
`
const headerText = (passwordChanged) => (
  passwordChanged
    ? 'Success!!!'
    : 'One step left...'
)

const MainContent = ({
  token,
  password,
  error,
  loading,
  passwordChanged,
  handleChange,
  resetPassword
}) => (
    <StyledMainContent className="main-content app-container">
      <h3>{headerText(passwordChanged)}</h3>
      { !passwordChanged &&
        <ContentBeforePasswordChange {...{loading, error, password, handleChange, resetPassword}} />}

      { passwordChanged && <ContentAfterPasswordChange {...{password, handleChange}} /> }
    </StyledMainContent>
    )

    export default MainContent
