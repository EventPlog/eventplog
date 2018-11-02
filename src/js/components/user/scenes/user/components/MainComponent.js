import React from 'react'
import { Image, Icon } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

// =========== INTERNAL ============
import AboutUser from './AboutUser'
import Nav from 'js/components/shared/nav'
import Button from 'js/components/shared/button'
import ImageUploader from 'js/components/shared/image-uploader'
import { media } from 'js/styles/mixins'
import Loading from 'js/components/shared/loading'

import {
  addHttp,
  getUserAvatar,
  genUserProfileLink,
} from 'js/utils'

const StyledUser = styled.div`
  > .app-container {
    margin: 2rem auto;
    padding: 1rem 2rem;
    
    .user-banner {
      width: 100%;
    }
  }
  
  
  .menu-hold {
    margin: 2rem 0;
    border-top: 1px solid ${props => props.theme.gray};
    border-bottom: 1px solid ${props => props.theme.gray};
    background: ${props => props.theme.activeLink};
    
    a {
      color: ${props => props.theme.gray};
      
      &.active {
        text-decoration: underline;
        font-weight: bold;
      }
    }
    
    .center {
      justify-content: center;
    }
    
    li {
      ${
        media.phone`
          margin: 0 1rem 1rem;
        `
      }
    }
  }
  
  .social-links {
    font-size: 1.5rem;
    margin-top: 1rem;
    color: ${props => props.theme.grayMedium};
    
    a {
      color: ${props => props.theme.grayMedium};
      
      &:hover {
        color: var(--activeLink);
      }
    }
  }
  
  .ui.grid>[class*="twelve wide"].column,
  .ui.grid>.stretched.column:not(.row),
  .stretched.twelve.wide.column {
    ${
      media.phone`
        width: 100% !important;
      `
    }
  }
`

const UserProfile = ({
  user = {},
  loading,
  error,
  currentUser = {},
  imagePlaceholderRef,
  handleSubmit,
  handleChange,
}) => {

  if(loading && !user.id) return <Loading />
  if(error) return <Loading.Error msg={error} />

  const userProfileLink = genUserProfileLink(user)
  const userAvatar = getUserAvatar(user)

  return (
    <StyledUser>
      <div className="app-container">
        <AboutUser {...{user, currentUser}}/>
      </div>
      <div className="menu-hold">
        <Nav StackUlOnMobile={true}
             className="app-container center">
          <Nav.Item>
            <NavLink activeClassName="active"
                     to={`${userProfileLink}/events`}>
              Events
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink activeClassName="active"
                     to={`${userProfileLink}/communities`}>
              Communities</NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink activeClassName="active"
                     to={`${userProfileLink}/resources`}>
              Resources
            </NavLink>
          </Nav.Item>
          {/*<Nav.Item>*/}
            {/*<Link to={`${userProfileLink}/skills`}>Skills/Projects</Link>*/}
          {/*</Nav.Item>*/}
          {
            user.id == currentUser.id &&
            <Nav.Item>
              <NavLink activeClassName="active"
                       to={`${userProfileLink}/settings`}>
                Settings
              </NavLink>
            </Nav.Item>
          }
        </Nav>
      </div>
    </StyledUser>
  )
}

export default UserProfile