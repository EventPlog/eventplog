import React from 'react'
import styled from 'styled-components'
import { media } from 'js/styles/mixins'

const StyledMainContentSidebar = styled.div`
  padding-top: 3.2rem;
  
  .sidebar {
    width: 300px;
    padding: 0.5rem 1rem;
    margin-bottom: 3rem;
    
    ${
      media.tablet`
        width: 100%;
        margin-bottom: 3rem;
      `
    }
    
    ${
      media.phone`
        width: 100%;
        margin-bottom: 0;
      `
    }
  }
  
`

const ContentSidebar = ({ children }) => (
  <StyledMainContentSidebar>
    { children }
  </StyledMainContentSidebar>
)

export default ContentSidebar
