import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

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

const EventAnnouncements = ({ announcements }) => (
  <StyledAnnouncements className="announcements">
    <ul>
      {announcements && announcements.map(({announcer, ...announcement}) => (
        <li>
          <div className="title">
            {`${announcer.first_name} ${announcer.last_name}`}
          </div>
          <div className="meta">
            {announcement.publish_date} | {announcement.publish_time}
          </div>
          <ReactMarkdown source={announcement.body} />
        </li>
      ))}
    </ul>
  </StyledAnnouncements>
)

export default EventAnnouncements