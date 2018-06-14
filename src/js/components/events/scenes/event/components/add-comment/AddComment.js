import React from 'react'
import styled, {css} from 'styled-components'
import Comment from 'js/components/shared/comments/Comment'
import Button from 'js/components/shared/button'
import TextArea from 'js/components/shared/text-area'
import Auth from 'js/auth'

const AddCommentStyles = styled.div`
  margin-top: 2rem;
  padding-bottom: 2rem;
  max-width: 820px;
  
  .avatar {
    width: 50px;
    height: 50px;
  }
  
  .comment {
    display: flex;
    
    button {
      max-height: 50px;
      margin-left: 1rem;
      align-self: center;
    }
  }
`
const AddComment = ({ className, comment = {} }) => (
  <AddCommentStyles>
    <Comment comment={{...comment, user: Auth.currentUser}}>
      <TextArea placeholder="What would you like to know or suggest?">
        {comment.body}
      </TextArea>
      <Button>Send</Button>
    </Comment>
  </AddCommentStyles>
)


export default AddComment