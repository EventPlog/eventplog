import React from 'react'
import EventsSection from '../events-section'
import CommunitiesSection from '../communities-section'
import ContentSection from 'js/components/shared/content-section'
import Sidebar from 'js/components/shared/sidebar'


const MainContent = ({
  events = [],
  events_suggestions = [],
  communities_suggestions = [],
  followCommunity,
  attendEvent,
}) => {
  return (
    <ContentSection>

      <ContentSection.Body>
        <EventsSection title="Your events" {...{events}} />
        <EventsSection title="Events you may like"
                       events={events_suggestions}
                       attendEvent={attendEvent} />
      </ContentSection.Body>

      <ContentSection.Sidebar>
        <Sidebar.Communities {...{communities: communities_suggestions, followCommunity}} />
      </ContentSection.Sidebar>

    </ContentSection>
  )
}

export default MainContent