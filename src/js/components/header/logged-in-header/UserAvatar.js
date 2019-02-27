import React from 'react'
import { Image } from 'semantic-ui-react'
import styled from 'styled-components'

// ========= INTERNAL =========
import { getUserAvatar } from 'js/utils'
import { media } from 'js/styles/mixins'

const StyledUserAvatar = styled.div`
  display: flex;
  align-items: center;
  
  ${
    media.phone`
      flex-direction: column;
      padding-top: 0;
      padding-bottom: 0;
    `
  }
  .avatar {
    width: 2.7rem;
    height: 2.7rem;
    border-radius: 50%;
    background-size: cover;
  }
  
  span {
    margin-left: 0.5rem;
    
    ${
      media.phone`
        margin: 1rem auto;
      `
    }
  }
`

const UserAvatar = ({
  user = {}
}) => (
  <StyledUserAvatar>
    <div className="avatar"
         style={{backgroundImage: `url(${getUserAvatar(user)})`}}>
    </div>
  </StyledUserAvatar>
)

export default UserAvatar