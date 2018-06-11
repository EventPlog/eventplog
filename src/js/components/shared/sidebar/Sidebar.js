import React from 'react'
import styled from 'styled-components'
import { media } from 'js/styles/mixins'
import SidebarCard from './SidebarCard'

const StyledSidebar = styled.div`
  background: #eee;
  color: #888;
  border-radius: 10px;
  
  .header {
    border-bottom: 1px solid #ccc;
    margin: 1rem 0;
    text-transform: uppercase;
  }
`

const Sidebar = function({
  title,
  children,
}) {
  return (
    <StyledSidebar className="sidebar">
      <div className="header">
        {title}
      </div>
      {children}
    </StyledSidebar>
  )
}

Sidebar.Card = SidebarCard

export default Sidebar