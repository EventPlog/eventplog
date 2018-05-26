import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Auth } from './actions'

const PrivateRoute = ({ render, component: Component, ...otherProps }) => {
  return(
  <Route {...otherProps} render={(props) => (
    Auth.isLoggedIn
      ? renderComponent(render, Component, props)
      : <Redirect to='/login' />
  )} />
)}

const renderComponent = (render, Component, props) => (
  render
    ? render(props)
    : <Component {...props} />
)

export default PrivateRoute
