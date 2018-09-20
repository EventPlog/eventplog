import React from 'react'
import { Link } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import EmailLoginForm from './email-login-form'
import { Button, Form, Message, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import colors from 'js/styles/theme/variables'
import { lighten } from 'polished'

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
      background: ${lighten(0.45, colors.blue)};
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

const LoginForm = ({
  googleResponse,
  fbResponse
}) => (
  <StyledLoginForm className="form-holder">
    <div className="header">
      Login (<Link to="/signup">Sign Up here</Link>)
    </div>
    <div className="social-media-buttons">

      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
        autoLoad={false}
        fields="name,email,picture"
        render={renderProps => (
          <Button color={colors.blue}
                  className="fb-login-btn"
                  onClick={renderProps.onClick}>facebook</Button>
        )}
        callback={fbResponse} />

      <GoogleLogin
        clientId={`530846686194-8auql2abnck2m3cjbqqpitlhtm7k9ot9.apps.googleusercontent.com`}
        buttonText="Google"
        autoLoad={false}
        disabled={false}
        className="ui button google-login-btn"
        onSuccess={googleResponse}
        onFailure={googleResponse} />
    </div>

    <div className="or-divider">
      <div>OR</div>
    </div>

    <EmailLoginForm/>
    <div className="alt-signin">
      Haven't joined yet? &nbsp;
      <Link to="/signup">Sign Up</Link>
    </div>
  </StyledLoginForm>
)

export default LoginForm
