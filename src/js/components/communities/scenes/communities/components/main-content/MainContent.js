import React from 'react'
import styled from 'styled-components'
import { media } from 'js/styles/mixins'
import CommunitiesSection from '../communities-section'
import EventsSection from '../events-section'
import ContentSection from 'js/components/shared/content-section'


const MainContent = ({
  communities = [],
  communities_suggestions = [],
  events_suggestions = []
}) => {
  return (
    <ContentSection className="user-communities">

      <ContentSection.Body>
        <CommunitiesSection title="My communities"
                            showCTA={false}
          {...{communities}} />
        <CommunitiesSection title="Related communities"
                            communities={communities_suggestions} />
      </ContentSection.Body>

      <ContentSection.Sidebar>
        <EventsSection events={events_suggestions} />
      </ContentSection.Sidebar>

    </ContentSection>
  )
}

export default MainContent