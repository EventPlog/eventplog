import React from 'react'
import { Image, Icon } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

// =========== INTERNAL ============
import Nav from 'js/components/shared/nav'
import Button from 'js/components/shared/button'
import ImageUploader from 'js/components/shared/image-uploader'
import { media } from 'js/styles/mixins'
import Loading from 'js/components/shared/loading'

import {
  addHttp,
  getUserAvatar,
  genUserProfileLink,
} from 'js/utils'

const styles = css`
    width: 13rem;
    height: 13rem;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    
    button {
      border-color: #fff;
      color: #fff;
      padding: 1rem;
    }
    
    .upload-btn {
      display: none;
    }
    
    &:hover {
      .upload-btn {
        display: block;
      }
    }
    
    .save-btn {
      background: ${props => props.theme.green};
    }
    
    .cancel-btn {
      margin-left: 1rem;
      background: ${props => props.theme.red};
    }
  
`

const EditUserAvatar = ({
  user = {},
  currentUser = {},
  imagePlaceholderRef,
  handleSubmit,
  handleChange,
  className,
  children,
}) => {

  const userAvatar = getUserAvatar(user)
  const isLoggedInUser = user.id == currentUser.id

  return (
    <div className={`${className} avatar-medium`} style={{backgroundImage: `url(${userAvatar})`}}>
      {(isLoggedInUser || currentUser.admin) && handleChange &&
        <span className="upload-btn-controls">
          <ImageUploader setImage={(image) => handleChange('avatar_url', image)}
                         currentImage={userAvatar}
                         persistImage={handleSubmit}
                         imagePlaceholderRef={imagePlaceholderRef} />
        </span>
      }
    </div>
  )
}

export default styled(EditUserAvatar)`${styles}`