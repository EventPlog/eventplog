import React from 'react'
import styled, { css } from 'styled-components'

//======== Internal Components =========
import ContentSection from 'js/components/shared/v2/content-section'
import EventSection from 'js/components/events/scenes/events/components/events-section'
import Sidebar from 'js/components/shared/v2/sidebar'
import { media } from 'js/styles/mixins'

const styles = css`
  .ui.tab {
    box-shadow: none;
    border: 0;
    padding: 1rem 0;
    
    .pagination.secondary.menu {
       display: inline-flex;
    }
  }
  
  .content-header {
    // margin: 0 1rem;
    margin: 0;
    letter-spacing: 0.01rem;
    
    ${
      media.phone`
        margin: 0 0 2rem 0;
      `
    } 
  }

  .events_container {
    display: flex;
    flex-wrap: wrap;
  }

  .title {
    color: ${props => props.theme.activeLink};
  }
`

export const MainContent = ({
  events = {},
  past_events = {},
  communities_suggestions = {},
  followCommunity,
  className,
  activeIndex,
}) => {
  return (
    <ContentSection className={className}>
     
      <ContentSection.Body>
        <div className="events_container">
          <EventSection title="Upcoming Events" events={events} />
        </div>    
      </ContentSection.Body>

      <ContentSection.Sidebar>
        {/* Sidebar removed to stop data loading */}
        <Sidebar.Communities {...{communities: communities_suggestions, followCommunity}} />
      </ContentSection.Sidebar>

    </ContentSection>
  )
}

export default styled(MainContent)`${styles}`