import React from 'react'
import styled from 'styled-components'
import { Route, Switch} from 'react-router-dom'
import createLoader from 'js/components/shared/loading/createLoadable'

const StyledEvents = styled.div`

`

const SpeakersList = createLoader(() =>
  import('./scenes/speakers' /* webpackChunckName: "SpeakersList"*/))

const Speaker = createLoader(()=>
  import('./scenes/speaker' /*webpackChunckName: "Speaker"*/))

const EditSpeaker = createLoader(()=>
  import('./scenes/edit-speaker' /*webpackChunckName: "EditSpeaker"*/))

const Speakers = ()=>{
  return(
    <Switch>
      <Route exact path="/" component={SpeakersList}/>
      <Route exact path="/speakers/:speaker_id/user/:id/edit" component={EditSpeaker}/>

      <Route exact path="/e/:event_id/speakers" component={SpeakersList}/>
      <Route exact path="/e/:event_id/speakers/:id" component={Speaker}/>
      <Route exact path="/e/:event_id/speakers/:speaker_id/user/:id/edit" component={EditSpeaker}/>

      <Route exact path="/c/:community_id/e/:event_id/speakers" component={SpeakersList}/>
      <Route exact path="/c/:community_id/e/:event_id/speakers/:id" component={Speaker}/>
      <Route exact path="/c/:community_id/e/:event_id/speakers/:id/edit" component={EditSpeaker}/>
      <Route exact path="/c/:community_id/e/:event_id/speakers/:speaker_id/user/:id/edit" component={EditSpeaker}/>
    </Switch>
  )
}

export default Speakers