import React from 'react'

import EventsContainer from './OrganizationsContainer'
import Events from './Organizations'

const EventsWithContainer = () => (
  <EventsContainer>
    {(props) => <Events {...props} />}
  </EventsContainer>
)

export default EventsWithContainer