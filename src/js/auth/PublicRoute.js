import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Auth, renderComponent } from './actions'

const PublicRoute = ({ render, component: Component, ...otherProps }) => {
  return(
  <Route {...otherProps} render={(props) => (
    renderComponent(render, Component, props)
  )} />
)}

export default PublicRoute
