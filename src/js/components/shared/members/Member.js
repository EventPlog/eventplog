import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { media } from 'js/styles/mixins'
import { genUserProfileLink } from 'js/utils'

const StyledEventOrganizers = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; 
  
  &:not(:last-child) {
    ${
      media.phone`
        margin-bottom: 2rem;
      `
    }
  }
  
  .member-img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-size: cover;
  }
  
  .meta {
    margin-top: 0.5rem;
  }
  
  .title {
    font-weight: 700;
  }
  
  .body {
    color: #888;
  }
`

const Members = ({
  className,
  member,
  handleChange,
  handleSubmit,
  children
}) => (
  <StyledEventOrganizers className="member">
    <div className="member-img" style={{
          backgroundImage: `url(${member.avatar_url})`
        }} />
    <div className="meta">
      <div className="title">
        <Link target="_blank"
              to={genUserProfileLink(member)}>
          {member.display_name}
        </Link>
      </div>
      <div className="body">
        {children}
      </div>
    </div>
  </StyledEventOrganizers>
)

export default Members