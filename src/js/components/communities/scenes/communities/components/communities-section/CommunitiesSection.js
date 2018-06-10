import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// internal
import { media } from 'js/styles/mixins'
import MainContentCard from 'js/components/shared/main-content-card'


const StyledCommunitySection = styled.div`
  > ul {
    margin: 2rem;
    
    ${
      media.tablet`
        margin: 0;
      `
    }
        
    ${
      media.phone`
        margin: 0;
      `
    }
  }
  
`

const generateTitle = (community) => (
  <Link to={`/communities/${community.id}`}>
    {community.name}
  </Link>
)

const generateMeta = (community) => (
  <ul>
    <li>
      {community.no_of_members} members
    </li>
    <li>
      {community.no_of_upcoming_events} upcoming event
    </li>
    <li>
      <span className="meta-label">Focus</span>: {community.focus}
    </li>
  </ul>
)

const CommunitySection = ({ title, showCTA = true, communities }) => (
  <StyledCommunitySection className="communities-section">
    <h5 className="header">{ title }</h5>
    <ul>
      {communities && communities.map(({description, featured_image, ...community}) => {
        const title = generateTitle(community)
        const meta = generateMeta(community)
         return (
           <MainContentCard
              {...{title, description, featured_image, meta}}
              showButton={showCTA && !community.joined}
              btnText="Join" />
          )
        }
      )}
    </ul>
  </StyledCommunitySection>
)

export default CommunitySection