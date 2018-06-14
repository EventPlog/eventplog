import React from 'react'
import styled from 'styled-components'

// internal components
import EventsSection from 'js/components/events/scenes/events/components/events-section'
import ContentSection from 'js/components/shared/content-section'
import { media } from 'js/styles/mixins'
import ContentPanel from 'js/components/shared/content-panel'
import Comments from 'js/components/shared/comments'
import ReactMarkdown from 'react-markdown'
import EventSidebar from './components/event-sidebar'
import EventBanner from './components/event-banner'
import Loading from 'js/components/shared/loading'
import EventOrganizers from './components/event-organizers'
import EventAnnouncements from './components/event-announcements'
import AddComment from './components/add-comment'

const StyledEvent = styled.div`
  .event-description {
    margin-bottom: 4rem;
  }
  
  .sidebar .announcement {
    color: #444;
  }
  
  .comments-section {
  }
`

const Event = ({
  event = {},
  community,
  activeLink,
  events_suggestions = [],
  communities_suggestions = []
}) => {

  if (event.loading) {
    return <Loading />
  }

  const {title, description, featured_image, start_date, start_time,
          interested_persons, organizers, announcements, comments} = event
  return (
    <StyledEvent activeLink={activeLink} className="app-container">
      <ContentSection>
        <EventBanner {...event} />

        <ContentSection.Body>
          <ContentPanel title="Description">
            <div className="event-description">
              <ReactMarkdown escapeHtml={false} source={description} />
            </div>
          </ContentPanel>

          <ContentPanel title="Announcements">
            <EventAnnouncements {...{announcements}} />
          </ContentPanel>

          <ContentPanel title="Meet the organizers">
            <EventOrganizers {...{organizers}} />
          </ContentPanel>

        </ContentSection.Body>

        <EventSidebar {...{announcements, events_suggestions, communities_suggestions}}/>

        <ContentSection.FullRow>
          <ContentSection.Body>
            <ContentPanel title="Ask the organizers">
              <AddComment />
              <Comments comments={comments} />
            </ContentPanel>
          </ContentSection.Body>
        </ContentSection.FullRow>

      </ContentSection>

    </StyledEvent>
  )
}

export default Event;