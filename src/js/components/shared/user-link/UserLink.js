import React from 'react'
import { Link } from 'react-router-dom'
import { genUserProfileLink } from 'js/utils'

const UserLink = ({user}) => (
  <Link to={genUserProfileLink(user)}>
    {`${user.display_name}`}
  </Link>
)

export default UserLink