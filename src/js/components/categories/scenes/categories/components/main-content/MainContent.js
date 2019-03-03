import React from 'react'
import styled, { css } from 'styled-components'
import Auth from 'js/auth'

//======== Internal Components =========
import Tab from 'js/components/shared/tab'
import CategoriesSection from '../categories-section'
import ContentSection from 'js/components/shared/content-section'
import Sidebar from 'js/components/shared/sidebar'
import { media } from 'js/styles/mixins'

const styles = css`
  .ui.tab {
    box-shadow: none;
    border: 0;
    padding: 1rem 0;
    background: none;
    
    .pagination.secondary.menu {
       display: inline-flex;
    }
  }
  
  .content-header {
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
  
  .content-panel {
    background: transparent;
    box-shadow: none;
  }
`

const MainContent = ({
  categories = [],
  categories_suggestions = [],
  events_suggestions = [],
  getCategories,
  getCategoriesSuggestions,
  followCategory,
  attendEvent,
  activeIndex,
  className,
}) => {

  const UserCategories = () =>
    <CategoriesSection showCTA={!Auth.isLoggedIn}
                       title="Categories"
      {...{categories, getCategories, followCategory}} />

  const CategoriesSuggestions = () =>
    <CategoriesSection getCategories={getCategoriesSuggestions}
                       title="Categories"
                       followCategory={followCategory}
                       categories={categories_suggestions} />

  const getPanes = () => {
    return [
      {name: `Categories ${Auth.isLoggedIn ? ' I follow' : ' to follow'}`, content: UserCategories },
      {name: `Suggestions`, content: CategoriesSuggestions },
    ]
  }

  return (
    <ContentSection className={`${className} user-categories`}>

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
