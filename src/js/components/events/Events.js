import React, { Component } from 'react';

import { Switch } from 'react-router-dom';

// internal components
import Header from '../../header/MainHeader';
import createLoader from '../shared/loading/createLoadable'
import styled, { ThemeProvider } from 'styled-components';
import defaults from '../../styles/theme/variables';
import {fakeAuth, PrivateRoute} from '../../auth'
import UserNav from 'js/components/shared/user-secondary-menu'

const Events = createLoader(() =>
  import('./scenes/events/index'  /* webpackChunkName: "Events" */))

const Event = createLoader(() =>
  import('./scenes/event' /* webpackChunkName: "EventWithContainer" */))

const NewEvent = createLoader(() =>
  import('./scenes/new-event' /* webpackChunkName: "NewEvent" */))

const BackStage = createLoader(() =>
  import('./scenes/back-stage' /* webpackChunkName: "NewEvent" */))

const StyledEventPlog = styled.div`
  height: 100%;
  
  a, a:hover {
    color: var(--activeLink);
  }
`

const UserEvents = () => (
  [
    <UserNav />,
    <Events />
  ]
)
const EventPlog = ({user = {}}) => (
    <StyledEventPlog>
      {/*<EPHeader/>*/}
      {/*<Header />*/}
      <Switch>
        <PrivateRoute exact path="/" component={UserEvents} />
        <PrivateRoute exact path="/events" component={UserEvents} />
        <PrivateRoute exact path="/communities/:community_id/events/:id" component={Event} />
        <PrivateRoute exact path="/communities/:community_id/events/new" component={NewEvent} />
        <PrivateRoute path="/communities/:community_id/events/:id/backstage" component={BackStage} />
      </Switch>
    </StyledEventPlog>
)

export default EventPlog
