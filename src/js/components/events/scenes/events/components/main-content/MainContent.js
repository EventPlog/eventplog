import React from 'react'
import EventsSection from '../events-section'
import CommunitiesSection from '../communities-section'
import ContentSection from 'js/components/shared/content-section'


const MainContent = ({
  events = [],
  events_suggestions = [],
  communities_suggestions = [],
}) => {
  return (
    <ContentSection>

      <ContentSection.Body>
        <EventsSection title="Your events" {...{events}} />
        <EventsSection title="Events you may like"
                       events={events_suggestions} />
      </ContentSection.Body>

      <ContentSection.Sidebar>
        <CommunitiesSection {...{communities: communities_suggestions}} />
      </ContentSection.Sidebar>

    </ContentSection>
  )
}

export default MainContent