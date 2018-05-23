import React from 'react'

import EventPlogContainer from './EventsContainer'
import EventPlog from './Events'

const EventsWithContainer = () => (
  <EventPlogContainer>
    {(props) => <EventPlog {...props} />}
  </EventPlogContainer>
)

export default EventsWithContainer