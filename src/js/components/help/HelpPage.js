import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import HelpDescription from './components/help-description'
import HelpTopics from './components/help-topics'

const StyledHelpPage =styled.div`
.help-page{
  display:flex;
  margin:50px;
  font-size: 18px;
}

`
const HelpPage =()=>{
  return(
    <StyledHelpPage>

    <Switch>
        <PrivateRoute exact path="/" component={UserEvents} />
        <PrivateRoute exact path="/events" component={UserEvents} />
        <PrivateRoute exact path="/communities/:community_id/events/new" component={NewEvent} />
        <PrivateRoute exact path="/communities/:community_id/events/:id" component={Event} />
        <PrivateRoute path="/communities/:community_id/events/:id/backstage" component={BackStage} />
    </Switch>


      <div className="help-page">
        <HelpTopics/>
        <HelpDescription/>
    </div>
  </StyledHelpPage>
  )
}

export default HelpPage