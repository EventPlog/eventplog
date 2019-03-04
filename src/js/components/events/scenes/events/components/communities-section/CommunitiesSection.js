import React from 'react'
import { Link } from 'react-router-dom'

// internal
import Sidebar from 'js/components/shared/v2/sidebar'
import Loading from 'js/components/shared/loading'
import Error from 'js/components/shared/loading/Error'
import { pluralize, titleize, genCommunityLink, genEventLink } from 'js/utils'

export const generateTitle = (community = {}) => (
  <Link to={`${genCommunityLink(community)}`}>
    {community.name}
  </Link>
)

export const generateDescription = (interest) => (
  `${interest || 'Generic'} community`
)

export const generateMeta = ({ no_of_followers }) => (
  [
    <span className="count">{no_of_followers}</span>,
    titleize(pluralize('follower', no_of_followers))
  ]
)

const CommunitiesSection = ({
   communities = {data}
}) => {
  const {loading, error, data = []} = communities
  return (
    <Sidebar title="Communities you may know">
      {loading && <Loading />}
      {error && <Error msg={communities.error} />}
      {communities.data && communities.data.map(({featured_image, ...community}) => {
          const title = generateTitle(community);
          const description = generateDescription(community.interest)
          const meta = generateMeta(community)
          const titleLink = genCommunityLink(community)
          const { no_of_followers, brand_color } = community
          const btn = community.following
                        ? {}
                        : {onClick: () => followCommunity(community), text: 'Follow'}
          return <Sidebar.Card key={community.id} {...{title, description, featured_image, btn,
                                                        meta, titleLink, brand_color, no_of_followers}} />
        }
      )}
    </Sidebar>
  )
}

export default CommunitiesSection