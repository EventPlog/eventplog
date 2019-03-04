import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { darken } from 'polished'

// internal
import ContentPanel from 'js/components/shared/v2/content-panel'
import ContentPanelCardLarge from 'js/components/shared/v2/content-panel/ContentPanelCardLarge'
import Loading from 'js/components/shared/loading'
import Error from 'js/components/shared/loading/Error'
import Button from 'js/components/shared/button'
import Pagination from 'js/components/shared/pagination'
import { media, maxMedia } from 'js/styles/mixins'
import {
  pluralize,
  genCommunityLink,
  genEventLink,
  genCategoryLink
} from 'js/utils'

export const generateTitle = (event = {}, community = {}) => {
  return (
    <Link to={genEventLink(event)}>
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

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  h4.content-header {
    margin-bottom: 1rem;

    ${
      maxMedia.tablet`
        margin-bottom: 1rem;
      `
    }
  }

  .see-more {
    position: relative
    font-size: 1.2rem;
    padding-top: 1.2rem;
    text-align: center;
    color: ${props => props.theme.activeLink};

    span {
      padding-left: 12px;
    }
  }
`

const ContentPanelCardMedium = styled(ContentPanel.Card)`
  flex: 2;

  ${
    maxMedia.tablet`
      flex: 100%;
    `
  }
  
`;

const getContentPanel = ({index, total, ...props}) => {
  switch(true) {
    case index == 0:
    case (index % 6) == 0:
    case index == (total - 1):
      return <ContentPanelCardLarge {...props} />
    
    case index == 1:
    case (index % 5) == 0:
      return <ContentPanelCardMedium {...props} />

    default:
      return <ContentPanel.Card {...props} />
  }
}

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
      {loading && !shouldDisplayData && <Loading />}
      {error && !shouldDisplayData && <Loading.Error msg={events.error} />}

      <div className="container"> 
        {shouldDisplayData &&
          data.map((event, index) => getContentPanel({event, index, total: data.length})) }
      </div>
      {
        meta && meta.total_pages && (data.length > 0 || meta.current_page > 1) &&
        <p className="see-more">
          <Pagination.ShowMoreButton totalPages={meta.total_pages}
                                     activePage={meta.current_page}
                                     className="show-more-btn"
                                     loading={loading}
                                     error={error}
                                     onPageChange={getEvents}>
            See more events <span><Icon name="angle down" /></span>
          </Pagination.ShowMoreButton>
        </p>
      }
      {shouldDisplayData && data.length < 1 && <p>No events to display right now ...</p>}

    </ContentPanel>
  )
}

export default styled(EventsSection)`${ styles }`
