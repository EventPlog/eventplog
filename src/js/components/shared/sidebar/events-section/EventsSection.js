import React from 'react'
import { Link } from 'react-router-dom'

// internal
import Sidebar from 'js/components/shared/sidebar'
import Loading from 'js/components/shared/loading'

export const generateTitle = (event, communityId) => (
  <Link to={`/communities/${communityId}/events/${event.id}`}>
    {event.title}
  </Link>
)

export const generateDescription = (community) => (
  <span>
    By <Link to={`/communities/${community.id}`}>
      {community.name}
    </Link>
  </span>
)

export const generateMeta = (event) => (
  `${event.interested_persons} people interested`
)


const EventsSection = ({
  title,
  events,
  attendEvent
}) => {
  const {loading, error } = events
  return (
    <Sidebar title={title || "Events you may like"}>
      {loading && <Loading />}
      {error && <Loading.Error msg={events.error} />}
      {(!loading && !error && events) && events.map(({community, description: d, featured_image, ...event}) => {
          const title = generateTitle(event, community.id);
          const description = generateDescription(community);
          const meta = generateMeta(event)
          const btn = event.is_attending
                      ? {}
                      : {onClick: () => attendEvent(event), text: 'Interested'}
          return <Sidebar.Card
            key={event.id}
            {...{title, description, featured_image, meta, btn}} />
        }
      )}
    </Sidebar>
  )
}

export default EventsSection