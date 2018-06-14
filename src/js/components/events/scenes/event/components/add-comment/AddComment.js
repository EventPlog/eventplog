import React from 'react'
import styled, {css} from 'styled-components'

// internal
import Comment from 'js/components/shared/comments/Comment'
import Button from 'js/components/shared/button'
import TextArea from 'js/components/shared/text-area'
import Auth from 'js/auth'
import { media } from 'js/styles/mixins'

const AddCommentStyles = styled.div`
  margin-top: 2rem;
  padding-bottom: 2rem;
  max-width: 820px;
  
  .new-comment-card {
    ${
      media.phone`
        flex-direction: row;
      `
    }
  }
  
  .avatar {
    width: 50px;
    height: 50px;
    
    ${
      media.phone`  
        width: 30px;
        height: 30px;
        margin: 0;
      `
    }
  }
  
  .comment {
    display: flex;
      
    ${
      media.phone`
        flex-direction: column;
      `
    }
    
    button {
      max-height: 50px;
      margin-left: 1rem;
      align-self: center;
      
      ${
        media.phone`
          align-self: end;
          margin-left: 0;
          margin-top: 1rem;
        `
      }
    }
  }
`
const AddComment = ({ className, comment = {} }) => (
  <AddCommentStyles>
    <Comment className="new-comment-card" comment={{...comment, user: Auth.currentUser()}}>
      <TextArea placeholder="What would you like to know or suggest?">
        {comment.body}
      </TextArea>
      <Button>Send</Button>
    </Comment>
  </AddCommentStyles>
)


export default AddComment