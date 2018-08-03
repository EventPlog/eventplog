// @flow

import React, { Component } from 'react';

import { Switch } from 'react-router-dom';

// internal components
import Header from '../../header/MainHeader';
import createLoader from '../shared/loading/createLoadable'
import styled, { ThemeProvider } from 'styled-components';
import defaults from '../../styles/theme/variables';
import {fakeAuth, PrivateRoute} from '../../auth'


const Communities = createLoader(() =>
  import('./scenes/communities/index'  /* webpackChunkName: "Communities" */))

const Community = createLoader(() =>
  import('./scenes/community' /* webpackChunkName: "CommunityWithContainer" */))

const NewCommunity = createLoader(() =>
  import('./scenes/new-community' /* webpackChunkName: "NewCommunity" */))


const JoinACommunity = createLoader(() =>
  import('./scenes/join-a-community' /* webpackChunkName: "JoinACommunity" */))

const StyledCommunityPlog = styled.div`
  height: 100%;
  
  a, a:hover {
    color: var(--activeLink);
  }
`

type CommunityPtlogType = {
  community?: any,
  communities?: any,
  user?: any
}

const CommunityPlog = ({community = {}, communities= [], user = {}}) => (
    <StyledCommunityPlog>
      <Switch>
        <PrivateRoute exact path="/" component={Communities} />
        <PrivateRoute exact path="/communities" component={Communities} />
        <PrivateRoute exact path="/communities/join-a-community" component={JoinACommunity} />
        <PrivateRoute exact path="/communities/new" component={NewCommunity} />
        <PrivateRoute path="/communities/:id" component={Community} />
      </Switch>
    </StyledCommunityPlog>
)

export default CommunityPlog
