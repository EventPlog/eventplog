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
import PictureUploader from 'js/components/shared/picture-uploader'

const AddCommentStyles = styled.div`
  max-width: 820px;
  margin-bottom: 1rem;
  
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
  
  
  .commenter {
    width: auto;
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
  setImage,
  submitBtnVisible = true,
  ...otherProps,
}) => {
  if (error) {
    return <Loading.Error msg={error} />
  }
  const newComment = { user: current_user }

  return (
    <AddCommentStyles className={`${className} add-comment`}>
      <CommentPanel className="new-comment-card" comment={newComment}>
        <div className="comment-card textarea-holder">
          <TextArea placeholder={placeholder}
                    name="body"
                    onChange={({target}) => handleChange(target.name, target.value)}
                    value={comment.body} />

          {image && <div className="uploaded-image-holder" ref={imagePlaceholderRef} >
                      <img src={image} />
                    </div> }
          {
            <span className="right-controls">
              <PictureUploader imageInputRef={imageInputRef}
                               setImage={setImage}
                               handleImageChange={handleImageChange}
                               imagePlaceholderRef={imagePlaceholderRef}
                               showImageSelectOptions={showImageSelectOptions} />
            </span>
          }
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