import React from 'react'
import { Link } from 'react-router-dom'

// internal
import Sidebar from 'js/components/shared/sidebar'
import Loading from 'js/components/shared/loading'

export const generateTitle = (event = {}) => (
  <Link to={`/communities/${event.community_id}/events/${event.id}`}>
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


const EventsSection = ({ events }) => {
  const {loading, error, data } = events
  return (
    <Sidebar title="Events you may like">
      {loading && <Loading />}
      {error && <Loading.Error msg={events.error} />}
      {(!loading && !error && data) && data.map(({community, description: d, featured_image, ...event}) => {
          const title = generateTitle(event);
          const description = community ? generateDescription(community) : '';
          const meta = generateMeta(event)
          return <Sidebar.Card
            key={event.id}
            {...{title, description, featured_image, meta}} />
        }
      )}
    </Sidebar>
  )
}

export default EventsSection