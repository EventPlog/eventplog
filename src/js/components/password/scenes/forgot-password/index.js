// external
import React, { Component } from 'react'

// local
import ForgotPassword  from './ForgotPassword'
import ForgotPasswordContainer from './ForgotPasswordContainer'
import renderPropsToComponent from '../../../shared/render-props-to-component'

export default renderPropsToComponent(ForgotPasswordContainer, ForgotPassword)

const Check = () => <div>checking oo</div>

// export default Check