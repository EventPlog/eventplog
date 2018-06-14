import React from 'react'
import ReactMarkdown from 'react-markdown'

// internal
import CommunitiesSection from 'js/components/events/scenes/events/components/communities-section'
import Sidebar from 'js/components/shared/sidebar'
import ContentSection from 'js/components/shared/content-section'

const EventSidebar = ({
  announcements,
  communities_suggestions
}) => (
  <ContentSection.Sidebar className="announcements">
    {announcements &&
      <Sidebar title="Latest Announcement">
        <div>
          <div className="text-muted">
            <ul>
              <li>{`${announcements[0].announcer.first_name} ${announcements[0].announcer.last_name}`}</li>
              <li>{announcements[0].publish_date} | {announcements[0].publish_time}</li>
            </ul>
          </div>
          <p className="announcement">
            <ReactMarkdown source={announcements[0].body} />
          </p>
        </div>
      </Sidebar>}
    <CommunitiesSection {...{communities: communities_suggestions}} />
  </ContentSection.Sidebar>
)

export default EventSidebar