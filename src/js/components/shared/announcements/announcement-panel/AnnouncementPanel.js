import React from 'react'
import styled from 'styled-components'

// ========= INTERNALS =========

import { media } from 'js/styles/mixins'

const StyledComment = styled.div`
  .annoucement {
     flex: 1;
  }
  
  .btn-delete {
    float: right;
    padding: 5px;
    margin-top: -10px;
    margin-right: 5px;
    
    i {
      margin: 0;
    }
  }
`

const CommentPanel = ({
  className = '',
  children,
  announcement = {},
  user = {},
  ...otherProps
}) => {
  return (
    <StyledComment className={`announcmement-panel ${className}`}>
      <div className="title">
        {`${user.first_name} ${user.last_name}`}
      </div>
      <div className="meta">
        {announcement.publish_date || (new Date).toDateString() } | {announcement.publish_time || (new Date).toTimeString()}
      </div>
      <div className="announcement">
        {children}
      </div>
    </StyledComment>
  )
}

export default CommentPanel