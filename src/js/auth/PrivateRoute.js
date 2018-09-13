import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { Auth, renderComponent, renderRedirectToLogin } from './actions'


const PrivateRoute = ({ render, component: Component, ...otherProps }) => {
  return(
  <Route {...otherProps} render={(props) => (
    Auth.isLoggedIn
      ? renderComponent(render, Component, props)
      : renderRedirectToLogin()
  )} />
)}

export default PrivateRoute
