import React from 'react'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { lighten } from 'polished'

//========= INTERNAL ===========
import { media, maxMedia } from 'js/styles/mixins'
import { genEventLink, genCommunityLink, resizeImage, pluralize } from 'js/utils'



import Icons from 'js/components/shared/cta-icons'

const StyledContentPanelCardLarge = styled.section`
  --container-height: 415px;
  min-height: var(--container-height);
  flex: 40%;
  border-radius: 8px;
  background-color: ${props => props.theme.activeLink};
  background-image: ${props => `linear-gradient(rgba(37, 33, 56, 0.1), rgba(55, 49, 84, 0.4)), url(${props.image})`};
  background-repeat-x: repeat;
  background-size: contain;
  margin: 0.5rem;
  position: relative;
  color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;

  ${
    maxMedia.tablet`
      padding: 0 1.5rem;
      margin: 0.5rem 0;
      flex: 100%;
    `
  }
  
  ${
    media.phone`
      --container-height: 320px;
      padding: 0 1.5rem;
    `
  }

  .event-title {
    font-size: 1.7rem;
    text-align: center;
    text-shadow: 0 2px 8px ${props => props.theme.black};
    flex: 1;
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    ${
      media.phone`
        padding-top: calc(var(--container-height) / 2 - 30px);
      `
    }

    h4 {
      color: ${props => props.theme.white};
    }
    
    small {
      color: ${props => props.theme.white};
      font-size: 80%;
      margin: 1rem 0;

      
      a {
        color: ${props => props.theme.white};
        font-weight: 800;
      }
    }
  }

  .interested-persons {
    padding-top: 1rem;
    padding-left: 1.5rem;
    display: flex;
    border-bottom: 2px solid ${props => lighten(0.3, props.theme.darkGray)};
    padding-bottom: 1rem;

    ${
      media.phone`
        padding-left: 0;
        padding-top: 4.5rem;
      `
    }

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

    ${
      media.phone`
      padding: 1rem 0;
      `
    }

    span {
      font-size: 12px;
      padding-top: 2px;
    }

    .date {
      position: absolute;
      right: 1.5rem;

      ${
        media.phone`
          position: relative;
          right: 0;
        `
      }
    }
  }

  .cta-holder {
    position: absolute;
    top: 20px;
    right: 12px;
    display: flex;
    justify-content: flex-end;  

    ${
      media.phone`
        left: 1rem;
        justify-content: flex-start;
      `
    }
  }
  
  .overlay.title-link {
    background: transparent;
  }
`

const getAddress = (event) => (
  event.location && event.location.address
    ? event.location.address : event.venue
)

const ContentPanelCardLarge = ({ event = {} }) => {
  const eventAddress = getAddress(event)
  return (
    <StyledContentPanelCardLarge className="main-body" image={resizeImage(event.featured_image, 'medium')}>
      <Link className="overlay title-link" to={genEventLink(event)} />

      <div class="cta-holder">
        <Icons event={event} />
      </div>

      <div className="event-title">
        <Link to={genEventLink(event)}>
          <h4>{event.title}</h4>
        </Link>
        {event.community &&
          <small>
            By <Link to={genCommunityLink(event.community)}>{event.community.name}</Link>
          </small>
        }
      </div>


      <div className="interested-persons">
        <Icon name="eye" className="far eye-icon" />
        <span>
          {event.interested_persons < 10 ? '' : `${event.interested_persons} ${pluralize('person', event.interested_persons)} registered. `}{event.no_of_views} views.
        </span>
      </div>

      <div className="event-time">
        <Icon name="map marker alternate" className="far eye-icon" />

        <span>{event.start_date.slice(0,3)} {event.display_start_time}, {eventAddress && eventAddress.substr(0, 40) + '...'}</span>
        <span className="date">{event.start_date.split(",")[1].slice(0, -5)}</span>
      </div>
    </StyledContentPanelCardLarge>
  )
}

export default ContentPanelCardLarge
