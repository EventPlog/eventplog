import React from 'react'
import styled, { css } from 'styled-components'

// internal
import { media } from 'js/styles/mixins'
import Button from 'js/components/shared/button'
import ContentSection from 'js/components/shared/content-section'

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
    
    ${
      media.phone`
        align-self: flex-start;
      `
    }
  }
  
`
const EventBanner = ({
  id,
  title,
  featured_image,
  interested_persons,
  start_time,
  end_time,
  start_date,
  end_date,
  community = {},
  className,
}) => (
  <ContentSection.FullRow className={`banner img-bg ${className}`} style={{
          backgroundImage: `url(${featured_image || '/login-bg.jpg'})`
        }}>
    <div className="overlay" />
    <div className="content">
      <div className="caption">
        <div className="title">
          {title}
        </div>
        <div className="meta">
          <ul>
            <li>{start_date}</li>
            <li>{start_time} - {end_time}</li>
          </ul>
          <ul>
            <li>{interested_persons} people interested.</li>
          </ul>
        </div>
      </div>
    </div>
    <Button.Link className="cta" to={`/communities/${community.id}/events/${id}`}>
      Go Backstage
    </Button.Link>
  </ContentSection.FullRow>
)

const StyledEventBanner= styled(EventBanner)`
  ${ eventBannerStyles }
`
export default StyledEventBanner;