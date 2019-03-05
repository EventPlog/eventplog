import React from 'react'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

// internal
import Sidebar from 'js/components/shared/v2/sidebar'
import Loading from 'js/components/shared/loading'
import { pluralize, genCommunityLink, genEventLink, titleize } from 'js/utils'

export const generateTitle = (community) => (
  <Link to={genCommunityLink(community)}>
    {community.name}
  </Link>
)

export const generateDescription = (interests = []) => (
  interests && interests.length > 0 ? `Interested in ${interests.join(', ')}` : ''
)

export const generateMeta = ({ no_of_followers }) => (
  [
    <span className="count">{no_of_followers}</span>,
    titleize(pluralize('member', no_of_followers))
  ]
)

const styles = css`
  padding-bottom: 2rem;

  .see-more {
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
  }
`
const CommunitiesSection = ({
  title,
  communities = {data: [], meta: {}},
  followCommunity,
  children,
}) => {
  const { loading, error, data = []} = communities
  return (
    <Sidebar title={title || "Communities you may know"}>
      {loading && <Loading />}
      {error && <Loading.Error />}
      <div className="events-list">
      {data && data.map(({featured_image, ...community}) => {
          const title = generateTitle(community);
          const description = generateDescription(community.topic_interests)
          const meta = generateMeta(community)
          const titleLink = genCommunityLink(community)
          const { no_of_followers, brand_color } = community
          const btn = community.following
                        ? {}
                        : {onClick: () => {followCommunity(community)}, text: 'Follow'}
          return (
            <Sidebar.Card key={community.id} {...{title, description, featured_image, btn, meta, titleLink, no_of_followers, brand_color}} />
          )
        }
      )}
      </div>
      {children}
    </Sidebar>
  )
}

export default styled(CommunitiesSection)`${styles}`