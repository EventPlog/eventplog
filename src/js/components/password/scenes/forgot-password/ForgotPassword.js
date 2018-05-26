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
  padding-bottom: 200px;
  
  .main-content {
    flex: 1;
    margin-top: 60px;
  }
  
`

type forgotPasswordType = {
  email: string,
  error: any,
  loading: boolean,
  emailSubmitted?: boolean,
  handleChange: () => {},
  submitEmail: () => {}
}

const ForgotPassword = (props: forgotPasswordType) => (
  <StyledForgotPassword>
    <MainContent {...props } />
  </StyledForgotPassword>
)

export default ForgotPassword
