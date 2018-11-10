import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// internal
import ContentPanel from 'js/components/shared/content-panel'
import Loading from 'js/components/shared/loading'
import Error from 'js/components/shared/loading/Error'
import Button from 'js/components/shared/button'
import Pagination from 'js/components/shared/pagination'
import { pluralize, genCommunityLink, genEventLink } from 'js/utils'

export const generateTitle = (event = {}, community = {}) => {
  return (
    <Link to={genEventLink(event, community)}>
      {event.title}
    </Link>
  )
}

export const generateDescription = (community = {}) => (
  <span>
    By <Link to={genCommunityLink(community)}>
      {community.name}
    </Link>
  </span>
)

export const generateMeta = (event = {}) => ([
  <ul key={`date${event.id}`}>
    <li>
      {event.date}
    </li>
    <li>
      {event.time}
    </li>
    <li>
      {event.venue}
    </li>
  </ul>,
  <ul key={`interest${event.id}`}>
    <li>
      {event.interested_persons} {pluralize('person', event.interested_persons)} interested
    </li>
  </ul>,
  <ul key={`rating${event.id}`}>
    {(parseInt(event.no_of_reviews) > 0) &&
      <li>
        {event.no_of_reviews} {pluralize('person',event.no_of_reviews)} rated {event.average_ratings}/10 on average
      </li>
    }
  </ul>
])

export const generateCTA = (handleClick) => (
  <Button onClick={handleClick}>
    Interested
  </Button>
)

const EventsSection = ({
  title,
  events = {},
  attendEvent,
  getEvents,
}) => {
  const {loading, error, data = [], meta = {}} = events;
  const shouldDisplayData = (!loading && !error && data);
  return (
    <ContentPanel title={title}>
      {loading && <Loading />}
      {error && <Loading.Error msg={events.error} />}
      {shouldDisplayData && data.map(({featured_image, ...event}) => {
          const community = event.community || {}
          const title = generateTitle(event, community)
          const description = generateDescription(community)
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

      {
        meta && meta.total_pages && (data.length > 0 || meta.current_page > 1)
          ? <Pagination totalPages={meta.total_pages}
                        activePage={meta.current_page}
                        per_page={meta.per_page}
                        onPageChange={getEvents} />
          : ''
      }
    </ContentPanel>
  )
}

export default EventsSection