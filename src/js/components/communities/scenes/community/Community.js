// @flow

// External
import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

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
  if (props.community && props.community.error) {
    return <Loading.Error msg={props.community.error} />
  }
  return (
    <StyledMain activeLink={activeLink}>

      <CommunityHeader {...props} />
      <Switch>
        <Route exact path="/" render={(routerProps) => <CommunityMainContent {...props} />}/>
        <PrivateRoute exact path="/edit" render={() => <UpdateCommunity {...props} />} />
        <Route exact path="/events" render={() => <CommunityMainContent {...props} />}/>
        <Route exact path="/e" render={(routerProps) => <CommunityMainContent {...props} />}/>
        <Route path="/events/*" render={() => <Events {...props} />}/>
        <Route path="/e/*" render={() => <Events {...props} />}/>

        <Route exact path="/c/:id" render={(routerProps) => <CommunityMainContent {...props} />}/>
        <PrivateRoute exact path="/c/:id/edit" render={() => <UpdateCommunity {...props} />} />
        <Route exact path="/c/:community_id/e" render={() => <CommunityMainContent {...props} />}/>
        <Route path="/c/:community_id/e/*" render={() => <Events {...props} />}/>

        <Route exact path="/communities/:id" render={(routerProps) => <CommunityMainContent {...props} />}/>
        <PrivateRoute path="/communities/:id/edit" render={() => <UpdateCommunity {...props} />} />
        <Route exact path="/communities/:community_id/events" render={() => <CommunityMainContent {...props} />}/>
        <Route path="/communities/:community_id/events/*" render={() => <Events {...props} />}/>

      </Switch>
    </StyledMain>
  )
}

export default Main;