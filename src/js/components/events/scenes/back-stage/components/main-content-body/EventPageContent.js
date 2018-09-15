import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import styled from 'styled-components';

// internal
import createLoadable from 'js/components/shared/loading/createLoadable'
import { media } from 'js/styles/mixins'
import withProps from 'js/lib/render-with-props'
import { genEventLink } from 'js/utils'


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
        margin: 1rem; 
      `
    }
  }
`

const verifyAccess = (Component, props = {}) => {
  return props.event.is_stakeholder
            ? withProps(Component, props)
            : () => <Redirect to={`${genEventLink(props.event, props.community)}/backstage/guests`} />
}

const EventComponent = (props) =>
  <StyledEventComponent>
    <Switch>
      <Route exact path='/c/:community_id/e/:event_id/backstage' render={verifyAccess(Tasks, props)} />
      <Route path='/c/:community_id/e/:event_id/backstage/tasks' render={verifyAccess(Tasks, props)} />
      <Route path="/c/:community_id/e/:event_id/backstage/guests" render={withProps(Guests, props)} />
      <Route path="/c/:community_id/e/:event_id/backstage/feedback" render={withProps(Feedback, props)} />
      <Route path="/c/:community_id/e/:event_id/backstage/settings" component={verifyAccess(Settings, props)} />
    </Switch>
  </StyledEventComponent>

export default withRouter(EventComponent);
