import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { lighten } from 'polished'

// internal
import { media, maxMedia } from 'js/styles/mixins'
import ContentPanelCard from './ContentPanelCard'


const StyledContentPanel = styled.div`
  background: white;
  padding: 1rem;
  box-shadow: 1px 2px 4px ${props => lighten(0.45, props.theme.activeLink)};
    
  ${
    media.phone`
      max-width: 100%;
      padding: 0;
      box-shadow: none;
    `
  }
  .content-header {
    border-bottom: 1px solid ${props => lighten(0.2, props.theme.blue)};
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: 0.01rem;
    margin: 0 1rem;
    padding-bottom: 5px;
    
    ${
      maxMedia.tablet`
        margin: 0 0 1rem;
      `
    }
  }
  
  > div.content-body {
    margin: 2rem;
    
    ${
      media.tablet`
        margin: 0 0 1rem;
      `
    }
        
    ${
      media.phone`
        margin: 0 0 1rem;
      `
    }
  }
  
`

const ContentPanel = function({
  className = '',
  title,
  style = {},
  bodyStyle = {},
  children
}) {
  return (
    <StyledContentPanel style={style} className={`${className} content-panel`}>
      {title && <h5 className="content-header">{ title }</h5>}
      <div className="content-body" style={bodyStyle}>
        { children }
      </div>
    </StyledContentPanel>
  )
}

ContentPanel.Card = ContentPanelCard

export default ContentPanel