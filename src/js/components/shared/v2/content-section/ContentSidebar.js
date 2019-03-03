import React from 'react'
import styled from 'styled-components'
import { media } from 'js/styles/mixins'

const StyledMainContentSidebar = styled.div`
  .sidebar {
    width: 100%;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
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

const ContentSidebar = ({ className, children }) => (
  <StyledMainContentSidebar className={className}>
    { children }
  </StyledMainContentSidebar>
)

export default ContentSidebar
