// @flow

// External
import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch } from 'react-router-dom';

// Internal
import { PrivateRoute } from '../../../auth'
import Sidebar from './components/sidebar';
import MainContent from './components/main-content-body'
import createLoader from '../../shared/loading/createLoadable'
import CommunityHeader from './components/community-header'


const Event = createLoader(() =>
  import('../../events/event' /* webpackChunkName: "Event" */))

const StyledMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  > .container {
    flex: 1;
  }
  
  .app-container img {
    max-height: 50px;
    margin: 2em 0; 
  }
`;

type Props = {
  defaultTheme: object,
};



const Main = (props) => (
  <StyledMain>
    <CommunityHeader />
    <div className="app-container">
      <PrivateRoute exact path="/communities/:id" render={(props) => <MainContent {...{props}} />}/>
      <PrivateRoute exact path="/communities/:id/events" render={() => <MainContent {...{props}} />}/>
      <PrivateRoute exact path="/communities/:id/events/:id" render={() => <Event {...{props}} />}/>
    </div>
  </StyledMain>
)

export default Main;