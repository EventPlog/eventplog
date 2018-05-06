import React, { Component } from 'react'
import styled from 'styled-components'
import defaults from '../../../theme/variables'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import TmnCaptionedWrapper from '../shared/tmn-captioned-wrapper'
import LeadsHeader from '../leads/leads-header'
import winningCup from '../../../img/vector-ball.jpg'
import FacebookLogin from 'react-facebook-login';
import { Auth } from '../../auth'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, withRouter } from 'react-router-dom'
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
    return (
      <StyledLogin>
        <LeadsHeader menu={menu} />
        <TmnCaptionedWrapper title="Do more with your team."
                             subtitle="Keep track of who's doing what, and why."
                             iconImage={winningCup}>
          <div className='login-form'>
            {/*
             Heads up! The styles below are necessary for the correct render of this example.
             You can do same with CSS, the main idea is that all the elements up to the `Grid`
             below must have a height of 100%.
             */}
            <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
            <Grid
              textAlign='center'
              style={{ height: '100%' }}
              verticalAlign='middle'
            >
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='white' textAlign='center'>
                  <Image src='/logo.png' />
                  {' '}Log-in to your account
                </Header>

                <FacebookLogin
                  appId="160154634571372"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={this.fbResponse} />


                <GoogleLogin
                  clientId="530846686194-8auql2abnck2m3cjbqqpitlhtm7k9ot9.apps.googleusercontent.com"
                  buttonText="Login with Google"
                  onSuccess={this.googleResponse}
                  onFailure={this.googleResponse} />

                <Form size='large'>
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon='user'
                      iconPosition='left'
                      placeholder='E-mail address'
                    />
                    <Form.Input
                      fluid
                      icon='lock'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
                    />

                    <Button color='teal'
                            onClick={this.bypassAuth}
                            fluid size='large'>Login</Button>
                  </Segment>
                </Form>
                <Message>
                  New to us? <Link to="/signup">Sign Up</Link>
                </Message>
              </Grid.Column>
            </Grid>
          </div>
        </TmnCaptionedWrapper>
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
