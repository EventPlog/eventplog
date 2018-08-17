import React from 'react'
import styled, { css } from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { Icon } from 'semantic-ui-react'

// ========= INTERNALS =========

import { media } from 'js/styles/mixins'
import CommentPanel from '../CommentPanel'
import ContentEditable from 'js/components/shared/content-editable'
import Button from 'js/components/shared/button'
import Loading from 'js/components/shared/loading'

const styles = css`
  position: relative;
  
  
  .comment {
    position: relative;
    /*flex-direction: column;*/
    
    img {
      display: block;
      margin: 1rem 0 0;
      max-width: 100%;
    }
  }
  
  i.save {
    background: ${props => props.theme.activeLink}
  }
`

const Comment = ({
  className = '',
  comment = {},
  loading,
  error,
  handleChange,
  updateComment,
  children,
  current_user,
  deleteComment,
  showImageSelectOptions,
  imageInputRef,
  imagePlaceholderRef,
  handleImageChange,
  textField = 'body',
  canReply = true,
  editing = false,
  commentBodyRef,
  editComment,
  ...otherProps
}) => {
  if (error) {
    return <Loading.Error msg={error} />
  }
  const currentUserIsOwner = (!comment.deleted && comment.user.id == current_user.id)
  const renderCommentText = comment.deleted
    ? <div className="deleted-comment">This comment has been deleted</div>
    : <div ref={commentBodyRef} >
        <ReactMarkdown source={comment[textField]} />
      </div>
  return (
    <CommentPanel className={className} user={comment.deleted || comment.anonymous ? {} : comment.user}>
      {currentUserIsOwner &&
        <span className="right-controls">
          <input ref={imageInputRef}
                 onChange={handleImageChange}
                 className="hidden"
                 id="upload-img"
                 type="file"
                 name="image"
                 accept="image/*" />
          <Button className="btn-delete" onClick={deleteComment}>
            <Icon className="delete" />
          </Button>
          <Button inverted={editing}
                  className="btn-delete"
                  onClick={editComment}>
            <Icon className={`${editing? 'save' : 'pencil'}`} />
          </Button>
        </span>
      }
      <ContentEditable propName={textField}
                       type="textarea"
                       canEdit={currentUserIsOwner && editing}
                       isEditing={editing}
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