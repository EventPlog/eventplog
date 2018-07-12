import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// intenal
import Nav from 'js/components/shared/nav'
import colors from 'js/styles/theme/colors'
import { media } from 'js/styles/mixins'
import Button from 'js/components/shared/button'
import { Icon } from 'semantic-ui-react'

// images
import defaultLogo from 'img/react-logo.png'

const StyledHeader = styled.div`

  > .community-logo {
    padding: 2rem;
    justify-content: space-between;
    
    > a {
      display: flex;
      align-content: center;
      align-items: center;
      
      ${
        media.phone`
          text-align: center;
          flex-direction: column;
        `
      }
      
      &.active {
        color: ${colors.peach};
      }
    }
    
    img {
      max-height: 50px;
      margin-right: 0.5rem;
      
      ${
        media.phone`  
          max-height: none;
          max-width: 100%;
          margin-right: 0;
          
          &.logo-only {
            width: 70px;
          }
        `
      }  
    }
    
    h3 {
      margin: 0;
      margin-top: 0.2em;
      color: inherit;
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
  
  .edit-community {
  }
  
  .right-pull {
    align-self: center;
    margin: 2rem 0 0;
  }
`

const CommunityHeader = ({
  hideMenu = false,
  community = {}
}) => (
  <StyledHeader>
    <div className="app-container community-logo">
      <Link to={`/communities/${community.id}`} >
        <img src={community.logo || defaultLogo} className={community.display_name ? 'logo-only' : '' } />
        <div>
          {community.display_name && <h3>{community.display_name}</h3>}
          {community.description && <small>{community.description}</small>}
          {community.interests && <small>{community.interests.map(i => <span className="hashtags">{i.name}</span>)}</small>}
        </div>
      </Link>
      <div className="right-pull">
        {community.is_owner && <Button.Link
                                  className="edit-community"
                                  activeClassName="hidden"
                                  to={`/communities/${community.id}/edit`}>
                                  Edit
                                </Button.Link>}
      </div>
    </div>

    <div className="nav-holder">
      <div className="app-container">
        <Nav hideOnMobile={hideMenu} StackUlOnMobile={false}>
          <Nav.Item>
            <Link to={`/communities/${community.id}/events`}>Events</Link>
          </Nav.Item>

          <Nav.Item>
            <Link to={`/communities/${community.id}`}>Team</Link>
          </Nav.Item>

          <Nav.Item>
            <Button.Link to={`/communities/${community.id}/events/new`} activeClassName="hidden">
              <span className="hidden-lg">
                <Icon name="plus" />
                <Icon name="handshake outline" />
              </span>
              <span className="hidden-md hidden-xs">Create an event</span>
            </Button.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  </StyledHeader>
)

export default CommunityHeader
