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


const Event = createLoader(() =>
  import('js/components/events/scenes/event' /* webpackChunkName: "Event" */))

const StyledMain = styled.div`
  --activeLink: ${ props=> props ? props.activeLink : 'var(--activeLink)'};
`;

type Props = {
  defaultTheme: object,
};



const Main = ({activeLink, ...props}) => (
  <StyledMain activeLink={activeLink}>
    <CommunityHeader />
    <PrivateRoute exact path="/communities/:id" render={(routerProps) => <MainContent {...props} />}/>
    <PrivateRoute exact path="/communities/:community_id/events" render={() => <MainContent {...props} />}/>
    <PrivateRoute exact path="/communities/:community_id/events/:id" render={() => <Event {...props} />}/>
  </StyledMain>
)

export default Main;