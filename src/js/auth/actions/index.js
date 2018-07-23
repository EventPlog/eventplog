import cookie from 'js-cookie'
import processRequest from '../../utils/webAPI'

export const fakeAuth = {
  isLoggedIn: true,
  currentUser: {},
  authenticate(cb) {
    this.isLoggedIn = true;
    this.currentUser = {
      name: 'Kent Beck'
    }
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isLoggedIn = false
    this.currentUser = {}
    setTimeout(cb, 100)
  }
}

const setUserInCookie = (user) => {
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
       return processRequest('/api/v1/web/login/oauth', 'POST', params)
        .then(user => {
          return setUserInCookie(user)
        })
  }},
  loginByEmail(params) {
    return (dispatch) => {
      return processRequest('/api/v1/web/login/', 'POST', params)
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
      processRequest('/api/v1/web/users/', 'POST', params)
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
      return processRequest('/api/v1/web/logout', 'POST', params)
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

export default Auth
