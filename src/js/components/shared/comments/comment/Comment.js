import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { Icon } from 'semantic-ui-react'

// ========= INTERNALS =========

import { media } from 'js/styles/mixins'
import CommentPanel from '../CommentPanel'
import ContentEditable from 'js/components/shared/content-editable'
import Button from 'js/components/shared/button'

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
      padding: 1rem;
      border-radius: 10px;
    }
  }
  
`

const Comment = ({
  className = '',
  comment = {},
  handleChange,
  updateComment,
  children,
  current_user,
  deleteComment,
  ...otherProps
}) => {
  const currentUserIsOwner = (!comment.deleted && comment.user.id == current_user.id)
  const renderCommentText = comment.deleted
    ? <div className="deleted-comment">This comment has been deleted</div>
    : <ReactMarkdown source={comment.body} />
  return (
    <CommentPanel user={comment.deleted ? {} : comment.user}>
      {currentUserIsOwner && <Button inverted className="btn-delete" onClick={deleteComment}>
        <Icon className="delete" />
      </Button>}
      {!currentUserIsOwner && renderCommentText}
      {currentUserIsOwner && <ContentEditable onChange={handleChange}
                       onSubmit={updateComment}
                       type="textarea"
                       propName="body">
        {
          ({onClick, ...props}) =>
            <div onClick={(e) => onClick(e, comment.body)} {...props}>
              <ReactMarkdown source={comment.body} />
            </div>
        }
      </ContentEditable>}
      {children}
    </CommentPanel>
  )
}

export default Comment