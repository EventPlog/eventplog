import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import styled, { css } from 'styled-components'
import moment from 'moment'
import { lighten, adjustHue } from 'polished'

// internal
import { media } from 'js/styles/mixins'
import Button from 'js/components/shared/button'
import ContentSection from 'js/components/shared/content-section'
import ContentEditable from 'js/components/shared/content-editable'
import { validDate, pluralize, genEventLink } from 'js/utils'
import ImageUploader from 'js/components/shared/image-uploader'

const eventBannerStyles = css`
  min-height: 400px;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem;
  padding-bottom: 4rem; 
  margin: 0;
  background-size: cover;

  ${
    media.phone`
      flex-direction: column;
    `
  } 
  
  ${
    media.desktop`
      min-height: 600px;
    `
  }
  
  .overlay {
    opacity: 0.3;
  }
  
  > *:not(.overlay) {
    z-index: 1;
    position: relative;
  }
  
  .content {
    color: white;
    text-shadow: 0px 2px 4px #000;
    flex: 1;
    display: flex;
    flex-direction: column; 
    flex-direction: row;
    align-items: flex-end; 
    
    ${
      media.phone`
        width: 100%;
      `
    }
    
    .title {
      font-size: 3rem;
      font-weight: 500;
      margin-top: 4rem;
      line-height: initial;
      color: white; 
    
      ${
        media.desktop`
          font-size: 5rem;
        `
      }
    }
    
    .meta {
      letter-spacing: 0.6px;
      font-weight: 500;
      font-size: 1.2rem;
      display: flex;
      color: ${props => lighten(0.1, props.theme.black)};
      text-shadow: none;
      
      ${
        media.desktop`
          letter-spacing: 0.6px;
          line-height: 2rem;
        `
      }
    }
    
    ul {
      background: white;
      padding: 1rem;
    }
    
    .meta > ul > li:not(:last-child) {
      margin-right: 2rem;
      margin-bottom: 1rem;
    }
  }
  
  .cta-btns {
    display: flex;
    flex-direction: column;
    
    ${
      media.phone`
        align-self: flex-start;
        width: 100%;
      `
    }
  }
  
  .cta {
    background: #fff;
    border: #fff;
    box-shadow: 1px 2px 4px #444;
    margin: 0.5rem 0; 
    letter-spacing: 0.15rem;
    
    &:hover {
      background: var(--activeLink);
    }
    
    &.large {
      font-size: 2rem;
      background: ${props => props.theme.green};
      color: white;
      padding: 2rem;
      
      &:hover {
        background: ${props => lighten(0.3, props.theme.green)};
        color: var(--activeLink);
      }
    }
    
    &.inverted {
      background: white;
      color: ${props => props.theme.green};
    }
    
    ${
      media.phone`
        align-self: flex-start;
        width: 100%
      `
    }
    
    &.sponsor {
      background: ${props => lighten(0.04, props.theme.yellow)};
      color: ${props => lighten(-0.4, props.theme.yellow)};
      
      &:hover {
        background: ${props => lighten(0.3, props.theme.yellow)};
        color: ${props => lighten(-0.4, props.theme.yellow)} !important;
      }
    }
  }
  
  .editor-active {
    max-width: 400px;
    background: #fff;
    text-shadow: none;
  }
  
  .editor-active {
    flex: 1;
  }
  
  .react-calendar {
    font-size: 0.8rem;
  }
  
  .quick-menu-holder {
    background: rgba(0,0,0,0.5);
    width: 100%;
    position: absolute;
    z-index: 100;
    bottom: 0;
    left: 0
    
    ${
      media.phone`
        margin: 0;
      `
    }
  }
  
  .ui.fluid.item.menu {
    margin: 0;
    background-color: transparent;
    border-radius: 0;
    opacity: 0.9;
    
    a {
      color: ${props => props.theme.gray};
      
      &:hover {
        color: var(--activeLink);
      }
    }
  }
  
  .upload-btn-controls {
    position: absolute;
    top: 4rem;
    
    input, button {
      margin-right: 1rem;
      color: white;
      border: 1px solid white;
      padding: 1rem;
      font-size: 2rem;
    }
    
    i {
      color: white;
      font-size: rem;
    }
    
    .save-btn:not(:hover) {
      background: ${props => props.theme.green};
    }
  }
  
  .map-link {
    color: inherit;
    text-decoration: underline;
  }
  
  .fb-blue.item {
    background-color: ${props => lighten(-0.2, props.theme.blue)};
  }
  
  .twitter-blue.item {
    background-color: ${props => props.theme.blue};
  }
  
  .whatsapp-green.item {
    background-color: ${props => props.theme.green};
  }
`


