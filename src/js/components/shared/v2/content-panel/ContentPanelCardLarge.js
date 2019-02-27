import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faEye
} from '@fortawesome/free-solid-svg-icons';
import { lighten } from 'polished'

//========= INTERNAL ===========
import { media, maxMedia } from 'js/styles/mixins'
import { genEventLink } from 'js/utils'



import Icons from 'js/components/shared/cta-icons'

const StyledContentPanelCardLarge = styled.section`
  --container-height: 415px;
  height: var(--container-height);
  width: 35rem;
  margin-right: 31px;
  border-radius: 8px;
  background-color: ${props => props.theme.activeLink};
  background-image: ${props => `linear-gradient(rgba(37, 33, 56, 0.7), rgba(55, 49, 84, 0.7)), url(${props.image})`};
  background-size: cover;
  margin: 1rem 1.3rem 0 0;
  position: relative;
  color: ${props => props.theme.white};

  ${
    media.tablet`
      padding: 0 2rem;
    `
  }
  
  ${
    media.phone`
      padding: 0 2rem;
    `
  }

  .event-title {
    font-size: 1.7rem;
    text-align: center;
    padding-top: calc(var(--container-height) / 2 - 19px);

    h4 {
      color: ${props => props.theme.white};
    }
  }

  .interested-persons {
    padding-top: 7rem;
    padding-left: 1.5rem;
    display: flex;
    border-bottom: 2px solid ${props => lighten(0.3, props.theme.darkGray)};
    padding-bottom: 1rem;

    span {
      padding-top: 2px;
    }
  }

  .eye-icon {
    margin-right: 12px;
    font-size: 1.5rem;
  }

  .event-time {
    display: flex;
    padding: 1.5rem;

    span {
      font-size: 12px;
      padding-top: 2px;
    }

    .date {
      position: absolute;
      right: 1.5rem;
    }
  }
`

const getAddress = (event) => (
  event.location && event.location.address
    ? event.location.address : event.venue
)

const ContentPanelCardLarge = ({ event }) => {
  const eventAddress = getAddress(event)
  return (
  <StyledContentPanelCardLarge className="main-body" image={event.featured_image}>
    <Icons bigCard />

    <div className="event-title">
      <Link to={genEventLink(event)}>
        <h4>{event.title}</h4>
      </Link>
    </div>
    

    <div className="interested-persons">
      <FontAwesomeIcon icon={faEye} className="fas eye-icon" />
      <span>{event.interested_persons} Interested</span>
    </div>

    <div className="event-time">
      <FontAwesomeIcon icon={faClock} className="far eye-icon" />
      <span>{event.start_date.slice(0,3)} {event.display_start_time}, {eventAddress && eventAddress.substr(0, 40) + '...'}</span>
      <span className="date">{event.start_date.split(",")[1].slice(0, -5)}</span>
    </div>
  </StyledContentPanelCardLarge>
  )
}

export default ContentPanelCardLarge
