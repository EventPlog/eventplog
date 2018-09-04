import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// internal
import ContentPanel from 'js/components/shared/content-panel'
import Loading from 'js/components/shared/loading'
import Error from 'js/components/shared/loading/Error'
import Button from 'js/components/shared/button'
import Pagination from 'js/components/shared/pagination'
import { pluralize } from 'js/utils'

export const generateTitle = (event = {}) => {
  const community = event.community || {}
  return (
    <Link to={`/communities/${event.community_id}/events/${event.id}`}>
      {event.title}
    </Link>
  )
}

export const generateDescription = (description) => (
  <span>
    {description}
  </span>
)

export const generateMeta = (resource) => ([
  <ul key={`date${resource.id}`}>
    <li>
      By {resource.owner.display_name}
    </li>
    <li>
      {resource.publish_time}
    </li>
  </ul>,
  <ul key={`interest${resource.id}`}>
    <li>
      {resource.no_of_views} {pluralize('person', resource.no_of_views)} viewed this,&nbsp;
      {resource.no_of_reviews} {pluralize('person', resource.no_of_reviews)} rated it {resource.rating} / 10
    </li>
  </ul>
])

export const generateCTA = (handleClick) => (
  <Button onClick={handleClick}>
    Interested
  </Button>
)

const EventResource = ({
  title,
  resources,
  attendEvent,
  getResources,
}) => {
  const {loading, error, data = [], meta = {}} = resources;
  const shouldDisplayData = (!loading && !error && data);
  return (
    <ContentPanel title={title}>
      {loading && <Loading />}
      {error && <Loading.Error msg={events.error} />}
      {shouldDisplayData && data.map(({featured_image, ...resource}) => {
          const title = generateTitle(resource)
          const description = generateDescription(resource.description)
          const meta = generateMeta(resource)
          const btn = {onClick: () => attendEvent(resource), text: "I've read this"}
          const titleLink = resource.link;

          return (
            <ContentPanel.Card
              key={resource.id}
              {...{title, description, featured_image, meta, btn, titleLink}}
              showButton={true} />
          )
        }
      )}
      {shouldDisplayData && data.length < 1 && <p>No events to display today ...</p>}
      {
        meta && meta.total_pages && (data.length > 0 || meta.current_page > 1)
          ? <Pagination totalPages={meta.total_pages}
                        activePage={meta.current_page}
                        onPageChange={getResources} />
          : ''
      }
    </ContentPanel>
  )
}

export default EventResource