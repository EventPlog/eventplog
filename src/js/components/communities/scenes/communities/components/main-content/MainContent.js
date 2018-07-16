import React from 'react'
import CommunitiesSection from '../communities-section'
import ContentSection from 'js/components/shared/content-section'
import Sidebar from 'js/components/shared/sidebar'


const MainContent = ({
  communities = [],
  communities_suggestions = [],
  events_suggestions = [],
  getCommunities,
  getCommunitiesSuggestions,
  followCommunity,
  attendEvent,
}) => {
  return (
    <ContentSection className="user-communities">

      <ContentSection.Body>
        <CommunitiesSection title="My communities"
                            showCTA={false}
          {...{communities, getCommunities}} />
        <CommunitiesSection title="Related communities"
                            getCommunities={getCommunitiesSuggestions}
                            followCommunity={followCommunity}
                            communities={communities_suggestions} />
      </ContentSection.Body>

      <ContentSection.Sidebar>
        <Sidebar.Events events={events_suggestions}
                        attendEvent={attendEvent} />
      </ContentSection.Sidebar>

    </ContentSection>
  )
}

export default MainContent