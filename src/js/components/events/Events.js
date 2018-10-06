import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

// internal components
import Header from '../../header/MainHeader';
import createLoader from '../shared/loading/createLoadable'
import styled  from 'styled-components';
import defaults from '../../styles/theme/variables';
import {fakeAuth, PrivateRoute, PublicRoute} from '../../auth'
import UserNav from 'js/components/shared/user-secondary-menu'

const Events = createLoader(() =>
  import('./scenes/events/index'  /* webpackChunkName: "Events" */), 'Events')

const Event = createLoader(() =>
  import('./scenes/event' /* webpackChunkName: "EventWithContainer" */), 'EventWithContainer')

const NewEvent = createLoader(() =>
  import('./scenes/new-event' /* webpackChunkName: "NewEvent" */), 'NewEvent')

const BackStage = createLoader(() =>
  import('./scenes/back-stage' /* webpackChunkName: "BackStage" */), 'BackStage')

const StyledEventPlog = styled.div`
  height: 100%;
  
  a, a:hover {
    color: var(--activeLink);
  }
`

const UserEvents = () => (
  [
    <UserNav key="user-nav" />,
    <Events key="user-events" />
  ]
)
const EventPlog = ({user = {}}) => (
    <StyledEventPlog>
      <Switch>
        <PublicRoute exact path="/" component={UserEvents} />
        <PublicRoute exact path="/e/:id" component={Event} />
        <PublicRoute exact path="/e/new" component={NewEvent} />

        <PrivateRoute exact path="/c/:community_id/e/new" component={NewEvent} />
        <PublicRoute exact path="/c/:community_id/e/:id" component={Event} />
        <PrivateRoute path="/c/:community_id/e/:id/backstage" component={BackStage} />

        {/* maintain support for legacy routes*/}
        <PublicRoute exact path="/events" component={UserEvents} />
        <PublicRoute exact path="/events/new" component={NewEvent} />
        <PrivateRoute exact path="/communities/:community_id/events/new" component={NewEvent} />
        <PublicRoute exact path="/communities/:community_id/events/:id" component={Event} />
        <PrivateRoute path="/communities/:community_id/events/:id/backstage" component={BackStage} />

      </Switch>
    </StyledEventPlog>
)

export default EventPlog
