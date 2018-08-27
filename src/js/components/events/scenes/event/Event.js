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
import AddComment from 'js/components/shared/comments/add-comment'
import AboutEvent from '../about-event'
import EventDiscussion from 'js/components/event-discussions'
import EventPictures from '../event-pictures'
import EventResources from '../event-resources'
import Tab from 'js/components/shared/tab'
import Report from 'js/components/feedback/scenes/feedback-report'
import { media } from 'js/styles/mixins'

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
  
  .ui.segment {
    border: none;
    box-shadow: none;
  }
  
  .ui.pointing.menu {
    flex-wrap: wrap;
    background: ${props => props.theme.gray};
    margin-right: 1rem;
    
    ${
      media.phone`
        margin: 0;
      `
    }
  }
  
  section.main-body {
    margin: 0;
  }
  
  .comments-section {
    ${
      media.phone`
        margin: 0 1rem;
      `
    }
  }
`

const Event = ({
  event = {},
  community,
  activeLink,
  past_events = {},
  handleChange,
  handleSubmit,
  attendEvent,
  getComments,
  createComment,
  updateComment,
  toggleVisibilityStatus,
}) => {

  if (event.loading) return <Loading />
  if (event.error) return <Loading.Error msg={event.error} />

  const isStakeHolder = event.is_stakeholder

  const { announcements, comments } = event

  const picLable = () => <div>Pictures</div>
  const getPanes = () => {
    return [
      {name: `About`, content: AboutEvent },
      {name: `Discussion (${event.discussion_comments_count})`, content: EventDiscussion },
      {name: `Pictures (0)`, content: EventPictures },
      {name: `Resources (0)`, content: EventResources },
      {name: `Report (shown)`, content: Report },
    ]
  }

  return (
    <StyledEvent activeLink={activeLink} className="app-container">
      <ContentSection>
        <EventBanner {...{...event, community, handleChange,
                            handleSubmit, attendEvent, toggleVisibilityStatus}} />

        <ContentSection.Body>
          <Tab panes={getPanes()} />
        </ContentSection.Body>

        <EventSidebar  {...{community,
                            announcements,
                            past_events,
                            attendEvent}}/>

        <ContentSection.FullRow>
          <ContentSection.Body>
            <ContentPanel className="comments-section" title="Ask the organizers">
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