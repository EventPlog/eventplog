import React from 'react'
import styled from 'styled-components'
import createLoader from '../../../../shared/loading/createLoadable'
import {Route, Switch} from 'react-router-dom'

const StyledBackstage =styled.div`

`

const CreateACommunity =createLoader(()=>import('./scenes/create-a-community' /*webpackChunkName : "CreateCommunityHelp" */))
const CreateAnEvent= createLoader(()=>import('./scenes/create-an-event' /*webpackChunkName:"CreateEventHelp" */))
const CreateAnnouncement = createLoader(()=>import('./scenes/create-announcements' /*webpackChunckName: "CreateAnnouncementHelp"*/))
const MyCommunities =createLoader(()=> import('./scenes/my-communities' /*webpackChunkName: "MyCommunitiesHelp"*/))

const Organizers =()=>{
  return(
    <StyledBackstage>
      <Switch>
        <Route exact path="/" component={CreateACommunity}/>
        <Route exact path="/help/organizers" component={CreateACommunity}/>
        <Route exact path="/help/organizers/create-a-community" component={CreateACommunity}/>
        <Route exact path="/help/organizers/create-an-event" component={CreateAnEvent}/>
        <Route exact path="/help/organizers/create-announcements" component={CreateAnnouncement}/>
        <Route exact path="/help/organizers/my-communities" component={MyCommunities}/>
      </Switch>
    </StyledBackstage>
  )
}

export default Organizers