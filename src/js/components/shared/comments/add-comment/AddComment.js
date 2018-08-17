import React from 'react'
import styled, {css} from 'styled-components'
import { Icon } from 'semantic-ui-react'

// internal
import CommentPanel from 'js/components/shared/comments/CommentPanel'
import Button from 'js/components/shared/button'
import TextArea from 'js/components/shared/text-area'
import Auth from 'js/auth'
import { media } from 'js/styles/mixins'
import Loading from 'js/components/shared/loading'

const AddCommentStyles = styled.div`
  max-width: 820px;
  margin-top: 2rem;
  
  .new-comment-card {
    ${
      media.phone`
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
        margin-right: 5px;
      `
    }
  }
  
  .comment {
    display: block;
      
    ${
      media.phone`
      `
    }
    
    button.submit {
      margin-left: 1rem;
      align-self: center;
      padding: 0.6rem;
      height: auto;
      margin: 1rem 0;
      
      ${
        media.phone`
          align-self: end;
        `
      }
    }
  }
  
  .right-controls {
    position: absolute;
    right: 0;
  }
  
  .textarea-holder {
    background: transparent;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    position: relative;
    
    .textarea img {
      margin: 1rem 0;
      max-width: 90%;
    }
  }
  
  .uploaded-image-holder {
    border: 1px solid ${props => props.theme.gray};
    border-top: none;
    padding: 1rem;
    
    img {
      max-width: 100%;
    }
  }
`

const AddComment = ({
  className,
  placeholder,
  comment = {},
  image,
  parentComment,
  loading,
  error,
  handleChange,
  createComment,
  current_user,
  showImageSelectOptions,
  imageInputRef,
  imagePlaceholderRef,
  handleImageChange,
  submitBtnVisible = true,
  ...otherProps,
}) => {
  if (error) {
    return <Loading.Error msg={error} />
  }
  const submitComment = () => {
    const { recipient_id, recipient_type, trackable_id, trackable_type } = otherProps
    const updatedComment = {...comment, recipient_id, recipient_type, trackable_id, trackable_type}
    createComment(updatedComment, parentComment)
  }

  return (
    <AddCommentStyles className={`${className} add-comment`}>
      <CommentPanel className="new-comment-card" user={current_user}>
        <div className="comment-card textarea-holder">
          <TextArea placeholder={placeholder}
                    name="body"
                    onChange={({target}) => handleChange(target.name, target.value)}
                    value={comment.body} />

          {
            <span className="right-controls">
              <input ref={imageInputRef}
                     onChange={handleImageChange}
                     className="hidden"
                     id="upload-img"
                     type="file"
                     name="image"
                     accept="image/*" />
              <Button className="btn-delete"
                      onClick={showImageSelectOptions}>
                <Icon className="image" />
              </Button>
            </span>
          }
          {image && <div className="uploaded-image-holder" ref={imagePlaceholderRef} />}
        </div>

        {loading && <Loading />}
        {(comment.body || image) && !loading &&
          <Button className="submit"
                  onClick={createComment}>
            <Icon className="paper plane" /> Submit
          </Button>}
      </CommentPanel>
    </AddCommentStyles>
  )
}


export default AddComment