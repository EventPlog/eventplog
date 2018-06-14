import React from 'react'
import Auth from '../auth/actions'
import Loading from 'js/components/shared/loading'

const handleLogout = (store) => {
  store.dispatch(Auth.logout()).then(res => {
    window.location.replace('/login')
  })
  return <Loading />
}

export default handleLogout

