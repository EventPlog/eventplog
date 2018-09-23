import React from 'react'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { lighten } from 'polished'
import Helmet from 'react-helmet';

// intenal
import Nav from 'js/components/shared/nav'
import colors from 'js/styles/theme/colors'
import { media, maxMedia } from 'js/styles/mixins'
import Button from 'js/components/shared/button'
import { genCommunityLink } from 'js/utils'

const StyledHeader = styled.div`

  > .logo {
    padding: 2rem;
    justify-content: space-between;
    
    .details {
      display: flex;
      flex-direction: column;
      align-items: end;
      
      ${
        media.phone`
          align-items: center;
        `
      }
    }
    
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
      font-weight: 500;
      color: ${lighten(-0.3, colors.gray)};
    }
    
    small {
      color: ${lighten(-0.5, colors.gray)};
      display: block;
      
      ${
        media.tablet`
          /*display: none;*/
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
    
    ${
      maxMedia.tablet`
        display: flex;
        justify-content: center;
        margin-top: 1rem;
      `
    } 
    
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
}) => {

  const {
    id,
    logo,
    description,
    display_name,
    featured_image,
    topic_interests,
    no_of_views,
    is_owner,
    is_admin,
    following,
    no_of_followers,
  } = community

  const communityLink = genCommunityLink(community)
  return (
    <StyledHeader>
      <Helmet>
        <html lang={'en'} />
        <title>{display_name}</title>
        {display_name && <meta property="og:title" content={display_name} />}
        {display_name && <meta property="twitter:title" content={display_name} />}
        {featured_image && <meta property="og:image" content={featured_image} />}
        {featured_image && <meta property="twitter:image" content={featured_image} />}
        <link rel="canonical" href={communityLink} />
      </Helmet>
      <div className="app-container logo">

        <Link to={communityLink} >
          {logo && <img src={logo} />}

          <div className="details">
            {!logo && <h3>{display_name}</h3>}
            {description && <small>{description.substr(0, 70)}</small>}

            <small>{no_of_followers} followers. {no_of_views} views.</small>
            {topic_interests &&
            <div className="hashtags-holder">
              {topic_interests.map(topic =>
                <div className="hashtags">{topic}
                </div>)}
            </div>}
          </div>

        </Link>
        <div className="right-pull">
          {is_owner
            ? <Button.Link className="edit-community"
                           activeClassName="hidden"
                           to={`${communityLink}/edit`}>
                Edit
              </Button.Link>
            : following
              ? <Button onClick={() => unFollowCommunity(community)}>
                  <Icon color='green' name='checkmark' size='large' />
                  Following
                </Button>
              : id &&
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
              <Link to={`${communityLink}/e`}>Events</Link>
            </Nav.Item>

            {/*<Nav.Item>*/}
            {/*<Link to={`/communities/${id}/team`}>Team</Link>*/}
            {/*</Nav.Item>*/}

            {(is_owner || is_admin) &&
            <Nav.Item>
              <Button.Link to={`${communityLink}/e/new`} activeClassName="hidden">
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
}

export default CommunityHeader
