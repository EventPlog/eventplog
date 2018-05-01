import React from 'react'

import EventsContainer from './EventsContainer'
import Events from './Events'

const EventsWithContainer = () => (
  <EventsContainer>
    {(props) => <Events {...props} />}
  </EventsContainer>
)

export default EventsWithContainer