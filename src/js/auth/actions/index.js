import React from 'react'
import { Redirect } from 'react-router-dom'
import cookie from 'js-cookie'

import processRequest from '../../utils/webAPI'

const LAST_VISITED_URL = 'lastVisitedUrl'
const CURRENT_USER = 'current_user'
const USER_TOKEN = 'user_token'

export const setUserInCookie = (user) => {
  if (!(user && user.id)) return
  cookie.set(CURRENT_USER, user)
  cookie.set(USER_TOKEN, user.auth_token)
  return user
}

export const Auth = {
  isLoggedIn: Boolean(cookie.get(CURRENT_USER)),
  currentUser: () => {
    try {
      return JSON.parse(cookie.get(CURRENT_USER))
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
      cookie.remove(CURRENT_USER)
      cookie.remove(USER_TOKEN)
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
  getCookie(key) {
    return  cookie.get(key)
  },
  setCookie(key, value) {
    return  cookie.set(key, value)
  },
  deleteFromCookie(key) {
    return  cookie.remove(key)
  },
}

export const redirectToSignup = () => {
  Auth.setCookie(LAST_VISITED_URL, window.location.pathname)
  return window.location.href = `/signup?ref=${window.location.pathname}`
}

export const renderComponent = (render, Component, props) => {
  const lastVisitedUrl = Auth.getCookie(LAST_VISITED_URL)

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
