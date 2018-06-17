import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// internal
import createLoadable from 'js/components/shared/loading/createLoadable'
import { media } from 'js/styles/mixins'


const Tasks = createLoadable(() => import('js/components/tasks/TaskTab'  /* webpackChunkName: "Tasks" */))
const Guests = createLoadable(() => import('js/components/guests'  /* webpackChunkName: "check-ins" */))
const Feedback = createLoadable(() => import('js/components/feedback'  /* webpackChunkName: "guests" */))
const Settings = createLoadable(() => import('js/components/event-settings'  /* webpackChunkName: "eventSettings" */))

const StyledEventComponent = styled.div`
  display: flex;
  background: white;
  border-radius: 10px;
  border: 1px solid darken(white, 10);
  
  > div {
    flex: 1;
    margin: 50px;
    
    ${
      media.phone`  
        margin: auto 1rem; 
      `
    }
  }
`

const withProps = (Component, props) =>
          () => <Component {...props}/>

const EventComponent = (props) =>
  <StyledEventComponent>
    <Switch>
      <Route exact path='/communities/:community_id/events/:event_id/backstage' render={withProps(Tasks, props)} />
      <Route exact path='/communities/:community_id/events/:event_i/backstage/tasks' render={withProps(Tasks, props)} />
      <Route exact path="/communities/:community_id/events/:event_i/backstage/guests" render={withProps(Guests, props)} />
      <Route exact path="/communities/:community_id/events/:event_i/backstage/feedback" render={withProps(Feedback, props)} />
      <Route exact path="/communities/:community_id/events/:event_i/backstage/settings" render={withProps(Settings, props)} />
    </Switch>
  </StyledEventComponent>

export default EventComponent;
