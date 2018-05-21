import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

import {Auth, PrivateRoute} from './auth'
import Lead from './components/leads/leads-creation'
import styled, { ThemeProvider } from 'styled-components';
import defaults from '../theme/variables';
import createLoadable from './components/shared/loading/createLoadable'


const Homepage = createLoadable(() => import('./homepage'  /* webpackChunkName: "homepage" */))
const Login = createLoadable(() => import('./components/login'  /* webpackChunkName: "login" */))
const TmnTracker = createLoadable(() => import('./TmnTracker'  /* webpackChunkName: "TmnTracker" */))
const User = createLoadable(() => import('./components/user'  /* webpackChunkName: "TmnTracker" */))

const StyledApp = styled.div`
  --fg: ${props => props.theme.fg};
  --bg: ${props => props.theme.bg};
  --activeLink: ${props => props.theme.activeLink};
  --gray: ${props => props.theme.gray};
  height: 100%;
  
  a, a:hover {
    color: var(--activeLink);
  }
`;

class App extends Component {
  state = { activeItem: 'home' };

  render() {
    const theme = {
      ...defaults,
      ...this.props.currentTheme
    };

    const { activeItem } = this.state
    let url = '../img/tech is in you.png';
    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Switch>
            <Route exact path="/" render={(props) =>
               !Auth.isLoggedIn
               ? <Login/>
               : <TmnTracker {...props} />
            } />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Login} />
            <Route path="/leads/:id" component={Lead} />
            <Route path="/user" component={User} />
            <PrivateRoute path="/events" component={TmnTracker} />
          </Switch>
        </StyledApp>
      </ThemeProvider>
    );
  }
}

export default App
