import React, { Component } from 'react'
import styled from 'styled-components'
import defaults from '../../../../../theme/variables'
import MainContent from './components/main-content'

const StyledForgotPassword = styled.div`
  --fg: ${defaults.fg};
  --bg: ${defaults.bg};
  --activeLink: ${defaults.activeLink};
  
  display: flex;
  flex-direction: column;
  height: 100%;
  
  .main-content {
    flex: 1;
    margin-top: 60px;
  }
  
`

type forgotPasswordType = {
  token?: string,
  submitEmail: () => {}
}

const ForgotPassword = ({ submitEmail, token }: forgotPasswordType) => (
  <StyledForgotPassword>
    <MainContent {...{submitEmail, token}} />
  </StyledForgotPassword>
)

export default ForgotPassword
