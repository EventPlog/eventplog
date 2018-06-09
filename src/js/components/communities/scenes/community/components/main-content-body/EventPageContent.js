import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// internal components
import createLoadable from '../../../../../components/shared/loading/createLoadable'


const Tasks = createLoadable(() => import('../../../../tasks/TaskTab'  /* webpackChunkName: "Tasks" */))
const CheckIns = createLoadable(() => import('../../../../check-ins'  /* webpackChunkName: "check-ins" */))
const Guests = createLoadable(() => import('../../../../guests'  /* webpackChunkName: "guests" */))
const Settings = createLoadable(() => import('../../../../events/settings'  /* webpackChunkName: "eventSettings" */))

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
      <Route exact path='/events/:id' render={withProps(Tasks, props)} />
      <Route path='/events/:id/tasks' render={withProps(Tasks, props)} />
      <Route path="/events/:id/check-in" render={withProps(CheckIns, props)} />
      <Route path="/events/:id/guests" render={withProps(Guests, props)} />
      <Route path="/events/:id/settings" render={withProps(Settings, props)} />
    </Switch>
  </StyledEventComponent>

export default EventComponent;
