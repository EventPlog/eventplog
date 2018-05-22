import React, { Component } from 'react'
import styled from 'styled-components'
import defaults from '../../../theme/variables'
import LoggedInHeader from '../event-plog/header'
import MainContent from './components/main-content'
import LoginFooter from '../login/components/footer'
import { confirmEmail } from './actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, withRouter, Redirect } from 'react-router-dom'

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
    margin-top: 60px;
  }
  
  .footer {
    height: 200px;
    background: #eee;
  }
`

export class JoinACommunity extends Component {

  render() {
    return (
      <StyledLogin>
        <LoggedInHeader />
        <MainContent />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JoinACommunity))
