import React from 'react'
import styled from 'styled-components'

// internal
import Comment from './Comment'
import ReactMarkdown from 'react-markdown'
import AddComment from 'js/components/shared/add-comment'
import { media } from 'js/styles/mixins'

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
  }
`

const Comments = function({
  className,
  comments,
  textField = 'body',
  ...otherProps
}) {
  return (
    <StyledComments className={`comments-section ${className}`} {...otherProps}>
      {comments && comments.map(comment =>
        <Comment comment={comment}>
          <ReactMarkdown source={comment[textField]} />
          {comment.responses && comment.responses.map(response =>
            <Comment.Replies>
              <Comment comment={response}>
                <ReactMarkdown source={response[textField]} />
              </Comment>
              <AddComment placeholder="Reply" />
            </Comment.Replies>
          )}
        </Comment>
      )}
    </StyledComments>
  )
}

Comments.Comment = Comment;

export default Comments