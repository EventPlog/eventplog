import Auth from '../auth/actions'

const handleLogout = (store) => {
  store.dispatch(Auth.logout()).then(res => window.location.replace('/login'))
}

export default handleLogout

