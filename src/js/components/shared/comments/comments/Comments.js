import React from 'react'
import styled from 'styled-components'

// internal
import Comment from '../comment'
import { media } from 'js/styles/mixins'
import AddComment from 'js/components/shared/comments/add-comment'

const StyledComments = styled.div`
  margin-top: 2rem;
  max-width: 820px;
  
  .comment-card + .comment-card {
    margin-top: 3rem;
  }
  
  .replies {
    ${
       media.phone`
         padding-left: 10px;
         margin-left: 5px;
         border-left: 1px solid #aaa;
       `
    }
    
    .comment-card + .comment-card {
      margin-top: 1rem;
    }
  
    .new-comment-card {
      margin: 1rem 0;
    }
    
    .meta {
      ${
        media.desktop`
          display: none;
        `
      }
      
      ${
        media.tablet`
          display: none;
        `
      }
    }
  }
`

const Comments = function({
  className,
  comments = {},
  createComment,
  updateComment,
  textField = 'body',
  canReply = true,
  ...otherProps
}) {
  const { loading, error, data = [], meta = {} } = comments
  return (
    <StyledComments className={`comments-section ${className}`} {...otherProps}>
      {data && data.map(comment =>
        (comment.deleted && comment.responses.length < 1) || !comment[textField]
          ? ''
          : <Comment {...{ comment, createComment, textField, canReply, updateComment}}>
              <div className={`replies comment-card ${className}`}>
                {comment.responses && comment.responses.map(response =>
                  <Comment {...{ comment: response, textField, canReply,
                            createComment, updateComment}} />
                )}
                {canReply &&<AddComment placeholder="Reply"
                                        recipient_id={comment.id}
                                        recipient_type="Comment"
                                        trackable_id={comment.trackable_id}
                                        trackable_type={comment.trackable_type}
                                        parentComment={comment}
                                        createComment={createComment} />}
              </div>
            </Comment>
      )}
    </StyledComments>
  )
}

Comments.Comment = Comment

export default Comments