const EventBanner = ({
  id,
  slug,
  title,
  featured_image,
  interested_persons,
  link,
  venue,
  description = '',
  start_time,
  location,
  hashtags,
  show_feedback_form,
  community = {},
  handleChange,
  handleSubmit,
  attendEvent,
  organizer_role,
  is_attending,
  is_stakeholder,
  is_owner,
  visibility_status,
  no_of_views,
  className,
  toggleVisibilityStatus,
  eventLink,
  imagePlaceholderRef,
}) => {
  const isPrivate = visibility_status == 'private_event'

  const eventDue = (new Date(start_time)) <= (new Date())
  const eventUrl = genEventLink({id, slug}, community)
  const encodedPageLink = encodeURIComponent(window.location.href)
  const shownHashTags = `${hashtags ? hashtags + ',' : ''}eventplog`
  const encodedDescription = encodeURIComponent((description || '').substr(140) + '... @eventplog ' + window.location.href)

  return (
    <ContentSection.FullRow className={`banner img-bg ${className}`} style={{
          backgroundImage: `url(${featured_image || '/login-bg.jpg'})`
        }}>
      <div className="overlay" />

      {is_stakeholder &&
        <span className="upload-btn-controls">
                <ImageUploader setImage={(image) => handleChange('featured_image', image)}
                               currentImage={featured_image}
                               persistImage={handleSubmit}
                               imagePlaceholderRef={imagePlaceholderRef} />
        </span>
      }

      <div className="quick-menu-holder">
        <Menu fluid widths={3}>
          <Menu.Item name='Share on FB' className="fb-blue">
            <a href={`https://web.facebook.com/sharer/sharer.php?u=${encodedPageLink}`}
               target="_blank">
              Share on <Icon name="facebook" />
            </a>
          </Menu.Item>
          <Menu.Item name='Share on Twitter' className="twitter-blue">
            <a href={`https://twitter.com/intent/tweet?text=${encodedDescription}`}
               data-size="large"
               data-text={description}
               data-url={encodedPageLink}
               data-image={featured_image}
               data-hashtags={shownHashTags}
               data-related="twitterapi,twitter"
               target="_blank">
              Share on <Icon name="twitter" />
            </a>
          </Menu.Item>
          <Menu.Item name='Share on WhatsApp' className="whatsapp-green">
            <a href={`whatsapp://send?href=${encodedPageLink}&text=${window.location.href + ' \r\n' + description}`}
               target="_blank"
               data-href="http://eventplog.com"
               data-text={description}>
              Share on <Icon name="whatsapp" />
            </a>
          </Menu.Item>
        </Menu>
      </div>

      <div className="content">
        <div className="caption">
          <div className="title">
            <ContentEditable propName="title"
                       canEdit={is_stakeholder}
                       type="input"
                       defaultValue={title}
                       onChange={handleChange}
                       onSubmit={handleSubmit}>
              {title}
            </ContentEditable>
          </div>
          <div className="meta">
            <ul>
              <li>
                <Icon name="calendar outline" /> {`${moment(start_time).format('MMMM Do YYYY, h:mm a')}`}
              </li>
              {venue &&
                <li>
                  <Icon name="map marker alternate"/>
                  {location.lat
                    ? <a className="map-link"
                         target="_blank"
                         href={`https://www.google.com.ng/maps/dir/${location.lat},${location.lng}`}>
                        {venue}
                      </a>
                    : venue
                  }
                </li>}
              <li>{interested_persons} {pluralize('person', interested_persons)} interested. {no_of_views} page views.</li>
            </ul>
            <ul>
            </ul>
          </div>
        </div>
      </div>
      <div className="cta-btns">
        {(is_stakeholder || organizer_role) &&
          <Button.Link className={`cta large ${isPrivate ? 'inverted' : ''}`} to={`${eventUrl}/backstage/settings?activeIndex=1`}>
            <Icon name="settings" /> Settings
          </Button.Link>}
        {is_attending && !is_owner && !!link &&
          <Button.Link isAnchorTag className="cta large" href={link} target="_blank">
            RSVP
          </Button.Link>}
        {!is_attending &&
          <Button className="cta large" onClick={() => {
            link ? (window.location.href = link) : attendEvent({id})
          }}>
            Register
          </Button>}
        <Button.Link className={`cta large sponsor`} to={`${eventUrl}/sponsors/new`}>
          Sponsor
        </Button.Link>
        {is_stakeholder && isPrivate &&
          <Button inverted className={`cta large ${visibility_status}`} onClick={() => toggleVisibilityStatus({id, visibility_status})}>
            Make event {isPrivate ? 'public' : 'private'}
          </Button>}
        {show_feedback_form &&
          <Button.Link className="cta large" to={`${eventUrl}/feedback`} >
            Give Feedback
          </Button.Link>}
        </div>
    </ContentSection.FullRow>
  )
}

const StyledEventBanner= styled(EventBanner)`
  ${ eventBannerStyles }
`
export default StyledEventBanner;