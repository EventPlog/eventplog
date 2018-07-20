import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// internal
import createLoadable from 'js/components/shared/loading/createLoadable'
import { media } from 'js/styles/mixins'
import withProps from 'js/lib/render-with-props'


const Tasks = createLoadable(() => import('js/components/event-planning'  /* webpackChunkName: "Tasks" */))
const Guests = createLoadable(() => import('js/components/guests'  /* webpackChunkName: "check-ins" */))
const Feedback = createLoadable(() => import('js/components/feedback'  /* webpackChunkName: "guests" */))
const Settings = createLoadable(() => import('js/components/event-settings'  /* webpackChunkName: "eventSettings" */))
const TodoItem = createLoadable(() => import('js/components/todo-items/components/todo-item'  /* webpackChunkName: "eventSettings" */))

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


const EventComponent = (props) =>
  <StyledEventComponent>
    <Switch>
      <Route exact path='/communities/:community_id/events/:event_id/backstage' render={withProps(Tasks, props)} />
      <Route path='/communities/:community_id/events/:event_id/backstage/tasks' render={withProps(Tasks, props)} />
      <Route path="/communities/:community_id/events/:event_id/backstage/guests" render={withProps(Guests, props)} />
      <Route path="/communities/:community_id/events/:event_id/backstage/feedback" render={withProps(Feedback, props)} />
      <Route path="/communities/:community_id/events/:event_id/backstage/settings" component={Settings} />
    </Switch>
  </StyledEventComponent>

export default EventComponent;
