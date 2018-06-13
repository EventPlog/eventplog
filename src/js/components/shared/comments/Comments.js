import React from 'react'
import styled from 'styled-components'

// internal
import Comment from './Comment'
import { media } from 'js/styles/mixins'
import ReactMarkdown from 'react-markdown'

const StyledComments = styled.div`
  margin-top: 2rem;
  
  .comment-card + .comment-card {
    margin-top: 3rem;
  }
`

const Comments = function({
  className,
  comments,
  ...otherProps
}) {
  return (
    <StyledComments className={`comments-section ${className}`} {...otherProps}>
      {comments && comments.map(comment =>
        <Comment comment={comment}>
          <ReactMarkdown source={comment.body} />
          {comment.responses && comment.responses.map(response =>
            <Comment comment={response}>
              <ReactMarkdown source={response.body} />
            </Comment>
          )}
        </Comment>
      )}
    </StyledComments>
  )
}

Comments.Comment = Comment;

export default Comments