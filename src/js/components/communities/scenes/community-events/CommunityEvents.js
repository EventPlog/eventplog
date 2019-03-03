import React from 'react'
import styled, { css } from 'styled-components'

//======== Internal Components =========
import EventsSection from 'js/components/events/scenes/events/components/events-section'
import { media } from 'js/styles/mixins'

const CommunityEvents = ({
  events = {},
  community = {},
  past_events = {},
  getEvents,
  getPastEvents,
  attendEvent,
  slug,
}) => {
  return (
    <div className="community-events">
      <EventsSection key="user-upcoming-events-section"
                     title="Upcoming" {...{events, getEvents, attendEvent, community }} />,
      <EventsSection key="user-past-events-section"
                     title="Past"
                     events={past_events}
                     community={community}
                     getEvents={getPastEvents}
                     attendEvent={attendEvent} />
    </div>
  )
}

export default CommunityEvents