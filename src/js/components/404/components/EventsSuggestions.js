import React from 'react'

//============ INTERNAL =============
import ContentSection from 'js/components/shared/content-section'
import Sidebar from 'js/components/shared/sidebar'

const EventsSuggestions = ({className, events_suggestions, attendEvent}) => {
  return (
    <ContentSection className={`events ${className}`}>
      <ContentSection.Sidebar>
        <Sidebar.Events events={events_suggestions}
                        attendEvent={attendEvent} />
      </ContentSection.Sidebar>

      <EventsSuggestions />
    </ContentSection>

  )
}

export default EventsSuggestions