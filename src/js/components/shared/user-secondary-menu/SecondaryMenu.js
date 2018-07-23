import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// intenal
import Nav from 'js/components/shared/nav'
import colors from 'js/styles/theme/colors'
import { media } from 'js/styles/mixins'
import { lighten } from 'polished'



const StyledHeader = styled.div`
  border-bottom: 1px solid ${lighten(-0.1, colors.gray)};
    background: ${props => props.theme.activeLinkBg};
  
  --line-height: 50px;
  
  .app-container {
    padding: 1rem 2rem;
  }
  
  ul {
    margin: 0;
    padding: 0;
    
    a {
      color: ${lighten(-0.1, colors.white)};
      
      &:hover {
        color: ${props => props.theme.activeLink};
      }
    }
    
    ${
      media.phone`
        flex-direction: row;
        margin-top: 0;
      `
    }
  }
  
`
const CommunityHeader = ({
  hideMenu = false
}) => (
  <StyledHeader>
    <div className="app-container">
      <Nav hideOnMobile={hideMenu} StackUlOnMobile={false}>
        <Nav.Item>
          <Link to="/events">Events</Link>
        </Nav.Item>

        <Nav.Item>
          <Link to="/communities">Communities</Link>
        </Nav.Item>
      </Nav>
    </div>
  </StyledHeader>
)

export default CommunityHeader
