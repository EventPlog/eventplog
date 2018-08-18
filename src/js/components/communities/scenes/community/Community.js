// @flow

// External
import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch } from 'react-router-dom';

// Internal
import { PrivateRoute } from 'js/auth'
import Loading from 'js/components/shared/loading'
import createLoader from 'js/components/shared/loading/createLoadable'
import CommunityHeader from './components/community-header'
import { media } from 'js/styles/mixins'


const CommunityMainContent = createLoader(() =>
  import('./components/main-content-body' /* webpackChunkName: "MainContent" */))

const Events = createLoader(() =>
  import('js/components/events' /* webpackChunkName: "Event" */))

const UpdateCommunity = createLoader(() =>
  import('js/components/communities/scenes/update-community' /* webpackChunkName: "NewCommunity" */))

const StyledMain = styled.div`
`;

type Props = {
  defaultTheme: object,
};



const Main = ({activeLink, ...props}) => {
  if (props.community && props.community.loading) {
    return <Loading />
  }
  return (
    <StyledMain activeLink={activeLink}>
      {props.community && props.community.id && <CommunityHeader {...props} />}
      <Switch>
        <PrivateRoute exact path="/communities/:id" render={(routerProps) => <CommunityMainContent {...props} />}/>
        <PrivateRoute path="/communities/:id/edit" render={() => <UpdateCommunity {...props} />} />
        <PrivateRoute exact path="/communities/:community_id/events" render={() => <CommunityMainContent {...props} />}/>
        <PrivateRoute path="/communities/:community_id/events/*" render={() => <Events {...props} />}/>
      </Switch>
    </StyledMain>
  )
}

export default Main;