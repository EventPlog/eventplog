import React from 'react'
import styled from 'styled-components'

// internal
import CategoriesNav from 'js/components/shared/user-secondary-menu'
import MainContent from './components/main-content'
import { media } from 'js/styles/mixins'
import Loading from 'js/components/shared/loading'

const StyledCategories = styled.div`
  section.app-container {
    
    ${
      media.phone`
        margin-bottom: 0;
      `
    } 
  }
`

const Categories = (props) => {
  if (props.loading) {
    return <Loading />
  }
  return (
    <StyledCategories>
      <section className="app-container">
        <MainContent {...props} />
      </section>
    </StyledCategories>
  )
}

export default Categories