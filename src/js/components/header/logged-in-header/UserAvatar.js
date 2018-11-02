import React from 'react'
import { Image } from 'semantic-ui-react'
import styled from 'styled-components'

// ========= INTERNAL =========
import { getUserAvatar } from 'js/utils'

const StyledUserAvatar = styled.div`
  display: flex;
  align-items: center;
  
  .avatar {
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    background-size: cover;
  }
  
  span {
    margin-left: 0.5rem;
  }
`

const UserAvatar = ({
  user
}) => (
  <StyledUserAvatar>
    <div className="avatar"
         style={{backgroundImage: `url(${getUserAvatar(user)})`}}>
    </div>
    &nbsp;{user.less_formal_name}
  </StyledUserAvatar>
)

export default UserAvatar