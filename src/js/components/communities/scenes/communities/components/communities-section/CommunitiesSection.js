import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


// internal
import ContentPanel from 'js/components/shared/content-panel'

export const generateTitle = (community) => (
  <Link to={`/communities/${community.id}`}>
    {community.name}
  </Link>
)

export const generateMeta = (community) => (
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
  <ContentPanel title={title}>
    {communities && communities.map(({description, featured_image, ...community}) => {
        const title = generateTitle(community)
        const meta = generateMeta(community)
        return (
          <ContentPanel.Card
            key={community.id}
            {...{title, description, featured_image, meta}}
            showButton={showCTA && !community.joined}
            btnText="Join" />
        )
      }
    )}
  </ContentPanel>
)

export default CommunitySection