import React from 'react'
import styled, { css } from 'styled-components'

// internal
import { media } from 'js/styles/mixins'
import Button from 'js/components/shared/button'
import ContentSection from 'js/components/shared/content-section'
import ContentEditable from 'js/components/shared/content-editable'

const validDate = (input) => {
  const _date = new Date(input)
  return _date.getDate().toString() !== 'NaN' ? _date : new Date()
}

const pluralize = (word, number) => {
  const knownWords = {
    person: 'people'
  }
  return number = 1 ? word : knownWords[word]
}

const signifyInterest = (event) => {

}
const eventBannerStyles = css`
  min-height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem;
  margin-bottom: 3rem;

  ${
    media.phone`
      flex-direction: column;
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
    }
    
    .meta {
      letter-spacing: 0.6px;
      font-weight: 600;
      font-size: 1.2rem;
    }
    
    ul {
    }
    
    li:not(:last-child) {
      margin-right: 2rem;
      margin-bottom: 1rem;
    }
  }
  
  .cta {
    background: #fff;
    border: #fff;
    box-shadow: 1px 2px 4px #000;
    margin: 2rem 0; 
    
    &:hover {
      background: var(--activeLink);
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
  
`


const EventBanner = ({
  id,
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
  is_organizer,
  is_attending,
  is_stakeholder,
  is_owner,
  className,
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
                           defaultValue={validDate(`${start_date} ${display_start_time}`)}
                           onChange={handleChange}
                           onSubmit={handleSubmit}>
                  {(start_date && display_start_time) ? `Starts on ${start_date} at ${display_start_time}` : 'Click to add start date/time'}
                </ContentEditable>
              </li>
              <li>
                <ContentEditable propName="end_time"
                           canEdit={is_stakeholder}
                           type="datetime"
                           defaultValue={validDate(`${end_date} ${display_start_time}`)}
                           onChange={handleChange}
                           onSubmit={handleSubmit}>
                  {(end_date && display_end_time) ? `Ends on ${end_date} at ${display_end_time}` : 'Click to add end date/time'}
                </ContentEditable>
              </li>
            </ul>
            <ul>
              <li>{interested_persons} {pluralize('person', interested_persons)} interested.</li>
            </ul>
          </div>
        </div>
      </div>
      {is_stakeholder
        ? <Button.Link className="cta" to={`/communities/${community.id}/events/${id}/backstage`}>
          Go Backstage
        </Button.Link>
        : is_attending
          ? <Button.Link className="cta" to={link || '#'} >
            RSVP
          </Button.Link>
          : <Button className="cta" onClick={() => attendEvent(event)}>
            Interested
          </Button>}
    </ContentSection.FullRow>
  )
}

const StyledEventBanner= styled(EventBanner)`
  ${ eventBannerStyles }
`
export default StyledEventBanner;