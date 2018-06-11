import React from 'react'
import styled from 'styled-components'
import Button from 'js/components/shared/button'

import EventsSection from 'js/components/events/scenes/events/components/events-section'
import CommunitiesSection from 'js/components/events/scenes/events/components/communities-section'
import Sidebar from 'js/components/shared/sidebar'
import ContentSection from 'js/components/shared/content-section'
import { media } from 'js/styles/mixins'

const StyledEvent = styled.div`
  .banner {
    height: 400px;
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
        margin-bottom: 2rem;
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
  }
  
  .event-description {
    margin-bottom: 3rem;
  }
`

const Event = ({
  event,
  community,
  events_suggestions = [],
  communities_suggestions = []
}) => {
  return (
    <StyledEvent className="app-container">
      <ContentSection>
        <ContentSection.FullRow className="banner img-bg" style={{
          backgroundImage: `url(/login-bg.jpg)`
        }}>
          <div className="overlay" />
          <div className="content">
            <div className="caption">
              <div className="title">
                Tech is In you
              </div>
              <div className="meta">
                <ul>
                  <li>28th June, 2018</li>
                  <li>3:00pm - 6:00pm</li>
                </ul>
                <ul>
                  <li>213 people interested.</li>
                </ul>
              </div>
            </div>
          </div>
          <Button className="cta">Go Backstage</Button>
        </ContentSection.FullRow>

        <ContentSection.Body>
          <div className="event-description">
            <p>
              Clear you calendars, it’s going down. his HTML file is a template. If you open it directly in the browser, you will see an empty page.
            </p>
            <p>
              "You can add webfonts, meta tags, or analytics to this file.&nbsp;
              The build step will place the bundled scripts into the {'<body>'} tag.&nbsp;
            To begin the development, run `npm start` or `yarn start`.&nbsp;
            To create a production bundle, use `npm run build` or `yarn build`.
            </p>
          </div>

          <EventsSection title={`Because of your interest in ${community.name}`}
                         events={events_suggestions} />
        </ContentSection.Body>

        <ContentSection.Sidebar>
          <CommunitiesSection {...{communities: communities_suggestions}} />
        </ContentSection.Sidebar>

      </ContentSection>

    </StyledEvent>
  )
}

export default Event;