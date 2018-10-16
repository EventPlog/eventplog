import React from 'react'
import { Switch, Route } from 'react-router-dom'
import createLoadable from 'js/components/shared/loading/createLoadable'

const UserProfile = createLoadable(() =>
  import('./scenes/user'  /* webpackChunkName: "user" */))

const ConfirmEmail = createLoadable(() =>
  import('./scenes/confirm-email'  /* webpackChunkName: "confirmEmail" */))

const User = () => (
  <Switch>
    <Route exact path="/u" component={UserProfile} />
    <Route exact path="/u/:id" component={UserProfile} />
    <Route exact path="/u/:id/*" component={UserProfile} />
    <Route exact path="/user/confirm" component={ConfirmEmail} />
    <Route exact path="/user/confirm" component={ConfirmEmail} />
    <Route exact path="/user/confirm/:token" component={ConfirmEmail} />
  </Switch>
)

export default User