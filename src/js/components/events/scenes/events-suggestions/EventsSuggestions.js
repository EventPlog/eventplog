import React from 'react'
import styled, { css } from 'styled-components'

//======== Internal Components =========
import EventsSection from 'js/components/events/scenes/events/components/events-section'
import { media } from 'js/styles/mixins'

const MainContent = ({
  events_suggestions = {},
  getEventsSuggestions,
  attendEvent,
  className,
}) => {
  return (
    <EventsSection className={className}
                   title="From Communities you follow"
                   events={events_suggestions}
                   getEvents={getEventsSuggestions}
                   attendEvent={attendEvent} />
  )
}

export default MainContent