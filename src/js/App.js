import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

import {Auth, PrivateRoute} from './auth'
import Lead from './components/leads/leads-creation'
import styled from 'styled-components';
import defaults from '../styles/theme/variables';
import createLoadable from './components/shared/loading/createLoadable'
import handleLogout from './utils/handleLogout'
import Header from './components/header'
import Footer from './components/footer'
import universalStyles from '../styles/universalStyles'
import { media } from '../styles/mixins'


//const Homepage = createLoadable(() => import('./homepage'  /* webpackChunkName: "homepage" */))
const Login = createLoadable(() => import('./components/login'  /* webpackChunkName: "login" */))
const Events = createLoadable(() => import('./components/events'  /* webpackChunkName: "EventPlog" */))
const User = createLoadable(() => import('./components/user'  /* webpackChunkName: "EventPlog" */))
const Communities = createLoadable(() => import('./components/communities' /* webpackChunkName: "JoinACommunity" */))
const Password = createLoadable(() => import('./components/password' /* webpackChunkName: "Password" */))

const StyledApp = styled.div`
  ${universalStyles}
`

class App extends Component {
  state = { activeItem: 'home' };

  render() {
    let url = '../img/tech is in you.png';
    return (
      <StyledApp>
        <Header />
        <Switch>
          <Route exact path="/" render={(props) =>
                 Auth.isLoggedIn
                   ? <Events {...props} />
                   : <Login/>
              } />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" render={() => handleLogout(this.props.store)} />
          <Route exact path="/signup" component={Login} />
          <Route path="/leads/:id" component={Lead} />
          <Route path="/user" component={User} />
          <Route path="/password" component={Password} />
          <PrivateRoute path="/events" component={Events} />
          <PrivateRoute path="/communities" component={Communities} />
        </Switch>
        <Footer />
      </StyledApp>
    )
  }
}

export default App
