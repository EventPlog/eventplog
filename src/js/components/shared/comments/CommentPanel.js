import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { lighten } from 'polished'

// ========= INTERNALS =========

import { media } from 'js/styles/mixins'
import colors from 'js/styles/theme/variables'

const StyledComment = styled.div`
  display: flex;
  
  ${
    media.phone`
      flex-direction: column;
    `
  }
    
  .avatar {
    width: 40px;
    height: 40px;
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
    text-align: center;
    overflow: hidden;
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
    
    > div:not(.comment-card) {
      background: #eee;
      background: ${props => lighten(0, props.theme.gray)}; 
      padding: 1rem;
      border-radius: 10px;
    }
  }
  
  .btn-delete {
    float: right;
    padding: 5px;
    margin-top: -10px;
    margin-right: 5px;
    
    i {
      margin: 0;
    }
  }
  
  .deleted-comment {
    color: #aaa;
  }
`

const CommentPanel = ({
  className = '',
  children,
  user = {},
  ...otherProps
}) => {
  const {display_name, avatar_url, community_role} = user
  return (
    <StyledComment className={`comment-card ${className}`}>
      <div className="commenter">
        <div className="avatar" style={{
                  backgroundImage: `url(${avatar_url || '/sample-avatar.png'}`
                }} />
        {display_name &&
        <div className="meta">
          <div className="full-name">
            {`${display_name}`}
          </div>
          {community_role && <div className="role">
                               {community_role}
                             </div>}
        </div>}
      </div>
      <div className="comment">
        {children}
      </div>
    </StyledComment>
  )
}

export default CommentPanel