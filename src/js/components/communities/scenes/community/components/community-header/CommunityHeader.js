import React from 'react'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { lighten } from 'polished'

// intenal
import Nav from 'js/components/shared/nav'
import colors from 'js/styles/theme/colors'
import { media } from 'js/styles/mixins'
import Button from 'js/components/shared/button'
import { genCommunityLink } from 'js/utils'

const StyledHeader = styled.div`

  > .community-logo {
    padding: 2rem;
    justify-content: space-between;
    
    > a {
      display: flex;
      align-content: center;
      align-items: center;
      color: ${props => lighten(0.0, props.theme.activeLink)};
      
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
      max-height: 40px;
      margin-right: 1rem;
      
      ${
        media.phone`  
          max-height: none;
          max-width: 100%;
          margin-right: 0;
          margin-bottom: 2rem;
          
        `
      }  
    }
    
    h3 {
      margin: 0;
      margin-top: 0.2em;
      color: inherit;
      font-weight: 800;
      color: ${lighten(-0.3, colors.gray)};
    }
    
    small {
      color: ${lighten(-0.5, colors.gray)};
      
      ${
        media.tablet`
          display: none;
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
    background: ${props => props.theme.activeLinkBg};
    
    border-top: 1px solid ${colors.gray};
    border-bottom: 1px solid ${colors.gray};
    
    .app-container {
      padding: 1rem 2rem;
    }
    
    a {
      color: ${colors.white};
    }
  }
  
  .right-pull {
    align-self: center;
    
    a {
      display: inline-block;
      
      ${
        media.phone`
          margin: 1rem 0 0;
        `
      }
    }
  }
  
  .hashtags-holder {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    ${
      media.tablet`
        justify-content: flex-start;
      `
    }
  }
  
  .hashtags {
    font-size: 80%;
    margin: 0.5rem 1rem 0 0;
  }
`

const CommunityHeader = ({
  hideMenu = false,
  community = {},
  followCommunity,
  unFollowCommunity,
}) => (
  <StyledHeader>
    <div className="app-container community-logo">
      <Link to={genCommunityLink(community)} >
        {community.logo && <img src={community.logo} />}
        <div className="hidden-xs">
          {!community.logo && <h3>{community.display_name}</h3>}
          {community.description && <small>{community.description.substr(0, 70)}</small>}
          {community.topic_interests &&
            <div className="hashtags-holder">
              {community.topic_interests.map(topic =>
                <div className="hashtags">{topic}
                </div>)}
            </div>}
        </div>
      </Link>
      <div className="right-pull">
        {community.is_owner
          ? <Button.Link
              className="edit-community"
              activeClassName="hidden"
              to={`/communities/${community.id}/edit`}>
              Edit
            </Button.Link>
          : community.following
            ? <Button
                onClick={() => unFollowCommunity(community)}>
                <Icon color='green' name='checkmark' size='large' />
                Following
              </Button>
            : community.id &&
              <Button
                onClick={() => followCommunity(community)}>
                Follow
              </Button>
        }
      </div>
    </div>

    <div className="nav-holder">
      <div className="app-container">
        <Nav hideOnMobile={hideMenu} StackUlOnMobile={false}>
          <Nav.Item>
            <Link to={`/communities/${community.id}/events`}>Events</Link>
          </Nav.Item>

          {/*<Nav.Item>*/}
            {/*<Link to={`/communities/${community.id}/team`}>Team</Link>*/}
          {/*</Nav.Item>*/}

          {(community.is_owner || community.is_admin) &&
            <Nav.Item>
              <Button.Link to={`/communities/${community.id}/events/new`} activeClassName="hidden">
                <span className="hidden-lg">
                  <Icon name="plus" />
                  <Icon name="handshake outline" />
                </span>
                <span className="hidden-md hidden-xs">Create an event</span>
              </Button.Link>
            </Nav.Item>
          }
        </Nav>
      </div>
    </div>
  </StyledHeader>
)

export default CommunityHeader
