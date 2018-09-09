import React from 'react'
import styled, { css } from 'styled-components'

//======== Internal Components =========
import Tab from 'js/components/shared/tab'
import ContentSection from 'js/components/shared/content-section'
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
    /*font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;*/
    margin: 0 1rem;
    letter-spacing: 0.01rem;
    font-weight: 600;
    font-size: 1.2rem;
    
      ${
        media.phone`
          margin: 0 0 2rem 0;
        `
      } 
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
        <Tab panes={getPanes()} {...{activeIndex}} />
      </ContentSection.Body>

      <ContentSection.Sidebar>
        <Sidebar.Communities {...{communities: communities_suggestions, followCommunity}} />
      </ContentSection.Sidebar>

    </ContentSection>
  )
}

export default styled(MainContent)`${styles}`