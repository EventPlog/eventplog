import React from 'react'
import styled from 'styled-components'
import { media } from 'js/styles/mixins'

const StyledComment = styled.div`
  display: flex;
  
  ${
    media.phone`
      flex-direction: column;
    `
  }
    
  .avatar {
    width: 60px;
    height: 60px;
    margin: 0 auto 0.7rem auto;
    background-size: cover;
    border-radius: 50%;
    
    ${
      media.phone`
        width: 40px;
        height: 40px;
        margin: 0 0.7rem 0.7rem 0;
      `
    }
  }
  
  .commenter {
    margin-right: 1rem;
    max-width: 100px;
    
    ${
      media.phone`
        max-width: 100%;
      `
    }
    
    ${
      media.phone`
        margin-right: 0.5rem;
        display: flex;
      `
    }
  }
  
  .meta {
    font-size: 0.9rem;
    text-transform: capitalize;
    color: #888;
  }
  
  .full-name {
    white-space: nowrap;
  }
  
  .comment {
    flex: 1;
    p {
      font-size: 1.1rem;
      font-weight: 400;
      
      code {
        background: #ffff0066;
        padding: 5px;
        color: #000;
        font-weight: 600;
      }
    }
    
    > div + div {
      margin-top: 1rem;
    }
    
    > .comment-card {
       padding-top: 1rem; 
       
    }
    
    
    > div:not(.comment-card) {
      background: #eee;
      padding: 1rem;
      border-radius: 10px;
    }
  }
`

const Comment = ({
  className = '',
  comment = {},
  children,
  ...otherProps
}) => {
  const {first_name, last_name, avatar_url, community_role} = comment.user;
  return (
    <StyledComment className={`comment-card ${className}`} {...otherProps}>
      <div className="commenter">
        <div className="avatar" style={{
                  backgroundImage: `url(${avatar_url || '/sample-avatar.jpg'}`
                }} />
        {first_name &&
          <div className="meta">
            <div className="full-name">
              {`${first_name} ${last_name}`}
            </div>
            <div className="role">
              {community_role || 'Member'}
            </div>
          </div>}
      </div>
      <div className="comment">
        {children}
      </div>
    </StyledComment>
  )
}

Comment.Replies = ({
  className,
  children
}) => (
  <div className={`replies comment-card ${className}`}>
    { children }
  </div>
)

export default Comment