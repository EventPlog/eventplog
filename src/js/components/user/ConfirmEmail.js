import React, { Component } from 'react'
import styled from 'styled-components'
import defaults from '../../../theme/variables'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import LoginHeader from '../login/components/header'
import MainContent from './components/main-content'
import LoginFooter from '../login/components/footer'
import { Auth } from '../../auth'
import { confirmEmail } from './actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, withRouter, Redirect } from 'react-router-dom'
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
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

class ConfirmEmail extends Component {
  state = {
    confirmed: false
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return({token: nextProps.match.params.token})
  }

  componentDidMount() {
    let token = this.props.match.params.token
    if (!token) return
    this.props.confirmEmail({token})
  }

  confirmed = () => this.props.status == 'confirmed'

  render() {
    if (this.confirmed()) {
      setTimeout(() => {
        return this.props.history.push({
          pathname: '/login',
          state: {flash_msg: "Your email confirmation was successful. Please login to continue"}
        })
      }, 2000)
    }

    return (
      <StyledLogin>
        <LoginHeader />
        <MainContent confirmed={this.confirmed}
                     status={this.props.status}
                     token={this.state.token}
        />
        <LoginFooter/>
      </StyledLogin>
    )
  }
}

const mapStateToProps = (state) => {
  return {status: state.users.confirmedStatus}
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    confirmEmail
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConfirmEmail))
