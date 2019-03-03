import React from 'react'
import styled from 'styled-components'
import { media } from 'js/styles/mixins'
import ContentSection from 'js/components/shared/v2/content-section'
import CommunityEvents from 'js/components/communities/scenes/community-events'
import CommunitySidebar from 'js/components/communities/scenes/community-sidebar'
import Loading from 'js/components/shared/loading'

const StyledMainContent = styled.div`
  &.app-container {
    max-width: 2000px;
  }
`

const MainContent = ({
  loading,
  community,
  slug,
}) => {
  if (loading) {
    return <Loading />
  }
  return (
    <StyledMainContent className="app-container">
      <ContentSection className="community-event">

        <ContentSection.Body>
          <CommunityEvents {...{slug, community}} />
        </ContentSection.Body>

        <ContentSection.Sidebar>
          <CommunitySidebar  />
        </ContentSection.Sidebar>

      </ContentSection>
    </StyledMainContent>
  )
}

export default MainContent