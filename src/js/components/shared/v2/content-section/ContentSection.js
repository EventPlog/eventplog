import React from 'react'
import styled from 'styled-components'
import { media } from 'js/styles/mixins'
import ContentBody from './ContentBody'
import ContentSidebar from './ContentSidebar'
import ContentRow from './ContentRow'

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 3rem 0;
  flex-wrap: wrap;
  
  ${
    media.tablet`
      flex-direction: column;
    `
  }
    
  ${
    media.phone`
      flex-direction: column;
      margin: 0;
      margin: 2rem 0;
    `
  }
  
  .content-panel {
    margin-bottom: 1rem;
    padding-right: 0;
    
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
ContentSection.FullRow = ContentRow

export default ContentSection