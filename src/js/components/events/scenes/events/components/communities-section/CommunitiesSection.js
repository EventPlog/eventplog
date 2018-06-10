import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// internal
import SidebarCard from 'js/components/shared/sidebar-card'


const StyledEventsSection = styled.div`
`

const generateTitle = (community) => (
  <Link to={`/communities/${community.id}/`}>
    {community.name}
  </Link>
)

const generateDescription = (focus) => (
  `${focus} community`
)

const generateMeta = (community) => (
  `${community.no_of_members} members`
)


const CommunitiesSection = ({ communities }) => (
  <StyledEventsSection className="communities-section">
    {communities && communities.map(({featured_image, ...community}) => {
        const title = generateTitle(community);
        const description = generateDescription(community.focus)
        const meta = generateMeta(community)
        const btnText = 'Join'
        return <SidebarCard {...{title, description, featured_image, btnText, meta}} />
      }
    )}
  </StyledEventsSection>
)

export default CommunitiesSection