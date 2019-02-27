import React from 'react'
import styled from 'styled-components'
import { media } from 'js/styles/mixins'
import SidebarCard from './SidebarCard'
import { lighten } from 'polished'

import SidebarEvents from './events-section'
import SidebarCommunities from './communities-section'
import colors from 'js/styles/theme/variables'

const StyledSidebar = styled.div`
  color: ${props => lighten(0.25, props.theme.activeLink)};
  border-radius: 10px;
  background: white;
  padding: 1rem;
  box-shadow: 1px 2px 4px ${props => lighten(0.47, props.theme.activeLink)};
  color: ${props => props.theme.darkGray};
  border-radius: 0;
  
  p {
    color: ${props => props.theme.darkGray};
  }
  
  ${
    media.phone`
      border-radius: 0;
      box-shadow: none;
    `
  }
  
  .header {
    border-bottom: 1px solid #ccc;
    margin: 1rem 0;
    color: ${props => props.theme.activeLink};
    font-size: 1.2rem;
    text-align: center;
    padding-bottom: 1rem;
  }
`

const Sidebar = function({
  title,
  children,
  ...otherProps
}) {
  return (
    <StyledSidebar className="sidebar" {...otherProps}>
      <p className="header">
        {title}
      </p>
      {children}
    </StyledSidebar>
  )
}

Sidebar.Card = SidebarCard
Sidebar.Events = SidebarEvents
Sidebar.Communities = SidebarCommunities

export default Sidebar