import React from 'react'
import { Link } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import EmailSignupForm from './email-signup-form'
import { Button, Form, Message, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import colors from '../../../../../theme/colors'
import { lighten } from 'polished'


const bypassAuth = async (e) => {
  e.preventDefault();
  this.props.loginUser({ facebook_user_id: "1705553739457939" })
    .then(r => this.props.history.push('/'))
}

const loginUser = (payload) =>  {
  this.props.loginUser(payload)
    .then(res => {
      // this.props.history.push('/')
      window.location.replace('/')
    })
}

const fbResponse = (response) => {
  const [ first_name, ...otherNames ] = response.name.split(' ')
  const payload = {
    first_name,
    last_name: otherNames.join(' '),
    avatar_url: response.picture.data.url,
    email: response.email,
    oauth_user_id: response.userID,
  }
  this.loginUser(payload)
}

const googleResponse = (res) => {
  if (!!res) return
  const {
    email,
    familyName: last_name,
    givenName: first_name,
    imageUrl: avatar_url,
    googleId: oauth_user_id
  } = res.profileObj

  const payload = {
    email, first_name, last_name, avatar_url, oauth_user_id
  }
  this.loginUser(payload)
}

const StyledLoginForm = styled.div`
  padding: 50px 30px;
  
  > .header {
    color: var(--fg);
    border-bottom: 1px solid ${lighten(0.2, colors.grayLight)};
    padding-bottom: 5px;
    margin: 0 0 20px;
    font-size: 1rem;
    text-transform: uppercase;
  }
  
  > .social-media-buttons {
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
    
    .fb-login-btn {
      flex: 1;
      margin-right: 10px;
      color: ${colors.white};
      background-color: ${colors.blue};
    }
    
    .google-login-btn {
      flex: 1;
      margin-left: 10px;
      color: ${colors.white};
      background-color: ${colors.red};
    }
  }
  
  > .or-divider {
    border-bottom: 1px solid ${lighten(0.2, colors.grayLight)};
    display: flex;
    justify-content: center;
    position: relative;
    
    > * {
      position: absolute;
      top: -28px;
      padding: 20px 50px;
      background: #fff;
    }
    
    & + div {
      margin: 40px 0 20px;
    }
  }
`

const Btn = ({color, inverted = false, ...otherProps}) => (
  <Button color={color}
          {...otherProps}
  />
)

const LoginForm = () => (
  <StyledLoginForm className="form-holder">
    <div className="header">
      Sign up
    </div>
    <div className="social-media-buttons">

      <FacebookLogin
        appId="160154634571372"
        autoLoad={false}
        fields="name,email,picture"
        render={renderProps => (
          <Button color={colors.blue}
                  className="fb-login-btn"
                  onClick={renderProps.onClick}>facebook</Button>
        )}
        callback={fbResponse} />

      <GoogleLogin
        clientId="530846686194-8auql2abnck2m3cjbqqpitlhtm7k9ot9.apps.googleusercontent.com"
        buttonText="Google"
        className="ui button google-login-btn"
        onSuccess={googleResponse}
        onFailure={googleResponse} />
    </div>

    <div className="or-divider">
      <div>OR</div>
    </div>

    <EmailSignupForm />
    <div className="alt-signin">
      Already have an account? &nbsp;
      <Link to="/login">Sign In</Link>
    </div>
  </StyledLoginForm>
)

export default LoginForm
