import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { lighten } from 'polished'

// internal
import { media } from 'js/styles/mixins'
import ContentPanelCard from './ContentPanelCard'


const StyledContentPanel = styled.div`
  .content-header {
    border-bottom: 1px solid ${props => lighten(0.2, props.theme.blue)};
    padding-bottom: 5px;
  }
  
  > div.content-body {
    margin: 2rem;
    
    ${
      media.tablet`
        margin: 0;
      `
    }
        
    ${
      media.phone`
        margin: 0;
      `
    }
  }
  
`

const ContentPanel = function({ title, children }) {
  return (
    <StyledContentPanel className="content-panel">
      <h5 className="content-header">{ title }</h5>
      <div className="content-body">
        { children }
      </div>
    </StyledContentPanel>
  )
}

ContentPanel.Card = ContentPanelCard

export default ContentPanel