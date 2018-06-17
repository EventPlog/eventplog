import React from 'react'
import styled, {css} from 'styled-components'
import { Icon } from 'semantic-ui-react'

// internal
import Comment from 'js/components/shared/comments/Comment'
import Button from 'js/components/shared/button'
import TextArea from 'js/components/shared/text-area'
import Auth from 'js/auth'
import { media } from 'js/styles/mixins'

const AddCommentStyles = styled.div`
  margin-top: 2rem;
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
      `
    }
    
    button {
      max-height: 50px;
      margin-left: 1rem;
      align-self: center;
      height: 100%;
      max-width: 40px;
      padding: 0.6rem;
      
      ${
        media.phone`
          align-self: end;
          margin-left: 0;
          margin: auto 0 auto 0.5rem;
        `
      }
    }
  }
`
const AddComment = ({ className, placeholder, comment = {} }) => (
  <AddCommentStyles>
    <Comment className="new-comment-card" comment={{...comment, user: Auth.currentUser()}}>
      <TextArea placeholder={placeholder}>
        {comment.body}
      </TextArea>
      <Button>
        <Icon className="paper plane" />
      </Button>
    </Comment>
  </AddCommentStyles>
)


export default AddComment