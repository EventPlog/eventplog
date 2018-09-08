import React from 'react'
import styled, { css } from 'styled-components'

//======== Internal Components =========
import EventsSection from 'js/components/events/scenes/events/components/events-section'
import { media } from 'js/styles/mixins'

const UserEvents = ({
  events = {},
  past_events = {},
  getEvents,
  getPastEvents,
  attendEvent,
}) => {
  return (
    <div>
      <EventsSection key="user-upcoming-events-section"
                     title="Upcoming" {...{events, getEvents, attendEvent }} />,
      <EventsSection key="user-past-events-section"
                     title="Past"
                     events={past_events}
                     getEvents={getPastEvents}
                     attendEvent={attendEvent} />
    </div>
  )
}

export default UserEvents