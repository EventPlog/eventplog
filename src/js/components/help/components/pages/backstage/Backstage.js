import React from 'react'
import styled from 'styled-components'
import createLoader from '../../../../shared/loading/createLoadable'
import {Route, Switch} from 'react-router-dom'

const StyledBackstage =styled.div`

`

const EventFeedback =createLoader(()=>import('./scenes/event-feedback' /*webpackChunkName : "EventFeedbackHelp" */))
const EventGuests= createLoader(()=>import('./scenes/event-guests' /*webpackChunkName:"EventGuestsHelp" */))
const EventPlanning = createLoader(()=>import('./scenes/event-planning' /*webpackChunckName: "EventPlanningHelp"*/))
const EventSettings =createLoader(()=> import('./scenes/event-settings' /*webpackChunkName: "EventSettingsHelp"*/))

const BackStage =()=>{
  return(
    <StyledBackstage>
      <Switch>
        <Route exact path="/" component={EventSettings}/>
        <Route exact path="/help/backstage" component={EventPlanning}/>
        <Route exact path="/help/backstage/event-feedback" component={EventFeedback}/>
        <Route exact path="/help/backstage/event-guests" component={EventGuests}/>
        <Route exact path="/help/backstage/event-planning" component={EventPlanning}/>
        <Route exact path="/help/backstage/event-settings" component={EventSettings}/>
      </Switch>
    </StyledBackstage>
  )
}

export default BackStage