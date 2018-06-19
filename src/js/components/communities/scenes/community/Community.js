// @flow

// External
import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch } from 'react-router-dom';

// Internal
import { PrivateRoute } from 'js/auth'
import MainContent from './components/main-content-body'
import createLoader from 'js/components/shared/loading/createLoadable'
import CommunityHeader from './components/community-header'
import { media } from 'js/styles/mixins'


const Events = createLoader(() =>
  import('js/components/events' /* webpackChunkName: "Event" */))

const StyledMain = styled.div`
`;

type Props = {
  defaultTheme: object,
};



const Main = ({activeLink, ...props}) => (
  <StyledMain activeLink={activeLink}>
    <CommunityHeader community={props.community} />
    <Switch>
      <PrivateRoute exact path="/communities/:id" render={(routerProps) => <MainContent {...props} />}/>
      <PrivateRoute exact path="/communities/:community_id/events" render={() => <MainContent {...props} />}/>
      <PrivateRoute path="/communities/:community_id/events/*" render={() => <Events {...props} />}/>
    </Switch>
  </StyledMain>
)

export default Main;