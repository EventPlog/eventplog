import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// internal
import ContentPanel from 'js/components/shared/content-panel'

export const generateTitle = (event) => (
  <Link to={`/communities/${event.community.id}/events/${event.id}`}>
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

export const generateMeta = (event) => ([
  <ul>
    <li>
      {event.start_date}
    </li>
    <li>
      {event.start_time}
    </li>
    <li>
      {event.venue}
    </li>
  </ul>,
  <ul>
    <li>
      {event.interested_persons} people interested
    </li>
  </ul>
])

const EventsSection = ({ title, events }) => (
  <ContentPanel title={title}>
    {events && events.map(({featured_image, ...event}) => {
        const title = generateTitle(event)
        const description = generateDescription(event.community)
        const meta = generateMeta(event)
        return (
          <ContentPanel.Card
            {...{title, description, featured_image, meta}}
            showButton={!event.interested}
            btnText="Interested" />
        )
      }
    )}
  </ContentPanel>
)

export default EventsSection