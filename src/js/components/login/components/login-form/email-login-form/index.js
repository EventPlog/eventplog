import React from 'react'

import LoginFormContainer from './EmailLoginFormContainer'
import LoginForm from './EmailLoginForm'
import renderPropsToComponents from 'js/components/shared/render-props-to-component'

export default renderPropsToComponents(LoginFormContainer, LoginForm)