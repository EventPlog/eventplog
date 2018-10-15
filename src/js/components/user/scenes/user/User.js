import React from 'react'
import { Switch, Route } from 'react-router-dom'

// =========== INTERNAL ============
import MainComponent from './components/MainComponent'
import createLoadable from 'js/components/shared/loading/createLoadable'

const MyEvents = createLoadable(() =>
  import('../my-events'  /* webpackChunkName: "myEvents" */))

const MyCommunities = createLoadable(() =>
  import('../my-communities'  /* webpackChunkName: "myCommunities" */))

const MyResources = createLoadable(() =>
  import('../my-resources'  /* webpackChunkName: "myResources" */))

const MySettings = createLoadable(() =>
  import('../my-settings'  /* webpackChunkName: "mySettings" */))

const User = ({
  user,
  currentUser,
  ...otherProps,
}) => {
  return (
    <div>
      <MainComponent {...{user, currentUser, ...otherProps}} />
      <Switch>
        <Route exact path="/u/:id" render={() => <MyEvents {...{user}} />} />
        <Route exact path="/u/:id/events" render={() => <MyEvents {...{user}} />} />
        <Route exact path="/u/:id/communities" render={() => <MyCommunities {...{user}} />} />
        <Route exact path="/u/:id/resources" render={() => <MyResources {...{user}} />} />
        <Route exact path="/u/:id/settings" render={() => <MySettings {...{user}} />} />
      </Switch>
    </div>
  )
}

export default User
