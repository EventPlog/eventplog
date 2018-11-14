import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import createLoadable from 'js/components/shared/loading/createLoadable'

const UserProfile = createLoadable(() =>
  import('./scenes/user'  /* webpackChunkName: "user" */))

const ConfirmEmail = createLoadable(() =>
  import('./scenes/confirm-email'  /* webpackChunkName: "confirmEmail" */))

const StyledUser = styled.div`
  height: 100%;
  min-height: calc(100vh - 350px);
`

const User = () => (
  <StyledUser>
    <Switch>
      <Route exact path="/u" component={UserProfile} />
      <Route exact path="/u/:id" component={UserProfile} />
      <Route exact path="/u/:id/*" component={UserProfile} />
      <Route exact path="/user/confirm" component={ConfirmEmail} />
      <Route exact path="/user/confirm" component={ConfirmEmail} />
      <Route exact path="/user/confirm/:token" component={ConfirmEmail} />
    </Switch>
  </StyledUser>
)

export default User