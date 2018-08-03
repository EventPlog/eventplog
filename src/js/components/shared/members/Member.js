import React from 'react'
import styled from 'styled-components'

import ContentEditable from 'js/components/shared/content-editable'
import { media } from 'js/styles/mixins'
import roleOptions from 'js/utils/userRoleOptions'

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

const Members = ({ member, handleChange, handleSubmit, children }) => (
  <StyledEventOrganizers>
    <div className="member-img" style={{
          backgroundImage: `url(${member.avatar_url})`
        }} />
    <div className="meta">
      <div className="title">
        {`${member.display_name}`}
      </div>
      <div className="body">
        {children}
      </div>
    </div>
  </StyledEventOrganizers>
)

export default Members