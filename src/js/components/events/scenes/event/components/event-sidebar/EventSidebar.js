import React from 'react'

// internal
import CommunitiesSection from 'js/components/events/scenes/events/components/communities-section'
import Sidebar from 'js/components/shared/sidebar'
import ContentSection from 'js/components/shared/content-section'

const EventSidebar = ({
  announcements,
  communities_suggestions
}) => (
  <ContentSection.Sidebar className="announcements">
    <Sidebar title="Latest Announcement">
      <div>
        <div className="text-muted">
          <ul>
            <li>Jeremy Collins</li>
            <li>10:30am | 24th March, 2018</li>
          </ul>
        </div>
        <p className="announcement">
          We’re moving the venue from NG_HUB to CIVIC HIVE. It’s on the 2nd floor, 42 Montgomergy road
        </p>
      </div>
    </Sidebar>
    <CommunitiesSection {...{communities: communities_suggestions}} />
  </ContentSection.Sidebar>
)

export default EventSidebar