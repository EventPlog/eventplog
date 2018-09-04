import React from 'react'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'


// ======= INTERNAL =========
import Button from 'js/components/shared/button'

const StyledLoader = styled.div`
`

const PictureUploader = ({
  imageInputRef,
  handleImageChange,
  showImageSelectOptions
}) => {
  return (
    <StyledLoader>
      <input ref={imageInputRef}
             onChange={handleImageChange}
             className="hidden"
             id="upload-img"
             type="file"
             name="image"
             accept="image/*" />,
      <Button className="btn-right"
              onClick={showImageSelectOptions}>
        <Icon className="image" />
      </Button>
    </StyledLoader>
  )
}

export default PictureUploader