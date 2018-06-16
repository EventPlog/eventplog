import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// internal components
import createLoadable from 'js/components/shared/loading/createLoadable'


const Tasks = createLoadable(() => import('js/components/tasks/TaskTab'  /* webpackChunkName: "Tasks" */))
const CheckIns = createLoadable(() => import('js/components/check-ins'  /* webpackChunkName: "check-ins" */))
const Guests = createLoadable(() => import('js/components/guests'  /* webpackChunkName: "guests" */))
const Settings = createLoadable(() => import('js/components/events/settings'  /* webpackChunkName: "eventSettings" */))

const StyledEventComponent = styled.div`
  display: flex;
  background: white;
  min-height: 600px;
  margin: 50px 0;
  border-radius: 10px;
  border: 1px solid darken(white, 10);
  
  > div {
    flex: 1;
    margin: 50px;
  }
`

const withProps = (Component, props) =>
          () => <Component {...props}/>

const EventComponent = (props) =>
  <StyledEventComponent>
    <Switch>
      <Route exact path='/communities/:community_id/events/:event_id/backstage' render={withProps(Tasks, props)} />
      <Route exact path='/communities/:community_id/events/:event_i/backstage/tasks' render={withProps(Tasks, props)} />
      <Route exact path="/communities/:community_id/events/:event_i/backstage/check-in" render={withProps(CheckIns, props)} />
      <Route exact path="/communities/:community_id/events/:event_i/backstage/guests" render={withProps(Guests, props)} />
      <Route exact path="/communities/:community_id/events/:event_i/backstage/settings" render={withProps(Settings, props)} />
    </Switch>
  </StyledEventComponent>

export default EventComponent;
