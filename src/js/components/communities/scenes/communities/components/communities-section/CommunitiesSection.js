import React from 'react'
import { Link } from 'react-router-dom'


// internal
import ContentPanel from 'js/components/shared/content-panel'
import Loading from 'js/components/shared/loading'
import Error from 'js/components/shared/loading/Error'
import Pagination from 'js/components/shared/pagination'

export const generateTitle = (community = {}) => (
  <Link to={`/communities/${community.id}`}>
    {community.name}
  </Link>
)

export const generateMeta = (community = {}) => (
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
  communities = {data: [], meta: {}},
  getCommunities,
  followCommunity,
}) => {

  const {loading, error, data = [], meta = {}} = communities;

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error msg={communities.error} />
  }

  return (
    <ContentPanel title={title}>
      {data && data.map(({description, featured_image, ...community}) => {
          const title = generateTitle(community)
          const meta = generateMeta(community)
          return (
            <Link to={`/communities/${community.id}`}>
              <ContentPanel.Card
                key={community.id}
                {...{title, description, featured_image, meta}}
                showButton={showCTA && !community.joined}
                btn={{onClick: followCommunity, text: 'Follow'}} />
            </Link>
          )
        }
      )}
      {data && data.length < 1 && <p>This hall for communities seem empty ...</p>}
      {
        meta && meta.total_pages && data.length > 0
          ? <Pagination totalPages={meta.total_pages}
                        activePage={meta.current_page}
                        onPageChange={getCommunities} />
          : ''
      }
    </ContentPanel>
  )
}

export default CommunitySection