import React from 'react'
import { Image } from 'semantic-ui-react'
import styled from 'styled-components'

// ========= INTERNAL =========
import { getUserAvatar } from 'js/utils'

const StyledUserAvatar = styled.div`
  .ui.avatar.image {
    width: 2.2rem;
    height: 2.2rem;
  }
  
  span {
    margin-left: 0.5rem;
  }
`

const UserAvatar = ({
  user
}) => (
  <StyledUserAvatar>
    <Image src={getUserAvatar(user)} avatar />
    <span>{user.less_formal_name}</span>
  </StyledUserAvatar>
)

export default UserAvatar