import React from 'react'
import CommunitiesSection from '../communities-section'
import EventsSection from '../events-section'
import ContentSection from 'js/components/shared/content-section'
import Sidebar from 'js/components/shared/sidebar'


const MainContent = ({
  communities = [],
  communities_suggestions = [],
  events_suggestions = [],
  followCommunity,
}) => {
  return (
    <ContentSection className="user-communities">

      <ContentSection.Body>
        <CommunitiesSection title="My communities"
                            showCTA={false}
          {...{communities}} />
        <CommunitiesSection title="Related communities"
                            followCommunity={followCommunity}
                            communities={communities_suggestions} />
      </ContentSection.Body>

      <ContentSection.Sidebar>
        <Sidebar.Events events={events_suggestions} />
      </ContentSection.Sidebar>

    </ContentSection>
  )
}

export default MainContent