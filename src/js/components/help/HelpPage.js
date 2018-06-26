import React from 'react'
import styled from 'styled-components'
import {Switch, Route,Link} from 'react-router-dom'
import HelpDescription from './components/help-description'
import HelpTopics from './components/help-topics'
import createLoader from '../../components/shared/loading/createLoadable'

const StyledHelpPage =styled.div`
`
const GettingStarted= createLoader(() => import('./components/pages/getting-started' /* webpackChunckName : "GettingStarted" */))

const HelpPage =()=>{
  return(
  <StyledHelpPage>
    <Switch>
      <Route path="/" component={GettingStarted} />
      <Route path="/help/getting-started" component={GettingStarted} />
      {/* {<Route exact path="/help/communities" component={Communities} />*/}
    
    </Switch>
  </StyledHelpPage>
  );
}

export default HelpPage

