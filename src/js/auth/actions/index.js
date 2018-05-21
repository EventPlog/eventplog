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
        .then(res => {
          if (!(res && res.user)) return
          cookie.set('current_user', res.user)
          cookie.set('user_token', res.auth_token)
          return res
        })
  }},
  loginByEmail(params) {
    return (dispatch) => {
      return processRequest('/api/v1/web/login/', 'POST', params)
        .then(res => {
          if (!(res && res.user)) return
          cookie.set('current_user', res.user)
          cookie.set('user_token', res.auth_token)
          return res
        })
        .catch(err => {
          console.log(err)
          throw(err)
        })
    }},
  signupByEmail(params) {
    return (dispatch) => {
      return processRequest('/api/v1/web/users/', 'POST', params)
        .then(res => {
          if (!(res && res.user)) return
          cookie.set('current_user', res.user)
          // cookie.set('user_token', res.auth_token)
          return res
        })
        .catch(err => {
          console.log(err)
          throw(err)
        })
    }},
  logout(params, cb) {
    return (dispatch) =>
      processRequest('/api/v1/web/logout', 'POST', params)
        .then(res => {
          cookie.remove('current_user')
          cookie.remove('user_token')
          return res
        })
        .catch(err => {
          console.log(err)
          throw(err)
        })
  }
}

export default Auth
