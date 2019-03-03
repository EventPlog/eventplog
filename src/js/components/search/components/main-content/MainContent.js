import React from 'react'
import styled, { css } from 'styled-components'

//======== Internal Components =========
import Tab from 'js/components/shared/tab'
import ContentSection from 'js/components/shared/content-section'
import SearchSidebar from '../search-sidebar'
import SearchEvents from '../search-events'
import SearchCommunities from '../search-communities'
import { media } from 'js/styles/mixins'
import { addDays, subtractDays } from 'js/utils'

import {
  Input,
  DateTimePicker,
  Search,
  Button,
} from 'js/components/shared'

const styles = css`
  margin-top: 0;
  margin-bottom: 8rem;
  
  .ui.tab {
    box-shadow: none;
    border: 0;
    padding: 1rem 0;
    background: transparent;
    
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
  
  .dtp-holder > * {
    margin-top: 1rem;
  }
`

export const MainContent = ({
  activeIndex,
  onTabChange,
  className,
  ...otherProps,
}) => {

  const getPanes = () => {
    return [
      {name: `Events`, content: SearchEvents },
      {name: `Communities`, content: SearchCommunities },
    ]
  }

  return (
    <ContentSection className={className}>

      <ContentSection.Sidebar>
        <SearchSidebar {...otherProps} />
      </ContentSection.Sidebar>

      <ContentSection.Body>
        <Tab panes={getPanes()} {...{activeIndex, onTabChange}} />
      </ContentSection.Body>

    </ContentSection>
  )
}

export default styled(MainContent)`${styles}`