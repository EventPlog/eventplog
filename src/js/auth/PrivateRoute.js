import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Auth } from './actions'

const PrivateRoute = ({ component: Component, ...otherProps }) => (
  <Route {...otherProps} render={(props) => (
    Auth.isLoggedIn
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

export default PrivateRoute

