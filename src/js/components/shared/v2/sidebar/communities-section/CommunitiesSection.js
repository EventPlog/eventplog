import React from 'react'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// internal
import Sidebar from 'js/components/shared/v2/sidebar'
import Loading from 'js/components/shared/loading'
import { pluralize, genCommunityLink, genEventLink } from 'js/utils'

export const generateTitle = (community) => (
  <Link to={genCommunityLink(community)}>
    {community.name}
  </Link>
)

export const generateDescription = (interests = []) => (
  interests && interests.length > 0 ? `Interested in ${interests.join(', ')}` : ''
)

export const generateMeta = (community) => (
  `${community.no_of_followers} ${pluralize('follower', community.no_of_followers)}`
)

const StyledSeeMore = styled.div`
  position: relative
  font-size: 1rem;
  padding-bottom: 1.2rem;
  text-align: center;
  color: ${props => props.theme.activeLink};

  span {
    padding-left: 8px;
    position: absolute;
    top: 2px;
  }
`
const CommunitiesSection = ({
  title,
  communities = {data: [], meta: {}},
  followCommunity,
  slug
}) => {
  const { loading, error, data = []} = communities
  return (
    <Sidebar title={title || "Communities you may know"}>
      {loading && <Loading />}
      {data && data.slice(0,4).map(({featured_image, ...community}) => {
          const title = generateTitle(community);
          const description = generateDescription(community.topic_interests)
          const meta = generateMeta(community)
          const titleLink = genCommunityLink(community)
          const no_of_followers = community.no_of_followers
          const btn = community.following
                        ? {}
                        : {onClick: () => {followCommunity(community)}, text: 'Follow'}
          return (
            <Sidebar.Card key={community.id} {...{title, description, featured_image, btn, meta, titleLink, no_of_followers}} />
          )
        }
      )}

      { data && data.length > 4 &&
          <Link to="">
            <StyledSeeMore className="see-more">
              See more communities <span><Icon name="angle down" /></span>
            </StyledSeeMore>
          </Link>
        } 
    </Sidebar>
  )
}

export default CommunitiesSection