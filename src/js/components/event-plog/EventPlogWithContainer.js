import React from 'react'

import EventPlogContainer from './EventPlogContainer'
import EventPlog from './EventPlog'

const EventsWithContainer = () => (
  <EventPlogContainer>
    {(props) => <EventPlog {...props} />}
  </EventPlogContainer>
)

export default EventsWithContainer