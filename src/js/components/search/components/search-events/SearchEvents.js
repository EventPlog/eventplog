import React from 'react'

//======== Internal Components =========
import EventsSection from 'js/components/events/scenes/events/components/events-section'
import { media } from 'js/styles/mixins'

const UserEvents = ({
  events = {},
  getEvents,
  query = {},
  attendEvent,
}) => {
  return (
    <div>
      <EventsSection title={`Results (${events.meta && events.meta.total_count ? events.meta.total_count : 0})`}
                     noRecordsMsg={`We couldn't find any event matching ${query.title}`}
                     {...{events, getEvents, attendEvent }} />

    </div>
  )
}

export default UserEvents