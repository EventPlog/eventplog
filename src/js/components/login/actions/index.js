import processRequest from '../../../utils/webAPI'
import cookie from 'js-cookie'

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
