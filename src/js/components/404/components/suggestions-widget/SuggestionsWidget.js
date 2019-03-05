import React from 'react'
import styled, { css } from 'styled-components'

import Button from 'js/components/shared/button'

const styles = css`
  justify-content: center;
  flex-direction: column;
  align-items: center;
    
  .sidebar {
    background: none;
    box-shadow: none;
    width: auto;
    
    .events-list {
      display: flex;
      flex-wrap: wrap;
      
      
      .sidebar-card {
        width: 250px;
        margin: 1rem;
      }
      
      .img-holder {
         height: 100%;
         display: flex;
         flex-direction: column;
         justify-content: space-around;
      }
    }
  }
  
  .main-body {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`

//============ INTERNAL =============
import ContentSection from 'js/components/shared/content-section'
import Sidebar from 'js/components/shared/v2/sidebar'

const EventsSuggestions = ({
  className,
  events_suggestions,
  communities_suggestions,
  attendEvent,
  followCommunity,
}) => {
  return (
    <ContentSection className={`events ${className}`}>
      <ContentSection.Body>
        <Sidebar.Events events={events_suggestions}
                        attendEvent={attendEvent} />

        <Button.Link to="/events">View more events</Button.Link>
      </ContentSection.Body>

      <ContentSection.Body>

        <Sidebar.Communities communities={communities_suggestions}
                             followCommunity={followCommunity} />
        <Button.Link to="/communities">View more communities</Button.Link>
      </ContentSection.Body>
    </ContentSection>

  )
}

export default styled(EventsSuggestions)`${styles}`