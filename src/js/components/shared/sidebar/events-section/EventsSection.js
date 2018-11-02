import React from 'react'
import { Link } from 'react-router-dom'

// internal
import Sidebar from 'js/components/shared/sidebar'
import Loading from 'js/components/shared/loading'
import { pluralize, genCommunityLink, genEventLink } from 'js/utils'

export const generateTitle = (event = {}, community = {}) => (
  <Link to={genEventLink(event, community)}>
    {event.title}
  </Link>
)

export const generateDescription = (community = {}) => (
  <span>
    By <Link to={genCommunityLink(community)}>
      {community.name}
    </Link>
  </span>
)

export const generateMeta = (event) => (
  `${event.interested_persons} ${pluralize('person', event.interested_persons)} interested`
)


const EventsSection = ({
  title,
  events = {data: [], meta: {}},
  attendEvent
}) => {
  const {loading, error, data = [] } = events
  return (
    <Sidebar title={title || "Events you may like"}>
      {loading && <Loading />}
      {error && <Loading.Error msg={events.error} />}
      {(!loading && !error && data) && data.map(({community, description: d, featured_image, ...event}) => {
          const title = generateTitle(event, community);
          const description = community ? generateDescription(community) : '';
          const meta = generateMeta(event)
          const titleLink = genEventLink(event, community)
          const btn = event.is_attending
                      ? {}
                      : {onClick: () => attendEvent(event), text: 'Interested'}
          return (
            <Sidebar.Card key={event.id}
                           {...{title, description, titleLink,
                           featured_image, meta, btn}} />
          )
        }
      )}
    </Sidebar>
  )
}

export default EventsSection