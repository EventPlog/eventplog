import React from 'react'
import styled from 'styled-components'
import {Switch, Route,Link} from 'react-router-dom'
import createLoader from '../../components/shared/loading/createLoadable'

import HelpTopics from './components/help-topics'
import HelpDescription from './components/help-description'
import GoToEventplog from './components/go-to-eventplog-button'

const StyledHelpPage = styled.div`
  &.help-page.app-container {
    align-items: flex-start;
  }
  
  p {
    font-size: 1rem;
  }
  
  img {
    max-width: 100%;
  }
`
const GettingStarted= createLoader(() => import('./components/pages/getting-started' /* webpackChunckName : "GettingStartedHelp" */))
const CommunitiesHelp= createLoader(() => import('./components/pages/communities' /*webpackChunkName : "CommunitiesHelp" */))
const Events= createLoader(() => import('./components/pages/events' /*webpackChunkName : "EventsHelp" */))
const BackStage= createLoader(()=>import('./components/pages/backstage/' /*webpackChunckName : "BackStageHelp" */))
const Organizers =createLoader(()=>import('./components/pages/organisers/' /*webpackChunckName : "OrganizersHelp" */))

const HelpPage = () => {
  return(
    <StyledHelpPage  className="help-page app-container">

        <HelpTopics />
        <HelpDescription>
          <GoToEventplog/>
          <Switch>
            <Route exact path="/help" component={GettingStarted} />
            <Route exact path="/help/getting-started" component={GettingStarted} />
            <Route path="/help/communities" component={CommunitiesHelp}/> 
            <Route path="/help/events" component={Events}/> 
            <Route path ="/help/backstage" component={BackStage}/>
            <Route path ="/help/organizers" component={Organizers}/>
          </Switch>
        </HelpDescription>
    </StyledHelpPage>
  );
}

export default HelpPage

