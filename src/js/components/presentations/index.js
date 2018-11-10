import React from 'react'
import styled from 'styled-components'
import { Route, Switch} from 'react-router-dom'
import createLoader from 'js/components/shared/loading/createLoadable'

const StyledEvents = styled.div`

`

const PresentationsList = createLoader(() =>
  import('./scenes/presentations' /* webpackChunckName: "PresentationsList"*/))

const Presentation = createLoader(()=>
  import('./scenes/presentation' /*webpackChunckName: "Presentation"*/))

const EditPresentation = createLoader(()=>
  import('./scenes/edit-presentation' /*webpackChunckName: "EditPresentation"*/))

const Presentations = ()=>{
  return(
    <Switch>
      <Route exact path="/" component={PresentationsList}/>
      <Route exact path="/presentations/:presentation_id/user/:id/edit" component={EditPresentation}/>

      <Route exact path="/e/:event_id/presentations" component={PresentationsList}/>
      <Route exact path="/e/:event_id/presentations/:id" component={Presentation}/>
      <Route exact path="/e/:event_id/presentations/:presentation_id/user/:id/edit" component={EditPresentation}/>

      <Route exact path="/c/:community_id/e/:event_id/presentations" component={PresentationsList}/>
      <Route exact path="/c/:community_id/e/:event_id/presentations/:id" component={Presentation}/>
      <Route exact path="/c/:community_id/e/:event_id/presentations/:id/edit" component={EditPresentation}/>
      <Route exact path="/c/:community_id/e/:event_id/presentations/:presentation_id/user/:id/edit" component={EditPresentation}/>
    </Switch>
  )
}

export default Presentations