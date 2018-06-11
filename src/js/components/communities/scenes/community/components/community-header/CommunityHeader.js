import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// intenal
import Nav from 'js/components/shared/nav'
import colors from 'js/styles/theme/colors'
import { media } from 'js/styles/mixins'

// images
import defaultLogo from 'img/dev-c-lagos-logo.png'

const StyledHeader = styled.div`

  > .community-logo {
    padding: 2rem;
    img {
      max-height: 50px;
      
      ${
        media.phone`  
          max-height: none;
        `
      }  
    }
  }
  
  ul {
    margin: 0;
    padding: 0;
    
    ${
      media.phone`
          flex-direction: row;
          margin-top: 0;
        `
    }
  }
  
  .nav-holder {
    --line-height: 10px;
    width: 100%;
    
    border-top: 1px solid ${colors.gray};
    border-bottom: 1px solid ${colors.gray};
    
    .app-container {
      padding: 1rem 2rem;
    }
  }
`
const CommunityHeader = ({
  hideMenu = false,
  community = {}
}) => (
  <StyledHeader>
    <div className="app-container community-logo">
      <img src={defaultLogo} />
    </div>

    <div className="nav-holder">
      <div className="app-container">
        <Nav hideOnMobile={hideMenu} StackUlOnMobile={false}>
          <Nav.Item>
            <Link to="/communities/1/events">Events</Link>
          </Nav.Item>

          <Nav.Item>
            <Link to="/communities/1">Organizers</Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  </StyledHeader>
)

export default CommunityHeader
