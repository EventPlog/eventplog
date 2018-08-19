import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import ReactMarkdown from 'react-markdown'

// internal components
import ContentSection from 'js/components/shared/content-section'
import ContentPanel from 'js/components/shared/content-panel'
import Comments from 'js/components/shared/comments'
import EventSidebar from './components/event-sidebar'
import EventBanner from './components/event-banner'
import Loading from 'js/components/shared/loading'
import Button from 'js/components/shared/button'
import AddComment from 'js/components/shared/comments/add-comment'
import Announcements from 'js/components/shared/announcements'
import Members from 'js/components/shared/members'
import ContentEditable from 'js/components/shared/content-editable'
import QuickFeedbackForm from 'js/components/feedback/scenes/quick-feedback-form'

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
    .comment > div:not(.comment-card) {
      background: ${props => darken(0.085, props.theme.bg)};
    }
    
    > .add-comment {
      margin-top: 2rem;
    }
  }
  
  .btn-inline {
    display: inline-block;
  }
`

const Event = ({
  event = {},
  loading,
  error,
  organizers,
  community,
  activeLink,
  past_events = {},
  handleChange,
  handleSubmit,
  attendEvent,
  getComments,
  createComment,
  updateComment,
  createAnnouncement,
  updateAnnouncement,
}) => {

  if (loading) return <Loading />
  if (error || event.error) return <Loading.Error msg={error || event.error} />

  const isStakeHolder = event.is_stakeholder

  const {title, description, featured_image, start_date,
          start_time, given_feedback, show_feedback_url,
          is_attending, interested_persons,
          announcements, comments} = event

  const noOrganizersYet = !organizers || !Object.keys(organizers).length > 0
  const eventDue = (new Date(start_time)) <= (new Date())

  return (
    <StyledEvent activeLink={activeLink} className="app-container">
      <ContentSection>
        <EventBanner {...{...event, community, handleChange, handleSubmit, attendEvent}} />

        <ContentSection.Body>
          {is_attending && eventDue && (!given_feedback || show_feedback_url) && <QuickFeedbackForm />}
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
            <Members>
              {organizers && organizers.map(member =>
                <Members.Member member={member} />
              )}
            </Members>
            {noOrganizersYet && isStakeHolder &&
              <Button.Link className="btn-inline" to={`/communities/${community.id}/events/${event.id}/backstage/settings`}>
                Go backstage to add organizers
              </Button.Link>}
          </ContentPanel>

        </ContentSection.Body>

        <EventSidebar  {...{community,
                            announcements,
                            past_events,
                            attendEvent}}/>

        <ContentSection.FullRow>
          <ContentSection.Body>
            <ContentPanel title="Ask the organizers">
              <AddComment placeholder="What would you like to ask/suggest?"
                          recipient_id={event.id}
                          recipient_type="Event"
                          trackable_id={event.id}
                          trackable_type="Event"
                          createComment={createComment} />

              <Comments recipient_id={event.id}
                        recipient_type="Event"
                        {...{comments, createComment, updateComment, getComments }} />

            </ContentPanel>
          </ContentSection.Body>
        </ContentSection.FullRow>

      </ContentSection>

    </StyledEvent>
  )
}

export default Event;