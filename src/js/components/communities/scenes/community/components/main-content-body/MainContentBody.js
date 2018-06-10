import React from 'react'
import styled from 'styled-components'
import { media } from 'js/styles/mixins'
import EventsSection from 'js/components/events/scenes/events/components/events-section'
import CommunitiesSection from 'js/components/events/scenes/events/components/communities-section'
import Sidebar from 'js/components/shared/sidebar'


const StyledMainContent = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4rem 0;
  
  ${
  media.tablet`
      flex-direction: column;
    `
  }
  
    
  ${
  media.phone`
      flex-direction: column;
    `
  }
  
  .main-body {
    flex: 1;
    margin-right: 2rem; 
    
    ${
  media.phone`
        margin: 2rem;
      `
  }
  }
  
  img {
    max-width: 100px;
  }
  
  .events-section {
    margin-bottom: 6rem;
    padding-right: 2rem;
    
    ${
  media.tablet`
        padding-right: 0;
      `
  }
    
    ${
  media.phone`
        padding-right: 0;
      `
  }  
    .header {
      border-bottom: 1px solid #ddd;
      padding-bottom: 5px;
    }
  }
  
  .sidebar {
  }
`

const MainContent = ({
  events = [],
  events_suggestions = [],
  communities_suggestions = [],
}) => {
  return (
    <StyledMainContent>

      <section className="main-body">
        <EventsSection title="Events" {...{events}} />
        <EventsSection title="Similar events from other communities"
                       events={events_suggestions} />
      </section>

      <Sidebar title="Awesome communities">
        <CommunitiesSection {...{communities: communities_suggestions}} />
      </Sidebar>

    </StyledMainContent>
  )
}

export default MainContent