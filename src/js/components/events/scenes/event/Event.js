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
import Button from 'js/components/shared/button'
import AddComment from 'js/components/shared/comments/add-comment'
import Announcements from 'js/components/shared/announcements'
import Members from 'js/components/shared/members'
import ContentEditable from 'js/components/shared/content-editable'

const StyledEvent = styled.div`
  .event-description {
    margin-bottom: 4rem;
  }
  
  .sidebar .announcement {
    color: #444;
  }
  
  p {
    font-size: 1.2rem;
    font-weigth: 300;
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
  createAnnouncement,
  updateAnnouncement,
}) => {

  if (event.loading) {
    return <Loading />
  }

  const isStakeHolder = event.is_stakeholder

  const {title, description, featured_image, start_date, start_time,
          interested_persons, organizers, announcements, comments} = event

  const noOrganizersYet = !organizers || !Object.keys(organizers).length > 0
  return (
    <StyledEvent activeLink={activeLink} className="app-container">
      <ContentSection>
        <EventBanner {...{...event, community, handleChange, handleSubmit, attendEvent}} />

        <ContentSection.Body>
          <ContentPanel title="Description">
            <div className="event-description">
              <ContentEditable propName="description"
                               type="textarea"
                               canEdit={isStakeHolder}
                               defaultValue={description}
                               onChange={handleChange}
                               onSubmit={handleSubmit}>
                <ReactMarkdown escapeHtml={false} source={description || 'Click to edit. In markdown, if you wish :)'} />
              </ContentEditable>
            </div>
          </ContentPanel>

          <ContentPanel title="Announcements">
            <Announcements {...{announcements, createAnnouncement, updateAnnouncement,
                            canCreateAnnouncement: isStakeHolder,
                            recipient: event,
                            recipient_type: 'Event'}} />

          </ContentPanel>

          <ContentPanel title="Meet the organizers">
            <Members {...{members: organizers}} />
            {noOrganizersYet && isStakeHolder &&
              <Button.Link to={`/communities/${community.id}/events/${event.id}/backstage/settings`}>
                Go backstage to add organizers
              </Button.Link>}
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