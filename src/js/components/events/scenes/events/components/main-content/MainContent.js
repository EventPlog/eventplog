import React from 'react'
import styled, { css } from 'styled-components'

//======== Internal Components =========
import Tab from 'js/components/shared/tab'
import ContentSection from 'js/components/shared/content-section'
import ContentPanel from 'js/components/shared/v2/content-panel'
import UserEvents from 'js/components/events/scenes/user-events'
import EventsSuggestions from 'js/components/events/scenes/events-suggestions'
import Sidebar from 'js/components/shared/sidebar'
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
    margin: 0 1rem;
    letter-spacing: 0.01rem;
    
    ${
      media.phone`
        margin: 0 0 2rem 0;
      `
    } 
  }

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .title {
    color: ${props => props.theme.activeLink};
  }
`

export const MainContent = ({
  events = {},
  communities_suggestions = {},
  followCommunity,
  className,
  activeIndex,
}) => {

  const getPanes = () => {
    return [
      {name: `My events`, content: UserEvents },
      {name: `Suggestions`, content: EventsSuggestions },
    ]
  }

  return (
    <ContentSection className={className}>
      
      <ContentSection.Body>
        <h4 className="title">Upcoming Events</h4>
        <div className="container">
          <ContentPanel.Card />
          <ContentPanel.Card />
          <ContentPanel.Card />
        </div>
        
      </ContentSection.Body>

      <ContentSection.Sidebar>
        Sidebar removed to stop data loading
        {/* <Sidebar.Communities {...{communities: communities_suggestions, followCommunity}} /> */}
      </ContentSection.Sidebar>

    </ContentSection>
  )
}

export default styled(MainContent)`${styles}`