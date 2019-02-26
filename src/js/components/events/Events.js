import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

// internal components
import createLoader from 'js/components/shared/loading/createLoadable'
import styled  from 'styled-components';
import {fakeAuth, PrivateRoute, PublicRoute} from '../../auth'

const Events = createLoader(() =>
  import('./scenes/events/index'  /* webpackChunkName: "Events" */), 'Events')

const Event = createLoader(() =>
  import('./scenes/event' /* webpackChunkName: "EventWithContainer" */), 'EventWithContainer')

const NewEvent = createLoader(() =>
  import('./scenes/new-event/components/new-event-steps' /* webpackChunkName: "NewEvent" */), 'NewEvent')

const BackStage = createLoader(() =>
  import('./scenes/back-stage' /* webpackChunkName: "BackStage" */), 'BackStage')

const RegistrationForm = createLoader(() =>
  import('js/components/guests/scenes/show-rsvp-questions' /* webpackChunkName: "RegistrationForm" */), 'RegistrationForm')

const FeedbackForm = createLoader(() =>
  import('js/components/feedback/scenes/quick-feedback-form' /* webpackChunkName: "Presentations" */), 'FeedbackForm')

const FeedbackReport = createLoader(() =>
  import('js/components/feedback/scenes/feedback-report' /* webpackChunkName: "Presentations" */), 'FeedbackForm')

const Presentations = createLoader(() =>
  import('js/components/presentations' /* webpackChunkName: "Presentations" */), 'Presentations')

const Resources = createLoader(() =>
  import('js/components/resources' /* webpackChunkName: "Resources" */), 'Resources')

const Sponsorships = createLoader(() =>
  import('js/components/sponsorships' /* webpackChunkName: "Resources" */), 'Sponsors')

const StyledEventPlog = styled.div`
  height: 100%;
  min-height: calc(100vh - 350px);

  
  a, a:hover {
    color: var(--activeLink);
  }
`

const UserEvents = () => (
  [
    <Events key="user-events" />
  ]
)

const EventPlog = ({user = {}}) => (
    <StyledEventPlog>
      <Switch>
        <Route exact path="/" component={UserEvents} />
        <PrivateRoute exact path="/e/new" component={NewEvent} />
        <PublicRoute exact path="/e/:id" component={Event} />
        <PrivateRoute exact path="/e/new" component={NewEvent} />
        <PublicRoute exact path="/e/:id/register" render={(props) => <Event showRegistrationForm={true} {...props} />} />
        <PublicRoute exact path="/e/:id/feedback" component={FeedbackForm} />
        <PublicRoute path="/e/:event_id/presentations" component={Presentations} />
        <PublicRoute path="/e/:event_id/resources" component={Resources} />
        <PublicRoute path="/e/:event_id/sponsors" component={Sponsorships} />
        <PrivateRoute path="/e/:id/backstage" component={BackStage} />

        <PrivateRoute exact path="/c/:community_id/e/new" component={NewEvent} />
        <PublicRoute exact path="/c/:community_id/e/:id" component={Event} />
        <PrivateRoute path="/c/:community_id/e/:id/backstage" component={BackStage} />
        <PublicRoute path="/c/:community_id/e/:id/presentations" component={Presentations} />
        <PublicRoute exact path="/c/:community_id/e/:id/register" component={RegistrationForm} />
        <PublicRoute exact path="/c/:community_id/e/:id/feedback" component={FeedbackForm} />


        {/* maintain support for legacy routes */}
        <PublicRoute exact path="/events" component={UserEvents} />
        <PublicRoute exact path="/events/new" component={NewEvent} />
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
