import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { darken } from 'polished'

// internal
import ContentPanel from 'js/components/shared/content-panel'
import Loading from 'js/components/shared/loading'
import Error from 'js/components/shared/loading/Error'
import Button from 'js/components/shared/button'
import Pagination from 'js/components/shared/pagination'
import RegistrationButton from 'js/components/shared/event-registration-button'
import { media } from 'js/styles/mixins'
import {
  pluralize,
  genCommunityLink,
  genEventLink,
  genCategoryLink
} from 'js/utils'


// const Sponsorships = createLoader(() =>
//   import('js/components/sponsorships/scenes/sponsorship-offer' /* webpackChunkName: "Resources" */), 'Sponsors')

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
    {(event.venue || event.location) &&
      <li>
        <Icon name="map marker alternate"/> {event.location && event.location.address ? event.location.address : event.venue}
      </li>
    }
  </ul>,
  <ul key={`rating${event.id}`}>
    <li>
      {event.interested_persons < 10 ? '' : `${event.interested_persons} ${pluralize('person', event.interested_persons)} registered. `}{event.no_of_views} views.
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

export const generateTopBtn = (event) => (
  event.is_past
    ? event.has_resources
      ? <Button.Link className="img-btn" to={`${genEventLink(event)}/resources`}>
        Slides/Resources
      </Button.Link>
      : ''
    : [
        <RegistrationButton event={event} />,
        event.needs_sponsorship
          ? <Button.Link className="img-btn" to={`${genEventLink(event)}/sponsors/new`}>
              Sponsor's Deck
            </Button.Link>
          : ''
      ]
)

const styles = css`
  background-color: transparent;
  box-shadow: none;
  flex: 5;
  
  .img-holder {
    height: 300px;
    border-radius: 10px;
    
    ${
      media.phone`
        height: 200px;
      `
    }
  }
  
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
  const shouldDisplayData = (data && (data.length > 0));
  return (
    <ContentPanel className={className} title={title}>
      {loading && !shouldDisplayData &&  <Loading />}
      {error && !shouldDisplayData && <Loading.Error msg={error} />}
      {shouldDisplayData && data.map(({featured_image, ...event}) => {
          const community = event.community || {}
          const title = generateTitle(event, community)
          const description = generateDescription(community, event)
          const meta = generateMeta(event)
          const topBtn = generateTopBtn(event)
          const titleLink = genEventLink(event, community)

          return (
            <ContentPanel.Card
              key={event.id}
              {...{title, description, featured_image, meta, topBtn, titleLink}}
              showButton={!event.is_attending} />
          )
        }
      )}

      {!loading && !error && data && data.length < 1 && <p>No events to display right now ...</p>}

      {
        meta && meta.total_pages && (data.length > 0 || meta.current_page > 1) &&
          <Pagination.ShowMoreButton totalPages={meta.total_pages}
                                     activePage={meta.current_page}
                                     className="show-more-btn"
                                     loading={loading}
                                     error={error}
                                     onPageChange={getEvents} />

      }
    </ContentPanel>
  )
}

export default styled(EventsSection)`${ styles }`