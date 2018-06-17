import React from 'react'

import CheckInFormContainer from './CheckInFormContainer'
import CheckInForm from './CheckInForm'

const CheckInFormWithContainer = () => (
  <CheckInFormContainer>
    {(props) => <CheckInForm {...props} />}
  </CheckInFormContainer>
)

export default CheckInFormWithContainer