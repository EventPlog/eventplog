import React from 'react'

//======== Internal Components =========
import EventsSection from 'js/components/events/scenes/events/components/events-section'
import { media } from 'js/styles/mixins'

const UserEvents = ({
  events = {},
  getEvents,
  attendEvent,
}) => {
  return (
    <div>
      <EventsSection key="upcoming-events-section"
                     title="Results" {...{events, getEvents, attendEvent }} />

    </div>
  )
}

export default UserEvents