import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { lighten } from 'polished'

// internal
import { media, maxMedia } from 'js/styles/mixins'
import ContentPanelCard from './ContentPanelCard'


const StyledContentPanel = styled.div`
  ${
    media.phone`
      max-width: 100%;
      padding: 0;
      box-shadow: none;
    `
  }
  .content-header {
    margin: 0;
  }

    ${
      maxMedia.tablet`
        margin: 0 0 1rem;
      `
    }
  }
  
  > div.content-body {
    // margin: 2rem 1rem;
    
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
      {title && <h4 className="content-header">{ title }</h4>}
      <div className="content-body" style={bodyStyle}>
        { children }
      </div>
    </StyledContentPanel>
  )
}

ContentPanel.Card = ContentPanelCard

export default ContentPanel
