import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { darken } from 'polished'

// internal
import ContentPanel from 'js/components/shared/v2/content-panel'
import Loading from 'js/components/shared/loading'
import Error from 'js/components/shared/loading/Error'
import Button from 'js/components/shared/button'
import Pagination from 'js/components/shared/pagination'
import {
  pluralize,
  genCommunityLink,
  genEventLink,
  genCategoryLink
} from 'js/utils'

export const generateTitle = (event = {}, community = {}) => {
  return (
    <Link to={genEventLink(event, community)}>
      {event.title}
    </Link>
  )
}

export const generateDescription = (community = {}, event) => (
  <span>
    <div>
      By <Link to={genCommunityLink(community)}>
          {community.name}
        </Link>
      {event && <p>{event.goals}</p>}
    </div>
  </span>
)

export const generateMeta = (event = {}) => ([
  <ul key={`date${event.id}`}>
    <li>
      <Icon name="calendar outline" /> {event.date}
    </li>
    <li>
      <Icon name="clock" /> {event.time}
    </li>
    {event.venue || event.location &&
      <li>
        <Icon name="map marker alternate"/> {event.location ? event.location.address : event.venue}
      </li>
    }
  </ul>,
  <ul key={`rating${event.id}`}>
    <li>
      {event.interested_persons} {pluralize('person', event.interested_persons)} interested
    </li>
    {(parseInt(event.no_of_reviews) > 0) &&
      <li>
        {event.no_of_reviews} {pluralize('person',event.no_of_reviews)} rated {event.average_ratings}/10 on average
      </li>
    }
  </ul>,
  <ul>
    {event.category &&
      <Link to={genCategoryLink(event.category)}>
        <li className="event-category">Category: {event.category.name}</li>
      </Link>
    }
  </ul>
])

export const generateCTA = (handleClick) => (
  <Button onClick={handleClick}>
    Interested
  </Button>
)

const styles = css`
  .event-category {
    background: ${props => darken(0.2, props.theme.yellow)};
    padding: 0.2rem 0.4rem;
    color: var(--activeLink);
    font-weight: 800;
  }
`

export const EventsSection = ({
  title,
  events = {},
  attendEvent,
  getEvents,
  className,
}) => {
  const {loading, error, data = [], meta = {}} = events;
  const shouldDisplayData = (!loading && !error && data);
  return (
    <ContentPanel className={className} title={title}>
      {loading && <Loading />}
      {error && <Loading.Error msg={events.error} />}
      {shouldDisplayData && data.map(({featured_image, ...event}) => {
          const community = event.community || {}
          const title = generateTitle(event, community)
          const description = generateDescription(community, event)
          const meta = generateMeta(event)
          const btn = {onClick: () => attendEvent(event), text: 'interested'}
          const titleLink = genEventLink(event, community)

          return (
            <ContentPanel.Card
              key={event.id}
              {...{title, description, featured_image, meta, btn, titleLink}}
              showButton={!event.is_attending} />
          )
        }
      )}

      {shouldDisplayData && data.length < 1 && <p>No events to display right now ...</p>}

    </ContentPanel>
  )
}

export default styled(EventsSection)`${ styles }`