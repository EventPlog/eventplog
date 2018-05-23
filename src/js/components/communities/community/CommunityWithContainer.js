import React from 'react'

import EventContainer from './CommunityContainer'
import Event from './community'

const EventWithContainer = () => (
  <EventContainer>
    {(props) => <Event {...props} />}
  </EventContainer>
)

export default EventWithContainer