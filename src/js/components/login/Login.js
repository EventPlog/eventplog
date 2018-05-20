import React, { Component } from 'react'
import styled from 'styled-components'
import defaults from '../../../theme/variables'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import LoginHeader from './components/header'
import MainContent from './components/main-content'
import LoginFooter from './components/footer'
import { Auth } from '../../auth'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, withRouter, Redirect } from 'react-router-dom'
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  debugger
  console.log(response);
}

const responseFacebook = (response) => {
  console.log(response);
}


const StyledLogin = styled.div`
  --fg: ${defaults.fg};
  --bg: ${defaults.bg};
  --activeLink: ${defaults.activeLink};
  
  display: flex;
  flex-direction: column;
  height: 100%;
  
  > .header {
    height: 70px;
  }
  
  .main-content {
    flex: 1;
  }
  
  .footer {
    height: 200px;
    background: #eee;
  }
`

class Login extends Component {

  onSubmit = () => {
    // change username and password states
  }
  bypassAuth = async (e) => {
    e.preventDefault();
    this.props.loginUser({ facebook_user_id: "1705553739457939" })
      .then(r => this.props.history.push('/'))
  }

  loginUser = (payload) =>  {
    this.props.loginUser(payload)
      .then(res => {
        // this.props.history.push('/')
        window.location.replace('/')
      })
  }

  fbResponse = (response) => {
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

  googleResponse = (res) => {
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

  render() {
    const menu = [
      {text: 'I want to create my first event >', url: '/leads/1'}
    ]
    if (Auth.isLoggedIn) <Redirect to="/" />
    const {state} = this.props.location
    return (
      <StyledLogin>
        <LoginHeader />
        <MainContent currentPath={this.props.match.path}
                     flashMsg={state ? state.flash_msg : null}
        />
        <LoginFooter/>
      </StyledLogin>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    loginUser: Auth.loginUser
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
