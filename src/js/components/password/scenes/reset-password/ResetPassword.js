import React, { Component } from 'react'
import styled from 'styled-components'
import defaults from '../../../../../theme/variables'
import MainContent from './components/main-content'

const StyledResetPassword = styled.div`
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

type resetPasswordType = {
  token: string,
  password: string,
  error: string,
  loading: boolean,
  passwordChanged?: boolean,
  handleChange: () => {},
  resetPassword: () => {}
}

const ResetPassword = (props: resetPasswordType) => (
  <StyledResetPassword>
    <MainContent {...props } />
  </StyledResetPassword>
)

export default ResetPassword
