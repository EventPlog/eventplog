import React from 'react'
import styled, { css } from 'styled-components'
import moment from 'moment'
import { lighten } from 'polished'

// internal
import { media } from 'js/styles/mixins'
import Button from 'js/components/shared/button'
import ContentSection from 'js/components/shared/content-section'
import ContentEditable from 'js/components/shared/content-editable'
import { validDate, pluralize, genEventLink } from 'js/utils'

const eventBannerStyles = css`
  min-height: 400px;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem;
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
      font-weight: 300;
      margin-top: 4rem;
      line-height: initial;
      
      ${
        media.desktop`
          font-size: 6rem;
        `
      }
    }
    
    .meta {
      letter-spacing: 0.6px;
      font-weight: 600;
      font-size: 1.2rem;
      
      ${
        media.desktop`
          letter-spacing: 0.6px;
          font-weight: 300;
          font-size: 2.5rem;
          line-height: 3rem;
        `
      }
    }
    
    ul {
    }
    
    li:not(:last-child) {
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
      `
    }
  }
  
  .cta {
    background: #fff;
    border: #fff;
    box-shadow: 1px 2px 4px #000;
    margin: 0.5rem 0; 
    
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
    
    ${
      media.phone`
        align-self: flex-start;
      `
    }
  }
  
  .date-time-picker {
    max-width: 400px;
    background: #fff;
  }
  
  .editor-active {
    flex: 1;
  }
  
  .react-calendar {
    font-size: 0.8rem;
  }
  
`


const EventBanner = ({
  id,
  slug,
  title,
  featured_image,
  interested_persons,
  link,
  time,
  date,
  start_time,
  display_start_time,
  end_time,
  display_end_time,
  start_date,
  end_date,
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
}) => {
  return (
    <ContentSection.FullRow className={`banner img-bg ${className}`} style={{
          backgroundImage: `url(${featured_image || '/login-bg.jpg'})`
        }}>
      <div className="overlay" />
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
                <ContentEditable propName="start_time"
                           canEdit={is_stakeholder}
                           type="datetime"
                           defaultValue={validDate(start_time)}
                           onChange={handleChange}
                           onSubmit={handleSubmit}>
                  {(start_time ) ? `Starts ${moment(start_time).format('MMMM Do YYYY, h:mm a')}` : 'Click to add start date/time'}
                </ContentEditable>
              </li>
              <li>
                <ContentEditable propName="end_time"
                           canEdit={is_stakeholder}
                           type="datetime"
                           defaultValue={validDate(end_time)}
                           onChange={handleChange}
                           onSubmit={handleSubmit}>
                  {(end_time ) ? `Ends ${moment(end_time).format('MMMM Do YYYY, h:mm a')}` : 'Click to add start date/time'}
                </ContentEditable>
              </li>
              <li>{interested_persons} {pluralize('person', interested_persons)} interested. {no_of_views} page views.</li>
            </ul>
            <ul>
            </ul>
          </div>
        </div>
      </div>
      <div className="cta-btns">
        {(is_stakeholder || organizer_role) &&
          <Button.Link className="cta large" to={`${genEventLink({id, slug}, community)}/backstage`}>
            Go Backstage
          </Button.Link>}
        {is_attending && !is_owner && !!link &&
          <Button.Link isAnchorTag className="cta large" href={link} >
            RSVP
          </Button.Link>}
        {!is_attending &&
          <Button className="cta large" onClick={() => attendEvent({id})}>
            Interested
          </Button>}
        {is_owner &&
          <Button className={`cta large ${visibility_status}`} onClick={() => toggleVisibilityStatus({id, visibility_status})}>
            Make event {visibility_status == 'private_event' ? 'public' : 'private'}
          </Button>}
        </div>
    </ContentSection.FullRow>
  )
}

const StyledEventBanner= styled(EventBanner)`
  ${ eventBannerStyles }
`
export default StyledEventBanner;