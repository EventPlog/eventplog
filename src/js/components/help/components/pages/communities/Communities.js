import React from 'react'
import styled from 'styled-components'
import {Switch, Route, Link}  from 'react-router-dom'
import createLoader from '../../../../shared/loading/createLoadable'

const StyledCommunities = styled.div`

`
const CommunitiesIFollow = createLoader(() =>import('./scenes/communities-i-follow' /* webpackChunkName : "CommunitiesIFollow" */))
const ConnectWithOrganizers= createLoader(() =>import('./scenes/connect-with-organizers' /*webpackChunckName : "Community" */))
const CommunitySuggestions= createLoader(() =>import('./scenes/community-suggestions' /*webpackChunckName : "CommunitySuggestions"*/))
const Announcements= createLoader(()=>import('./scenes/announcements' /*webpackChunckName : "CommunityAnnouncements" */))
const DiscoverNewCommunities= createLoader( ()=> import('./scenes/discover-new-communities' /*webpackChunckName : "DiscoverNewCommunities" */))
const FollowACommunity = createLoader(()=> import('./scenes/follow-a-community' /*webpackChunckName : "FollowACommunity"*/))

const Communities = () =>{
  return(
    <StyledCommunities>
      <Switch>
        <Route exact path="/" component={DiscoverNewCommunities}/>
        <Route exact path="/help/communities" component={DiscoverNewCommunities}/>
        <Route exact path="/help/communities/discover-new-communities" component={DiscoverNewCommunities}/>
        <Route exact path="/help/communities/community-suggestions" component={CommunitySuggestions}/>
        <Route exact path="/help/communities/communities-i-follow" component={CommunitiesIFollow}/>
        <Route exact path="/help/communities/follow-a-community" component={FollowACommunity}/>  
        <Route exact path="/help/communities/connect-with-organizers" component={ConnectWithOrganizers}/>
        <Route exact path="/help/communities/announcements" component={Announcements}/>
      </Switch>
    </StyledCommunities>
  );
}

export default Communities