import React from 'react'
import EventsSection from '../events-section'
import ContentSection from 'js/components/shared/content-section'
import Sidebar from 'js/components/shared/sidebar'


const MainContent = ({
  events = {},
  events_suggestions = {},
  communities_suggestions = {},
  followCommunity,
  getEvents,
  getEventsSuggestions,
  attendEvent,
}) => {
  return (
    <ContentSection>

      <ContentSection.Body>
        <EventsSection title="Events you're part of" {...{events, getEvents, attendEvent }} />
        <EventsSection title="Events you may like"
                       events={events_suggestions}
                       getEvents={getEventsSuggestions}
                       attendEvent={attendEvent} />
      </ContentSection.Body>

      <ContentSection.Sidebar>
        <Sidebar.Communities {...{communities: communities_suggestions, followCommunity}} />
      </ContentSection.Sidebar>

    </ContentSection>
  )
}

export default MainContent