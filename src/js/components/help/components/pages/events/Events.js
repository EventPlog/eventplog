import React from 'react'
import styled from 'styled-components'
import { Route, Switch} from 'react-router-dom'
import createLoader from '../../../../shared/loading/createLoadable'

const StyledEvents = styled.div`

`

const DiscoverNewEvents = createLoader(()=>import('./scenes/discover-new-events' /* webpackChunckName: "DiscoverNewEvents"*/))
const EventHelp = createLoader(()=>import('./scenes/event' /*webpackChunckName: "EventHelp"*/))
const EventSuggestions= createLoader(()=>import('./scenes/event-suggestions' /*webpackChunckName: "EventSuggestions" */))
const AllEvents =createLoader(()=>import('./scenes/upcoming-and-past-events' /*webpackChunckName: "AllEvents" */))

const Events = ()=>{
  return(
    <Switch>
      <Route exact path="/" component={DiscoverNewEvents}/>
      <Route exact path="/help/events" component={DiscoverNewEvents}/>
      <Route exact path="/help/events/discover-new-events" component={DiscoverNewEvents}/>
      <Route exact path="/help/events/event-suggestions" component={EventSuggestions}/>
      <Route exact path="/help/events/event" component={EventHelp}/>
      <Route exact path="/help/events/upcoming-and-past-events" component={AllEvents}/>
      
    </Switch>
  )
}

export default Events