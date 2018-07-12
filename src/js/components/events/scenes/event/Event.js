import React from 'react'
import styled from 'styled-components'

// internal components
import ContentSection from 'js/components/shared/content-section'
import ContentPanel from 'js/components/shared/content-panel'
import Comments from 'js/components/shared/comments'
import ReactMarkdown from 'react-markdown'
import EventSidebar from './components/event-sidebar'
import EventBanner from './components/event-banner'
import Loading from 'js/components/shared/loading'
import EventAnnouncements from './components/event-announcements'
import AddComment from 'js/components/shared/comments/add-comment'
import Members from 'js/components/shared/members'
import ContentEditable from 'js/components/shared/content-editable'

const StyledEvent = styled.div`
  .event-description {
    margin-bottom: 4rem;
  }
  
  .sidebar .announcement {
    color: #444;
  }
  
  .event-description {
    ul {
      list-style: inherit;
      margin-left: 2rem;
    }
    
    textarea {
      min-height: 200px;
    }
  }
  
  .content-body {
    > .add-comment {
      margin-top: 2rem;
    }
  }
`

const Event = ({
  event = {},
  community,
  activeLink,
  events_suggestions = [],
  communities_suggestions = [],
  handleChange,
  handleSubmit,
  attendEvent,
  createComment,
  updateComment,
}) => {

  if (event.loading) {
    return <Loading />
  }

  const {title, description, featured_image, start_date, start_time,
          interested_persons, organizers, announcements, comments} = event
  return (
    <StyledEvent activeLink={activeLink} className="app-container">
      <ContentSection>
        <EventBanner {...{...event, handleChange, handleSubmit, attendEvent}} />

        <ContentSection.Body>
          <ContentPanel title="Description">
            <div className="event-description">
              <ContentEditable onChange={handleChange}
                               onSubmit={handleSubmit}
                               type="textarea"
                               propName="description">
                {
                  ({onClick, ...props}) =>
                  <div onClick={(e) => onClick(e, description)} {...props}>
                    <ReactMarkdown escapeHtml={false} source={description || 'Click to edit. In markdown, if you wish :)'} />
                  </div>
                }
              </ContentEditable>
            </div>
          </ContentPanel>

          <ContentPanel title="Announcements">
            <EventAnnouncements {...{announcements}} />
          </ContentPanel>

          <ContentPanel title="Meet the organizers">
            <Members {...{members: organizers}} />
          </ContentPanel>

        </ContentSection.Body>

        <EventSidebar  {...{community,
                            announcements,
                            events_suggestions,
                            attendEvent}}/>

        <ContentSection.FullRow>
          <ContentSection.Body>
            <ContentPanel title="Ask the organizers">
              <Comments {...{comments, createComment, updateComment }} />

              <AddComment placeholder="What would you like to ask/suggest?"
                          recipient_id={event.id}
                          recipient_type="Event"
                          trackable_id={event.id}
                          trackable_type="Event"
                          createComment={createComment} />

            </ContentPanel>
          </ContentSection.Body>
        </ContentSection.FullRow>

      </ContentSection>

    </StyledEvent>
  )
}

export default Event;