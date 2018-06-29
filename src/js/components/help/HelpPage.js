import React from 'react'
import styled from 'styled-components'
import {Switch, Route,Link} from 'react-router-dom'
import createLoader from '../../components/shared/loading/createLoadable'

const StyledHelpPage =styled.div`
`
const GettingStarted= createLoader(() => import('./components/pages/getting-started' /* webpackChunckName : "GettingStarted" */))
const CommunitiesHelp= createLoader(() => import('./components/pages/communities' /*webpackChunkName : "CommunitiesHelp" */))
//const Events= createLoader(() => import('./components/pages/events' /*webpackChunkName : "EventsHelp" */))

const HelpPage =()=>{
  return(
    <StyledHelpPage>
      <Switch>
        <Route exact path="/help" component={GettingStarted} />
        <Route exact path="/help/getting-started" component={GettingStarted} />
        <Route path="/help/communities" component={CommunitiesHelp}/> 
      </Switch>
    </StyledHelpPage>
  );
}

export default HelpPage

