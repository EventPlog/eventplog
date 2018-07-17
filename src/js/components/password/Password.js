// @flow

import React, { Component } from 'react';
import styled  from 'styled-components';
import { Switch, Route } from 'react-router-dom';

// internal components
import Header from '../../header/MainHeader';
import createLoader from '../shared/loading/createLoadable'
import defaults from '../../styles/theme/variables';


const ForgotPassword = createLoader(() =>
  import('./scenes/forgot-password'  /* webpackChunkName: "ForgotPassword" */))

const ResetPassword = createLoader(() =>
  import('./scenes/reset-password' /* webpackChunkName: "ResetPassword" */))

const StyledPassword = styled.div`
  --fg: ${props => props.theme.fg};
  --bg: ${props => props.theme.bg};
  --activeLink: ${props => props.theme.activeLink};
  --gray: ${props => props.theme.gray};
  height: 100%;
  
  a, a:hover {
    color: var(--activeLink);
  }
`

type PasswordPlog = {
  community?: any,
  communities?: any,
  user?: any
}

const Password = ({ token}) => (
    <StyledPassword>
      <Switch>
        <Route exact path="/password" component={ForgotPassword} />
        <Route exact path="/password/forgot" component={ForgotPassword} />
        <Route exact path="/password/reset/:token" component={ResetPassword} />
      </Switch>
    </StyledPassword>
)

export default Password
