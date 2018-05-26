import React from 'react'

import SignupFormContainer from './EmailSignupFormContainer'
import SignupForm from './EmailSignupForm'

const SignupFormWithContainer = () => (
  <SignupFormContainer>
    {(props) => <SignupForm {...props} />}
  </SignupFormContainer>
)

export default SignupFormWithContainer