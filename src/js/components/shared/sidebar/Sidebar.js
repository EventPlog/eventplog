import React from 'react'
import styled from 'styled-components'
import { media } from 'js/styles/mixins'
import SidebarCard from './SidebarCard'

import SidebarEvents from './events-section'
import SidebarCommunities from './communities-section'

const StyledSidebar = styled.div`
  background: #eee;
  color: #888;
  border-radius: 10px;
  
  ${
    media.phone`
      border-radius: 0;
    `
  }
  
  .header {
    border-bottom: 1px solid #ccc;
    margin: 1rem 0;
    font-size: 1.3rem;
  }
`

const Sidebar = function({
  title,
  children,
  ...otherProps
}) {
  return (
    <StyledSidebar className="sidebar" {...otherProps}>
      <h5 className="header">
        {title}
      </h5>
      {children}
    </StyledSidebar>
  )
}

Sidebar.Card = SidebarCard
Sidebar.Events = SidebarEvents
Sidebar.Communities = SidebarCommunities

export default Sidebar