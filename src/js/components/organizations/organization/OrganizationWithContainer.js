import React from 'react'

import EventContainer from './OrganizationContainer'
import Event from './organization'

const EventWithContainer = () => (
  <EventContainer>
    {(props) => <Event {...props} />}
  </EventContainer>
)

export default EventWithContainer