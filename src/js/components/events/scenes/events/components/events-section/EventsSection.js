import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { darken } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

// internal
import ContentPanel from 'js/components/shared/v2/content-panel'
import ContentPanelCardLarge from 'js/components/shared/v2/content-panel/ContentPanelCardLarge'
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
    <Link to="#">
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

  .see-more {
    position: relative
    font-size: 1.2rem;
    padding-top: 1.2rem;
    color: ${props => props.theme.activeLink};

    span {
      padding-left: 12px;
      position: absolute;
      top: 19px;
    }
  }
`

const ContentPanelCardMedium = styled(ContentPanel.Card)`
  flex: 2.5;
  // max-width: max-content;
  max-width: 32rem;
`;

export const EventsSection = ({
  title,
  events = {},
  attendEvent,
  getEvents,
  className,
}) => {
  const {loading, error, data = [], meta = {}} = events;
  const shouldDisplayData = (!loading && !error && data);
  let first10Events;

  if (shouldDisplayData) {
    first10Events = data.slice(0, 10)
  }
  
  return (
    <ContentPanel className={className} title={title}>
      {loading && <Loading />}
      {error && <Loading.Error msg={events.error} />}
      <div className="container">
        
        {shouldDisplayData && first10Events.length >= 1 && 
          <ContentPanelCardLarge event={first10Events[0]} />
        } 

        {shouldDisplayData && first10Events.length >= 2 && <ContentPanelCardMedium event={{...first10Events[1]}} />}

        {shouldDisplayData && first10Events.slice(2,5).map((event) => {
          return (
            <ContentPanel.Card event={event} /> 
          )
        })}

        {shouldDisplayData && first10Events.length >= 6 && <ContentPanelCardMedium event={first10Events[5]} />}
        {shouldDisplayData && first10Events.length >= 7 && <ContentPanelCardLarge event={first10Events[6]} />} 

        {shouldDisplayData && first10Events.length > 7 && first10Events.slice(7,9).map((event) => {
          return (
            <ContentPanel.Card event={event} /> 
          )
        })}

        { shouldDisplayData && first10Events.length > 10 && 
          <p className="see-more">
            See more events <span><FontAwesomeIcon className="fas" icon={faAngleDown}/></span>
          </p>
        } 
      </div>
      {shouldDisplayData && data.length < 1 && <p>No events to display right now ...</p>}
      
    </ContentPanel>
  )
}

export default styled(EventsSection)`${ styles }`
