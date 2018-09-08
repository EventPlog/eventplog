import React from 'react'
import ReactMarkdown from 'react-markdown'

// internal
import Sidebar from 'js/components/shared/sidebar'
import ContentSection from 'js/components/shared/content-section'

const EventSidebar = ({
  announcements = {},
  community,
  past_events,
  attendEvent
}) => {
  const {data = []} = announcements

  return (
    <ContentSection.Sidebar className="announcements">
      {data[0] &&
      <Sidebar title="Latest Announcement">
        <div>
          <div className="text-muted">
            <ul>
              <li>{`${data[0].user.display_name}`}</li>
              <li>{data[0].publish_date} | {data[0].publish_time}</li>
            </ul>
          </div>
          <p className="announcement">
            <ReactMarkdown source={data[0].body} />
          </p>
        </div>
      </Sidebar>}
      <Sidebar.Events title={`Past events from ${community.name}`}
        {...{events: past_events, attendEvent}} />
    </ContentSection.Sidebar>
  )
}

export default EventSidebar