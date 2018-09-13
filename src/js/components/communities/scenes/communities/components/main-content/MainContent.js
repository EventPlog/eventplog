import React from 'react'
import styled, { css } from 'styled-components'
import Auth from 'js/auth'

//======== Internal Components =========
import Tab from 'js/components/shared/tab'
import CommunitiesSection from '../communities-section'
import ContentSection from 'js/components/shared/content-section'
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

const MainContent = ({
  communities = [],
  communities_suggestions = [],
  events_suggestions = [],
  getCommunities,
  getCommunitiesSuggestions,
  followCommunity,
  attendEvent,
  activeIndex,
  className,
}) => {

  const UserCommunities = () =>
    <CommunitiesSection showCTA={!Auth.isLoggedIn}
      {...{communities, getCommunities, followCommunity}} />

  const CommunitiesSuggestions = () =>
    <CommunitiesSection getCommunities={getCommunitiesSuggestions}
                        followCommunity={followCommunity}
                        communities={communities_suggestions} />

  const getPanes = () => {
    return [
      {name: `Communities ${Auth.isLoggedIn ? ' I follow' : ' to follow'}`, content: UserCommunities },
      {name: `Suggestions`, content: CommunitiesSuggestions },
    ]
  }

  return (
    <ContentSection className={`${className} user-communities`}>

      <ContentSection.Body>
        <Tab panes={getPanes()} {...{activeIndex}} />
      </ContentSection.Body>

      <ContentSection.Sidebar>
        <Sidebar.Events events={events_suggestions}
                        attendEvent={attendEvent} />
      </ContentSection.Sidebar>

    </ContentSection>
  )
}

export default styled(MainContent)`${styles}`
