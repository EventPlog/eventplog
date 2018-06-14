import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// internal
import Sidebar from 'js/components/shared/sidebar'

export const generateTitle = (community) => (
  <Link to={`/communities/${community.id}/`}>
    {community.name}
  </Link>
)

export const generateDescription = (focus) => (
  `${focus} community`
)

export const generateMeta = (community) => (
  `${community.no_of_members} members`
)


const CommunitiesSection = ({ communities }) => (
  <Sidebar title="Communities suggestions">
    {communities && communities.map(({featured_image, ...community}) => {
        const title = generateTitle(community);
        const description = generateDescription(community.focus)
        const meta = generateMeta(community)
        const btnText = 'Join'
        return <Sidebar.Card {...{title, description, featured_image, btnText, meta}} />
      }
    )}
  </Sidebar>
)

export default CommunitiesSection