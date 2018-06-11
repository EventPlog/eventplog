import React from 'react'
import styled from 'styled-components'

// internal
import CommunitiesNav from 'js/components/shared/user-secondary-menu'
import MainContent from './components/main-content'
import { media } from 'js/styles/mixins'

const StyledCommunities = styled.div`
  section.app-container {
    margin: 50px auto;
    
    ${
      media.phone`
        margin-bottom: 0;
      `
    } 
  }
`

const Communities = (props) => (
  <StyledCommunities>
    <CommunitiesNav />
    <section className="app-container">
      <MainContent {...props} />
    </section>
  </StyledCommunities>
)

export default Communities