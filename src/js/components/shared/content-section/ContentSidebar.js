import React from 'react'
import styled from 'styled-components'
import { media } from 'js/styles/mixins'

const StyledMainContentSidebar = styled.div`
  .sidebar {
    width: 300px;
    padding: 2rem;
    
    ${
      media.tablet`
        width: 100%;
      `
    }
    
    ${
      media.phone`
        width: 100%;
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