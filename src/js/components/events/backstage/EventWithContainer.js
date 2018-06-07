import React from 'react'

import EventContainer from './EventContainer'
import Event from './Event'

const EventWithContainer = () => (
  <EventContainer>
    {(props) => <Event {...props} />}
  </EventContainer>
)

export default EventWithContainer