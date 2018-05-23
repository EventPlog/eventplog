import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

import {Auth, PrivateRoute} from './auth'
import Lead from './components/leads/leads-creation'
import styled from 'styled-components';
import defaults from '../theme/variables';
import createLoadable from './components/shared/loading/createLoadable'
import handleLogout from './utils/handleLogout'
import Header from './components/header'
import Footer from './components/footer'


const Homepage = createLoadable(() => import('./homepage'  /* webpackChunkName: "homepage" */))
const Login = createLoadable(() => import('./components/login'  /* webpackChunkName: "login" */))
const Events = createLoadable(() => import('./components/events'  /* webpackChunkName: "EventPlog" */))
const User = createLoadable(() => import('./components/user'  /* webpackChunkName: "EventPlog" */))
const Communities = createLoadable(() => import('./components/communities' /* webpackChunkName: "JoinACommunity" */))

const StyledApp = styled.div`
  --fg: ${defaults.fg};
  --bg: ${defaults.bg};
  --activeLink: ${defaults.activeLink};
  --gray: ${defaults.gray};
  height: 100%;
  
  a, a:hover {
    color: var(--activeLink);
  }
  
  .footer {
    margin-top: 100px;
    background: #eee;
    height: 200px;
  }
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
          <PrivateRoute path="/events" component={Events} />
          <PrivateRoute path="/communities" component={Communities} />
        </Switch>
        <Footer />
      </StyledApp>
    )
  }
}

export default App
