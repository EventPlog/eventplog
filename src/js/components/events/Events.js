import React, { Component } from 'react';

import { Switch } from 'react-router-dom';

// internal components
import Header from '../../header/MainHeader';
import createLoader from '../shared/loading/createLoadable'
import styled, { ThemeProvider } from 'styled-components';
import defaults from '../../styles/theme/variables';
import {fakeAuth, PrivateRoute} from '../../auth'


const Events = createLoader(() =>
  import('./scenes/events/index'  /* webpackChunkName: "Events" */))

const Event = createLoader(() =>
  import('./scenes/event' /* webpackChunkName: "EventWithContainer" */))

const NewEvent = createLoader(() =>
  import('./scenes/new-event' /* webpackChunkName: "NewEvent" */))


const StyledEventPlog = styled.div`
  --fg: ${props => props.theme.fg};
  --bg: ${props => props.theme.bg};
  --activeLink: ${props => props.theme.activeLink};
  --gray: ${props => props.theme.gray};
  height: 100%;
  
  a, a:hover {
    color: var(--activeLink);
  }
`

const EventPlog = ({user = {}}) => (
  <ThemeProvider theme={{
      ...defaults,
      ...user.theme,
    }}>
    <StyledEventPlog>
      {/*<EPHeader/>*/}
      {/*<Header />*/}
      <Switch>
        <PrivateRoute exact path="/" render={() => <Events {...{user}} />} />
        <PrivateRoute exact path="/events" component={Events} />
        <PrivateRoute exact path="/events/new" component={NewEvent} />
      </Switch>
    </StyledEventPlog>
  </ThemeProvider>
)

export default EventPlog
