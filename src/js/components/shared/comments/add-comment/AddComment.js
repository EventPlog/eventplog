import React from 'react'
import styled, {css} from 'styled-components'
import { Icon } from 'semantic-ui-react'

// internal
import CommentPanel from 'js/components/shared/comments/CommentPanel'
import Button from 'js/components/shared/button'
import TextArea from 'js/components/shared/text-area'
import Auth from 'js/auth'
import { media } from 'js/styles/mixins'

const AddCommentStyles = styled.div`
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

const AddComment = ({
  className,
  placeholder,
  comment = {},
  parentComment,
  handleChange,
  createComment,
  current_user,
  ...otherProps,
}) => {
  const submitComment = () => {
    const { recipient_id, recipient_type, trackable_id, trackable_type } = otherProps
    const updatedComment = {...comment, recipient_id, recipient_type, trackable_id, trackable_type}
    createComment(updatedComment, parentComment)
  }

  return (
    <AddCommentStyles className={`${className} add-comment`}>
      <CommentPanel className="new-comment-card" user={current_user}>
      <TextArea placeholder={placeholder}
                name="body"
                onChange={({target}) => handleChange(target.name, target.value)}
                value={comment.body} />

        <Button onClick={createComment}>
          <Icon className="paper plane" />
        </Button>
      </CommentPanel>
    </AddCommentStyles>
  )
}


export default AddComment