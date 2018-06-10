import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// internal
import SidebarCard from 'js/components/shared/sidebar-card'


const StyledEventsSection = styled.div`
`

const generateTitle = (event, communityId) => (
  <Link to={`/communities/${communityId}/events/${event.id}`}>
    {event.title}
  </Link>
)

const generateDescription = (community) => (
  <span>
    By <Link to={`/communities/${community.id}`}>
      {community.name}
    </Link>
  </span>
)

const generateMeta = (event) => {
  `${event.interested_persons} people Interested`
}


const EventsSection = ({ events }) => (
  <StyledEventsSection className="events-section">
    {events && events.map(({community, description: d, featured_image,...event}) => {
        const title = generateTitle(event, community.id);
        const description = generateDescription(community);
        const meta = generateMeta(event)
        return <SidebarCard {...{title, description, featured_image, meta}} />
      }
    )}
  </StyledEventsSection>
)

export default EventsSection