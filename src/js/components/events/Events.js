import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

// internal components
import Header from '../../header/MainHeader';
import createLoader from '../shared/loading/createLoadable'
import styled  from 'styled-components';
import defaults from '../../styles/theme/variables';
import {fakeAuth, PrivateRoute, PublicRoute} from '../../auth'
import UserNav from 'js/components/shared/user-secondary-menu'
// import RegistrationForm from 'js/components/guests/scenes/check-in-form'

const Events = createLoader(() =>
  import('./scenes/events/index'  /* webpackChunkName: "Events" */), 'Events')

const Event = createLoader(() =>
  import('./scenes/event' /* webpackChunkName: "EventWithContainer" */), 'EventWithContainer')

const NewEvent = createLoader(() =>
  import('./scenes/new-event' /* webpackChunkName: "NewEvent" */), 'NewEvent')

const BackStage = createLoader(() =>
  import('./scenes/back-stage' /* webpackChunkName: "BackStage" */), 'BackStage')

const RegistrationForm = createLoader(() =>
  import('js/components/guests/scenes/check-in-form' /* webpackChunkName: "BackStage" */), 'RegistrationForm')

const FeedbackForm = createLoader(() =>
  import('js/components/feedback/scenes/quick-feedback-form' /* webpackChunkName: "Speakers" */), 'FeedbackForm')

const Speakers = createLoader(() =>
  import('js/components/speakers' /* webpackChunkName: "Speakers" */), 'Speakers')

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
        <PublicRoute exact path="/e/new" component={NewEvent} />
        <PublicRoute exact path="/e/:id" component={Event} />
        <PublicRoute exact path="/e/:id/register" component={RegistrationForm} />
        <PublicRoute exact path="/e/:id/feedback" component={FeedbackForm} />
        <PublicRoute path="/e/:id/speakers" component={Speakers} />

        <PrivateRoute exact path="/c/:community_id/e/new" component={NewEvent} />
        <PublicRoute exact path="/c/:community_id/e/:id" component={Event} />
        <PrivateRoute path="/c/:community_id/e/:id/backstage" component={BackStage} />
        <PublicRoute path="/c/:community_id/e/:id/speakers" component={Speakers} />
        <PublicRoute exact path="/c/:community_id/e/:id/register" component={RegistrationForm} />
        <PublicRoute exact path="/c/:community_id/e/:id/feedback" component={FeedbackForm} />


        {/* maintain support for legacy routes*/}
        <PublicRoute exact path="/events" component={UserEvents} />
        <PrivateRoute exact path="/communities/:community_id/events/new" component={NewEvent} />
        <PublicRoute exact path="/communities/:community_id/events/:id" component={Event} />
        <PrivateRoute path="/communities/:community_id/events/:id/backstage" component={BackStage} />
        <PrivateRoute path="/communities/:community_id/events/:id/register" component={RegistrationForm} />
        <PrivateRoute path="/communities/:community_id/events/:id/feedback" component={FeedbackForm} />

        <PublicRoute exact path="/ext" component={UserEvents} />
        <PublicRoute exact path="/ext/e/:id" component={Event} />
        <PublicRoute exact path="/ext/e/:id/register" component={RegistrationForm} />
        <PublicRoute exact path="/ext/c/:community_id/e/:id" component={Event} />
        <PublicRoute exact path="/ext/c/:community_id/e/:id/register" component={RegistrationForm} />
        <PublicRoute exact path="/ext/c/:community_id/e/:id/feedback" component={FeedbackForm} />
      </Switch>
    </StyledEventPlog>
)

export default EventPlog
