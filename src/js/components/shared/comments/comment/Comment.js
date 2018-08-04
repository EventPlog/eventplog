import React from 'react'
import styled, { css } from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { Icon } from 'semantic-ui-react'

// ========= INTERNALS =========

import { media } from 'js/styles/mixins'
import CommentPanel from '../CommentPanel'
import ContentEditable from 'js/components/shared/content-editable'
import Button from 'js/components/shared/button'

const styles = css`
  position: relative;
  
  .btn-delete {
    background: white;
    color: #ccc;
    border-color: #ccc;
    position: absolute;
    right: 0;
    
    &:hover {
      background: var(--activeLink);
      color: white;
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
  textField = 'body',
  canReply = true,
  ...otherProps
}) => {
  const currentUserIsOwner = (!comment.deleted && comment.user.id == current_user.id)
  const renderCommentText = comment.deleted
    ? <div className="deleted-comment">This comment has been deleted</div>
    : <ReactMarkdown source={comment[textField]} />
  return (
    <CommentPanel className={className} user={comment.deleted || comment.anonymous ? {} : comment.user}>
      {currentUserIsOwner && <Button className="btn-delete" onClick={deleteComment}>
                               <Icon className="delete" />
                             </Button>}
      <ContentEditable propName={textField}
                       type="textarea"
                       canEdit={currentUserIsOwner}
                       defaultValue={comment[textField]}
                       onChange={handleChange}
                       onSubmit={updateComment}>
        {renderCommentText}
      </ContentEditable>
      {children}
    </CommentPanel>
  )
}

export default styled(Comment)`${styles}`