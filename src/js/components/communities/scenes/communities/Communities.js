import React from 'react'
import styled from 'styled-components'

// internal
import CommunitiesNav from './components/secondary-menu'
import MainContent from './components/main-content'
import { media } from 'js/styles/mixins'

const StyledCommunities = styled.div`
  section.app-container {
    margin: 50px auto;
    
    ${
      media.phone`
        padding: 0;
        margin-bottom: 0;
      `
    } 
  }
`

const Communities = ({ communities }) => (
  <StyledCommunities>
    <CommunitiesNav />
    <section className="app-container">
      <MainContent />
    </section>
  </StyledCommunities>
)

export default Communities