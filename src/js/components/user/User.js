import React from 'react'
import { Switch, Route } from 'react-router-dom'
import createLoadable from '../../components/shared/loading/createLoadable'

const ConfirmEmail = createLoadable(() => import('./scenes/confirm-email'  /* webpackChunkName: "confirmEmail" */))

const User = () => (
  <Switch>
    <Route exact path="/" render={() => <div>Coming Soon...</div>}/>
    <Route exact path="/user/confirm" component={ConfirmEmail} />
    <Route exact path="/user/confirm/:token" component={ConfirmEmail} />
  </Switch>
)

export default User