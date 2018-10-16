import React from 'react'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'


// ======= INTERNAL =========
import Button from 'js/components/shared/button'

const StyledLoader = styled.div`
`

const ImageUploader = ({
  image,
  imageInputRef,
  handleImageChange,
  showImageSelectOptions,
  saveImage,
  cancelChange,
}) => {
  return (
    <StyledLoader>
      <input ref={imageInputRef}
             onChange={handleImageChange}
             className="hidden"
             id="upload-img"
             type="file"
             name="image"
             accept="image/*" />
      {!image &&
        <Button className="btn-right upload-btn"
                onClick={showImageSelectOptions}>
          <Icon className="image" />
        </Button>}
      {image &&
        <span>
          <Button className="btn-right save-btn"
                  onClick={saveImage}>
            Save
          </Button>
          <Button className="btn-right cancel-btn"
                  onClick={cancelChange}>
            Cancel
          </Button>
        </span>
      }
    </StyledLoader>
  )
}

export default ImageUploader