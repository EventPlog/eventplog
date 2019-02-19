import React from 'react'
import { Image, Icon } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

// =========== INTERNAL ============
import Nav from 'js/components/shared/nav'
import Button from 'js/components/shared/button'
import ImageUploader from 'js/components/shared/image-uploader'
import { media } from 'js/styles/mixins'
import Loading from 'js/components/shared/loading'
import UserLink from 'js/components/shared/user-link'

import {
  addHttp,
  getUserAvatar,
  genUserProfileLink,
} from 'js/utils'

import EditUserAvatar from './EditUserAvatar'

const StyledUser = styled.div`
  width: 100%;
  
  .avatar-medium {
    width: 13rem;
    height: 13rem;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    
    button {
      border-color: #fff;
      color: #fff;
      padding: 1rem;
    }
    
    .upload-btn {
      display: none;
    }
    
    &:hover {
      .upload-btn {
        display: block;
      }
    }
    
    .save-btn {
      background: ${props => props.theme.green};
    }
    
    .cancel-btn {
      margin-left: 1rem;
      background: ${props => props.theme.red};
    }
  }
  
  .user-info {
    align-items: center;
    display: flex;
    width: 100%;
    
    ${
      media.phone`
        flex-direction: column;
      `

    }
  }
  
  .user-info-text {
    flex: 1
    margin: 0 2rem;
    
    ${
      media.phone`
        margin: 0;
        text-align: center;
      `
    }
    
    ul {
      line-height: 1.7rem;
      
      li.user-name {
        margin-bottom: 0.6rem;
        
        
        h3 {
          margin-bottom: 0;
        }
        
        a {
          color: ${props => props.theme.darkGray};
        }
        
        span {
          color: ${props => props.theme.grayMedium};
        }
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
  
  .profile-edit-btn {
    padding: 0.2rem 0.5rem;
    margin: 1rem 0;
    display: inline-block;
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
  children,
}) => {

  if(loading && !user.id) return <Loading />
  if(error) return <Loading.Error msg={error} />

  const userProfileLink = genUserProfileLink(user)
  const userAvatar = getUserAvatar(user)
  const isLoggedInUser = user.id == currentUser.id

  return (
    <StyledUser className="user-banner">
      <div className="user-info">
        <EditUserAvatar {...{user, currentUser, handleChange, handleSubmit, imagePlaceholderRef}} />

        <div className="user-info-text">
          <ul>
            <li className="user-name">
              <h3><UserLink user={user} /></h3>
              {user.occupation &&
              <span>
                {user.occupation}
              </span>}
            </li>
            <li>
              <ReactMarkdown source={user.bio} />
            </li>
            {/*<li>*/}
            {/*Admin: Facebook Developer Circles Lagos*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*Skills: Ruby on Rails, ReactJS*/}
            {/*</li>*/}
            <li className="social-links">
              {['twitter','facebook', 'linkedin', 'github'].map(socialAcc => (
                user[`${socialAcc}_profile`] &&
                <a target="_blank" href={addHttp(user[`${socialAcc}_profile`])}>
                  <Icon name={socialAcc} />
                </a>
              ))}

              {user.site_link &&
              <a target="_blank" href={addHttp(user.site_link)}>
                <Icon name="linkify"/>
              </a>
              }
            </li>
            {isLoggedInUser && !handleChange &&
              <li>
                <Button.Link className="profile-edit-btn" to={`${userProfileLink}/settings`}>
                  <Icon name="edit" /> Edit
                </Button.Link>
              </li>
            }

          </ul>
        </div>
        {/*<div>*/}
        {/*<Button.Link to={`${userProfileLink}/message`}>Message</Button.Link>*/}
        {/*</div>*/}

      </div>

      {children}
    </StyledUser>
  )
}

export default UserProfile