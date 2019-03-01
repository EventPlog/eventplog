import React from 'react'
import styled from 'styled-components'
import { Route, Switch} from 'react-router-dom'
import createLoader from 'js/components/shared/loading/createLoadable'
import EventSubpageWrapper from 'js/components/shared/event-subpage-wrapper'

const StyledEvents = styled.div`

`

const PresentationsList = createLoader(() =>
  import('./scenes/presentations' /* webpackChunckName: "PresentationsList"*/))

const Presentation = createLoader(()=>
  import('./scenes/presentation' /*webpackChunckName: "Presentation"*/))

const EditPresentationSpeaker = createLoader(()=>
  import('./scenes/edit-presentation-speaker' /*webpackChunckName: "EditPresentationSpeaker"*/))

const Presentations = ()=>{
  return(
    <EventSubpageWrapper>
      <Switch>
        <Route exact path="/" component={PresentationsList}/>
        <Route exact path="/presentations/:presentation_id/user/:id/edit" component={EditPresentationSpeaker}/>

        <Route exact path="/e/:event_id/presentations" component={PresentationsList}/>
        <Route exact path="/e/:event_id/presentations/:id" component={Presentation}/>
        <Route exact path="/e/:event_id/presentations/:presentation_id/user/:id/edit" component={EditPresentationSpeaker}/>

        <Route exact path="/c/:community_id/e/:event_id/presentations" component={PresentationsList}/>
        <Route exact path="/c/:community_id/e/:event_id/presentations/:id" component={Presentation}/>
        <Route exact path="/c/:community_id/e/:event_id/presentations/:presentation_id/user/:id/edit" component={EditPresentationSpeaker}/>
      </Switch>
    </EventSubpageWrapper>
  )
}

export default Presentations