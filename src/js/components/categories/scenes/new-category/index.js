// external
import React, { Component } from 'react'

// local
import ForgotPassword  from './NewCategory'
import ForgotPasswordContainer from './NewCategoryContainer'
import renderPropsToComponent from 'js/components/shared/render-props-to-component'

export default renderPropsToComponent(ForgotPasswordContainer, ForgotPassword)

