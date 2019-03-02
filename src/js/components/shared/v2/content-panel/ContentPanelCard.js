import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'

// internal
import { resizeImage, genEventLink } from 'js/utils'
import Button from 'js/components/shared/button'
import { media, maxMedia } from 'js/styles/mixins'
import colors from '../../../../styles/theme/colors'
import defaults from 'js/styles/theme/variables'
import Icons from 'js/components/shared/cta-icons';


const StyledMainContentCard = styled.div`
  --img-height: 200px;
  --activeLink: ${defaults.activeLink};
  border-radius: 0.5rem;
  flex: 1;
  background-color: ${colors.white};
  position: relative;
  margin: 0.5rem;
  min-width: 30%;

  ${
    maxMedia.tablet`
      flex: 100%;
      margin: 0.5rem 0;
    `
  }

  .background {
    background-size: cover;
    height: var(--img-height);
    border-radius: 0.5rem 0.5rem 0 0;
  }

  a, a:hover {
    color: var(--activeLink);
  }

  .icon-seperator {
    width: 6px;
  }

  .details {
    padding: 0 1rem 1rem;

    h4 {
      letter-spacing: 1.2px;
      margin-bottom: 0; 
      margin-top: 1.6rem;  
    } 

    h4, .next-event-title {
      
      ${
        media.phone`
          white-space: pre-wrap;
        `
      }
    }
  }

  .event-desc {
    color: ${lighten(0.3, colors.darkGray)};
    margin: 12.8px 0;

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    
      ${
        maxMedia.tablet`
          font-size: 0.8rem;
        `
      }
    }
  }

  .event-date {
    font-size: 1.4rem;
    margin-bottom: 0px;
    font-weight: 800;

    span {
      color: ${colors.darkGray};
    }
  }

  .event-time {
    font-size: 0.9rem;
    color: ${lighten(0.2, colors.darkGray)};
    
    ${
      media.phone`
        white-space: pre-wrap;
      `
    }
  }

  .cta-holder {
    position: absolute;
    top: calc(200px - 1.5rem);
    right: 0;
  
    display: flex;
    justify-content: flex-end;  
  }
`

const getAddress = (event) => (
  event.location && event.location.address
    ? event.location.address : event.venue
)

export const generateTitle = (event = {}, community = {}) => {
  return (
    <Link to={genEventLink(event)}>
      {event.title}
    </Link>
  )
}

const MainContentCard = ({
  event = {},
  title,
  description,
  featured_image,
  showButton = true,
  hideImage,
  btn = {},
  meta,
  titleLink,
  className,
}) => (
  <StyledMainContentCard className={`community-card ${className}`}>
    <div className="background" style={{backgroundImage:  `url(${resizeImage(event.featured_image || '', 'medium')})`}} />

    <div class="cta-holder">
      <Icons event={event} />
    </div>

    <div className="details">
      <h4>{generateTitle(event)}</h4>

      <div className="event-desc">
        <p>{event.goals || event.description}</p>
        <small>{event.interested_persons} Interested</small>
      </div>

      <div>
        <p className="event-date">
          <span>
            {event.start_date}
          </span>
        </p>
        <div className="event-time">
          <Icon name="map marker alternate" />&nbsp;
          {getAddress(event)}
        </div>
      </div>
    </div>
  </StyledMainContentCard>
)

export default MainContentCard
