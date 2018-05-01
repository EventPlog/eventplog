import React, { Component } from 'react';

import { Switch } from 'react-router-dom';

// internal components
// import './App.css';
import Header from './header/MainHeader';
import {fakeAuth, PrivateRoute} from './auth'
import createLoader from './components/shared/loading/createLoadable'


const Events = createLoader(() =>
  import('./components/events/events'  /* webpackChunkName: "Events" */))

const Event = createLoader(() =>
  import('./components/events/event' /* webpackChunkName: "EventWithContainer" */))

const NewEvent = createLoader(() =>
  import('./components/events/new-event' /* webpackChunkName: "NewEvent" */))

const App = () =>
  <div className="background full-height">
    <Header />
    <Switch>
      <PrivateRoute exact path="/" component={Events} />
      <PrivateRoute exact path="/events" component={Events} />
      <PrivateRoute exact path="/events/new" component={NewEvent} />
      <PrivateRoute path="/events/:id" component={Event} />
    </Switch>
  </div>

export default App;
