import Auth from 'js/auth'

export default {
  cart: { data: JSON.parse(Auth.getCookie('cart') || "[]") }
}