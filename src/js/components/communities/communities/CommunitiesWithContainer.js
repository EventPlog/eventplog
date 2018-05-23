import React from 'react'

import EventsContainer from './CommunitiesContainer'
import Events from './Communities'

const EventsWithContainer = () => (
  <EventsContainer>
    {(props) => <Events {...props} />}
  </EventsContainer>
)

export default EventsWithContainer