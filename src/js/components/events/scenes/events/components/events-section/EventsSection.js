import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// internal
import { media } from 'js/styles/mixins'
import MainContentCard from 'js/components/shared/main-content-card'


const StyledEventSection = styled.div`
  > ul {
    margin-left: 2rem;
    
    ${
      media.tablet`
        margin: 0;
      `
    }
        
    ${
      media.phone`
        margin: 0;
      `
    }
  }
  
`

const generateTitle = (event) => (
  <Link to={`/events/${event.id}`}>
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

const generateMeta = (event) => ([
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

const EventSection = ({ title, events }) => (
  <StyledEventSection className="events-section">
    <h5 className="header">{ title }</h5>
    <ul>
      {events && events.map(({featured_image, ...event}) => {
        const title = generateTitle(event)
        const description = generateDescription(event.community)
        const meta = generateMeta(event)
         return (
           <MainContentCard
              {...{title, description, featured_image, meta}}
              showButton={!event.interested}
              btnText="Join" />
          )
        }
      )}
    </ul>
  </StyledEventSection>
)

export default EventSection