import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// internal
import Sidebar from 'js/components/shared/sidebar'
import Loading from 'js/components/shared/loading'
import { pluralize } from 'js/utils'

export const generateTitle = (community) => (
  <Link to={`/communities/${community.id}/`}>
    {community.name}
  </Link>
)

export const generateDescription = (interests = []) => (
  interests && interests.length > 0 ? `Interested in ${interests.join(', ')}` : ''
)

export const generateMeta = (community) => (
  `${community.no_of_followers} ${pluralize('follower', community.no_of_followers)}`
)

const CommunitiesSection = ({
  title,
  communities = {data: [], meta: {}},
  followCommunity,
  slug
}) => {
  const { loading, error, data = []} = communities
  return (
    <Sidebar title={title || "Communities suggestions"}>
      {loading && <Loading />}
      {error && <Loading.Error msg={error} />}
      {data && data.map(({featured_image, ...community}) => {
          const title = generateTitle(community);
          const description = generateDescription(community.topic_interests)
          const meta = generateMeta(community)
          const titleLink = `/communities/${community.id}/`
          const btn = community.following
                        ? {}
                        : {onClick: () => {followCommunity(community)}, text: 'Follow'}
          return (
            <Sidebar.Card key={community.id} {...{title, description, featured_image, btn, meta, titleLink}} />
          )
        }
      )}
    </Sidebar>
  )
}

export default CommunitiesSection