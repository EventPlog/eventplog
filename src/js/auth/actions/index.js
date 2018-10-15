import React from 'react'
import { Redirect } from 'react-router-dom'
import cookie from 'js-cookie'

import processRequest from '../../utils/webAPI'

const LAST_VISITED_URL = 'lastVisitedUrl'

export const setUserInCookie = (user) => {
  if (!(user && user.id)) return
  cookie.set('current_user', user)
  cookie.set('user_token', user.auth_token)
  return user
}

export const Auth = {
  isLoggedIn: Boolean(cookie.get('current_user')),
  currentUser: () => {
    try {
      return JSON.parse(cookie.get('current_user'))
    }
    catch(e) {
      return {}
    }
  },
  user_token: cookie.get('user_token'),
  loginUser(params) {
    return (dispatch) => {
       return processRequest({path: '/api/v1/web/login/oauth', method: 'POST', data: params})
        .then(user => {
          return setUserInCookie(user)
        })
  }},
  loginByEmail(params) {
    return (dispatch) => {
      return processRequest({path: '/api/v1/web/login/', method: 'POST', data: params})
        .then(user => {
          return setUserInCookie(user)
        })
        .catch(err => {
          console.log(err)
          throw(err)
        })
    }},
  signupByEmail(params) {
    return (dispatch) =>
      processRequest({path: '/api/v1/web/users/', method: 'POST', data: params})
        .then(user => {
          return setUserInCookie(user)
        })
        .catch(err => {
          console.log(err)
          throw(err)
        })
    },
  logout(params, cb) {
    return (dispatch) => {
      cookie.remove('current_user')
      cookie.remove('user_token')
      return processRequest({path: '/api/v1/web/logout', method: 'POST', data: params })
        .then(res => {
          return res
        })
        .catch(err => {
          console.log(err)
          throw(err)
        })
    }
  },
  getFromCookie(key) {
    return  cookie.get(key)
  },
  setCookie(key, url) {
    return  cookie.set(key, url)
  },
  deleteFromCookie(key) {
    return  cookie.remove(key)
  },
}

export const redirectToSignup = () => {
  Auth.setCookie(LAST_VISITED_URL, window.location.pathname)
  return window.location.href = '/signup'
}

export const renderComponent = (render, Component, props) => {
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

export const secureAction = (action) => (
  Auth.isLoggedIn
    ? action
    : redirectToSignup
)

export const renderRedirectToLogin = () => {
  Auth.setCookie(LAST_VISITED_URL, window.location.pathname)
  return <Redirect to='/login' />
}

export default Auth
