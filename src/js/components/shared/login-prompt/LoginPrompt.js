import React from 'react'

//=======INTERNAL========
import Auth from 'js/auth'
import Button from 'js/components/shared/button'

const LoginPrompt = ({msg}) => (
  !Auth.isLoggedIn
    ? <p><Button.Link to="/signup">Login</Button.Link> {msg}</p>
    : ''

)

export default LoginPrompt