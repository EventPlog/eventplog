import React from 'react'
import styled from 'styled-components'
import { media } from 'js/styles/mixins'

const StyledSidebar = styled.div`
  .sidebar {
    width: 300px;
    /*background: #607d8b14;*/
    padding: 2rem;
    background: #eee;
    color: #888;
    border-radius: 10px;
    
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
    
    .header {
      border-bottom: 1px solid #ccc;
      margin: 1rem 0;
      text-transform: uppercase;
    }
  }
`

const Sidebar = ({
  title,
  children,
}) => {
  return (
    <StyledSidebar>
      <div className="sidebar">
        <div className="header">
          {title}
        </div>
        {children}
      </div>
    </StyledSidebar>
  )
}

export default Sidebar