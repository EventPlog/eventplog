import React from 'react'
import { Link } from 'react-router-dom'

// internal
import Sidebar from 'js/components/shared/sidebar'

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


const EventsSection = ({ events }) => (
  <Sidebar title="Events you may like">
    {events && events.map(({community, description: d, featured_image,...event}) => {
        const title = generateTitle(event, community.id);
        const description = generateDescription(community);
        const meta = generateMeta(event)
        return <Sidebar.Card
                  key={event.id}
                  {...{title, description, featured_image, meta}} />
      }
    )}
  </Sidebar>
)

export default EventsSection