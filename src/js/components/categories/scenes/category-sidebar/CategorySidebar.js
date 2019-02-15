import React from 'react'
import EventsSection from 'js/components/communities/scenes/communities/components/events-section'

const CommunitySidebar = ({
  loading,
  events_suggestions = [],
  attendEvent,
}) => {
  return (
    <EventsSection title="Events you may like"
                   {...{events: events_suggestions, attendEvent}} />
  )
}

export default CommunitySidebar