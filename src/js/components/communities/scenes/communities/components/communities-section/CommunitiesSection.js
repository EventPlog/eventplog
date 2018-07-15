import React from 'react'
import { Link } from 'react-router-dom'


// internal
import ContentPanel from 'js/components/shared/content-panel'
import Loading from 'js/components/shared/loading'
import Error from 'js/components/shared/loading/Error'

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
      <span className="meta-label">Interests</span>: {community.interests && community.interests.map(interest => <span className="hashtag">{interest}</span> )}
    </li>
  </ul>
)

const CommunitySection = ({
  title,
  showCTA = true,
  communities,
  followCommunity,
}) => {
  if (communities.loading) {
    return <Loading />
  }

  if (communities.error) {
    return <Error msg={communities.error} />
  }

  return (
    <ContentPanel title={title}>
      {communities && communities.map(({description, featured_image, ...community}) => {
          const title = generateTitle(community)
          const meta = generateMeta(community)
          return (
            <ContentPanel.Card
              key={community.id}
              {...{title, description, featured_image, meta}}
              showButton={showCTA && !community.joined}
              btn={{onClick: followCommunity, text: 'Follow'}} />
          )
        }
      )}
    </ContentPanel>
  )
}

export default CommunitySection