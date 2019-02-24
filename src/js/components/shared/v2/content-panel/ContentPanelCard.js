import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

// internal
import eventImage from '../../../../../img/tmn_bar_code.png'
import { resizeImage } from 'js/utils'
import Button from 'js/components/shared/button'
import { media, maxMedia } from 'js/styles/mixins'
import colors from '../../../../styles/theme/colors'
import defaults from 'js/styles/theme/variables'
import Icons from 'js/components/shared/cta-icons';


const StyledMainContentCard = styled.div`
  --img-height: 200px;
  --activeLink: ${defaults.activeLink};
  border-radius: 0.5rem;
  width: 20vw;
  max-width: 294px;
  background-color: ${colors.white};
  position: relative;
  margin: 0 2rem 2rem 0;

  ${
    media.tablet`
      width: calc(50vw - 3rem);
      margin: 1rem 0;
    `
  }
  
  ${
    media.phone`
      width: auto;
      margin: 1rem 0;
    `
  }
  

  .background {
    background-size: cover;
    height: var(--img-height);
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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
    ${
      media.phone`
        white-space: pre-wrap;
      `
    }
  }
`

const MainContentCard = ({
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
    <div className="background" style={{backgroundImage:  `url(${resizeImage(eventImage, 'thumbnail')})`}} />

    <Icons />

    <div className="details">
      <a href="#">
        <h4>Event Title</h4>
      </a>

      <div className="event-desc">
        <p >
          {'Plenty Plenty event description Plenty Plenty event description Plenty Plenty event description Plenty Plenty event'.substr(0, 125) + '...'}
        </p>
        <small>2 interested</small>
        </div>


      <div>
        <p className="event-date"><span>Saturday, May 18 2019</span></p>
        <div className="event-time">
          <FontAwesomeIcon icon={faMapMarkerAlt}/>&nbsp;
          Palms shopping mall, Ilorin
        </div>
      </div>
    </div>
  </StyledMainContentCard>
)

export default MainContentCard
