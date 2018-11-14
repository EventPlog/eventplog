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
    `
  }
  .avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-size: cover;
    
    ${
      media.phone`
        width: 7rem;
        height: 7rem;
      `
    }
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
    <span>{(user.less_formal_name || '').toUpperCase()}</span>
  </StyledUserAvatar>
)

export default UserAvatar