import React from 'react'

import LoginFormContainer from './EmailLoginFormContainer'
import LoginForm from './EmailLoginForm'

const LoginFormWithContainer = () => (
  <LoginFormContainer>
    {(props) => <LoginForm {...props} />}
  </LoginFormContainer>
)

export default LoginFormWithContainer