import React from 'react'
import styled from 'styled-components'

// internal
import Announcement from './announcement'
import { media } from 'js/styles/mixins'
import AddAnnouncement from './add-announcement'

const StyledAnnouncements = styled.div`
  li {
    border-bottom: 1px solid #ddd;
    padding-bottom: 1rem;
    
    &:not(:last-child) {
      margin-bottom: 2rem; 
    }
  
    .title {
      color: #aaa;
      font-weight: 700; 
    }
    
    .meta {
      color: #aaa;
      font-size: 90%;
      margin-bottom: 0.5rem;
    }
  }
  
  code {
    background: #ffff0066;
    padding: 5px;
    color: #000;
    font-weight: 600;
  }
`

const Announcements = function({
  className,
  announcements,
  createAnnouncement,
  updateAnnouncement,
  recipient,
  recipient_type,
  ...otherProps
}) {
  return (
    <StyledAnnouncements className={`announcements-section ${className}`} {...otherProps}>
      <ul>
        {announcements && announcements.map(announcement =>
          <li>
            <Announcement {...{ announcement, createAnnouncement, updateAnnouncement}} />
          </li>
        )}
        <li>
          <AddAnnouncement placeholder="What'd you like everyone to know?"
                           recipient_id={recipient.id}
                           recipient_type={`${recipient_type}`}
                           trackable_id={`${recipient.id}`}
                           trackable_type={`${recipient_type}`}
                           createAnnouncement={createAnnouncement} />
        </li>
      </ul>

    </StyledAnnouncements>
  )
}

Announcements.Announcement = Announcement

export default Announcements