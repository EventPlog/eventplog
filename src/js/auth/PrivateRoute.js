import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Auth } from './actions'

const LAST_VISITED_URL = 'lastVisitedUrl'

const PrivateRoute = ({ render, component: Component, ...otherProps }) => {
  return(
  <Route {...otherProps} render={(props) => (
    Auth.isLoggedIn
      ? renderComponent(render, Component, props)
      : renderRedirectToLogin(props)
  )} />
)}

const renderRedirectToLogin = (props) => {
  Auth.setCookie(LAST_VISITED_URL, props.location.pathname)
  return <Redirect to='/login' />
}

const renderComponent = (render, Component, props) => {
  const lastVisitedUrl = Auth.getFromCookie(LAST_VISITED_URL)

  if (lastVisitedUrl) {
    Auth.deleteFromCookie(LAST_VISITED_URL)
    return <Redirect to={lastVisitedUrl} />
  }

  return (
    render
      ? render(props)
      : <Component {...props} />
  )
}

export default PrivateRoute
