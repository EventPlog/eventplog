import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// intenal
import Nav from '../../../../shared/nav'
import colors from '../../../../../../styles/theme/colors'
import { media } from '../../../../../../styles/mixins'

// images
import defaultLogo from '../../../../../../img/dev-c-lagos-logo.png'


const StyledHeader = styled.div`
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
    border-top: 1px solid ${colors.gray};
    border-bottom: 1px solid ${colors.gray};
    
    --line-height: 50px;
    
    .app-container {
      ${
        media.phone`
          padding: 0 2rem;
        `
      }
    }
  }
`
const CommunityHeader = ({
  hideMenu = false
}) => (
  <StyledHeader>
    <div className="app-container">
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
