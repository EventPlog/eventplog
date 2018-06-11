import React from 'react'
import styled from 'styled-components'
import { media } from 'js/styles/mixins'
import ContentBody from './ContentBody'
import ContentSidebar from './ContentSidebar'

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 4rem 2rem;
  
  ${
    media.tablet`
      flex-direction: column;
    `
  }
    
  ${
    media.phone`
      flex-direction: column;
      margin: 0;
      margin: 4rem 2rem 0 2rem;
    `
  }
  
  .content-panel {
    margin-bottom: 6rem;
    padding-right: 2rem;
    
    ${
      media.tablet`
        padding-right: 0;
      `
    }
    
    ${
      media.phone`
        padding-right: 0;
      `
    }  
  }
`

const ContentSection = function({
  className,
  children
}) {
  return (
    <StyledMainContent className={className}>
      { children }
    </StyledMainContent>
  )
}


ContentSection.Body = ContentBody
ContentSection.Sidebar = ContentSidebar

export default ContentSection