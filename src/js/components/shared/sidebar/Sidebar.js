import React from 'react'
import styled from 'styled-components'
import { media } from 'js/styles/mixins'
import SidebarCard from './SidebarCard'
import { lighten } from 'polished'

import SidebarEvents from './events-section'
import SidebarCommunities from './communities-section'
import colors from 'js/styles/theme/variables'

const StyledSidebar = styled.div`
  color: ${lighten(0.25, colors.blue)};
  border-radius: 10px;
  background: ${lighten(-0.15, colors.blue)};
  
  p {
    color: ${lighten(0.4, colors.blue)};
  }
  
  ${
    media.phone`
      border-radius: 0;
    `
  }
  
  .header {
    border-bottom: 1px solid #ccc;
    margin: 1rem 0;
    font-size: 1.3rem;
    color: ${lighten(0.35, colors.blue)};
    font-weight: 800;
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