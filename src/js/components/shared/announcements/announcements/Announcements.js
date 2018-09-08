import React from 'react'
import { Message } from 'semantic-ui-react'
import styled, { css } from 'styled-components'

// internal
import Announcement from '../announcement'
import { media } from 'js/styles/mixins'
import AddAnnouncement from '../add-announcement'
import Pagination from 'js/components/shared/pagination'
import ContentPanel from 'js/components/shared/content-panel'

const styles = css`
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
  getAnnouncements,
  createAnnouncement,
  updateAnnouncement,
  recipient_id,
  recipient_type,
  canCreateAnnouncement,
  ...otherProps
}) {
  const { data = [], meta = {}} = announcements
  return (
    <ContentPanel title={`Announcements (${meta.total_count || 0})`}
                  className={`announcements-section ${className}`} {...otherProps}>

      {canCreateAnnouncement &&
        <Message info>
          <Message.Header>Make announcements you want your guests to see</Message.Header>
            <p>Your guests get a notification with your message, so you can kep them updated.</p>
        </Message>}
      <ul>
        <li>
          {canCreateAnnouncement &&
          <AddAnnouncement placeholder="What would you like all your guests to know?"
                           recipient_id={recipient_id}
                           recipient_type={`${recipient_type}`}
                           trackable_id={`${recipient_id}`}
                           trackable_type={`${recipient_type}`}
                           createAnnouncement={createAnnouncement} />}
        </li>
        {data && data.map(announcement =>
          <li>
            <Announcement {...{ announcement, canCreateAnnouncement,
                                createAnnouncement, updateAnnouncement}} />
          </li>
        )}
      </ul>

      {
        meta && meta.total_pages && (data.length > 0 || meta.current_page > 1)
          ? <Pagination.ShowMoreButton totalPages={meta.total_pages}
                                       activePage={meta.current_page}
                                       caption="Show more announcements"
                                       className="show-more-btn"
                                       onPageChange={getAnnouncements} />
          : ''
      }
    </ContentPanel>
  )
}

Announcements.Announcement = Announcement

export default styled(Announcements)`${styles}`