import React from "react";
import styled from "styled-components";
import {lighten, darken} from "polished";

// internal components
import ContentSection from "js/components/shared/content-section";
import ContentPanel from "js/components/shared/content-panel";
import Comments from "js/components/shared/comments";
import EventSidebar from "./components/event-sidebar";
import EventBanner from "./components/event-banner";
import Loading from "js/components/shared/loading";
import AddComment from "js/components/shared/comments/add-comment";
import AboutEvent from "../about-event";
import EventDiscussion from "js/components/event-discussions";
import EventPictures from "js/components/event-pictures";
import Resources from "js/components/resources";
import Presentations from "js/components/presentations/scenes/presentations";
import Tab from "js/components/shared/tab";
import Report from "js/components/feedback/scenes/feedback-report";
import {media} from "js/styles/mixins";
import {genEventLink} from "js/utils";
import createLoader from 'js/components/shared/loading/createLoadable'


const EventNotFound = createLoader(() =>
  import('js/components/events/scenes/event/components/not-found' /* webpackChunkName: "EventNotFound" */), 'EventWithContainer')

const StyledEvent = styled.div`
  ${
    media.phone`
      background: ${props => props.theme.white};
    `
  }
  .event-description {
    margin-bottom: 4rem;
  }
  
  .app-container {
    background: transparent;
  }
  
  .sidebar .announcement {
    color: #444;
  }
  
  p {
    font-size: 1.1rem;
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
    background: transparent;
  }
  
  .ui.pointing.menu {
    flex-wrap: wrap;
    // background: ${props => props.theme.gray};
    margin-right: 1rem;
    
    ${
      media.phone`
        margin: 0;
      `
    }
    
    .item {
      color: var(--activeLink);
    }
  }
  
  section.main-body {
    margin: 0;
    
    ${
      media.phone`
        padding: 0;
      `
    }
  }
  
  .comments-section {
    ${
      media.phone`
        margin: 0;
      `
    }
  }
  
  .presentations.app-container {
    padding: 0;
  }
  
  .text-muted {
    color: ${props => props.theme.grayMedium};
  }
`

const Discussions = () => {

  const getPanes = () => {
    return [
      {name: `Conversations/Q and A`, content: EventDiscussion },
      {name: `Pictures only`, content: EventPictures },
    ]
  }

  return <Tab panes={getPanes()} />
}

const EventResources = ({eventId}) => (
  <Resources recipient_id={eventId} recipient_type="Event" />
)

const EventResources1 = ({eventId}) => (
  <div>Coming through...{eventId}</div>
)

const Event = ({
  event = {},
  comments = {},
  past_events = {},
  announcements = {},
  event_discussion = {},
  loading,
  error,
  community,
  activeLink,
  handleChange,
  handleSubmit,
  attendEvent,
  getComments,
  createComment,
  updateComment,
  imagePlaceholderRef,
  toggleVisibilityStatus,
  showRegistrationForm,
  activeIndex,
}) => {

  if (loading || event.loading) return <Loading />
  if (error || event.error) return <EventNotFound />

  const getPanes = () => {
    return [
      {name: `About`, content: AboutEvent },
      {name: `Feedback`, content: Report },
      {name: `Discussion (${event_discussion.comments_count || 0})`, content: Discussions },
      {name: `Slides & Resources`, content: Resources},
      {name: `Speakers`, content: Presentations },
    ]
  }

  const eventLink = genEventLink(event, community)

  const { title, description, featured_image} = event
  return (
    <StyledEvent className="event" activeLink={activeLink}>
      <EventBanner {...{...event, community, handleChange, eventLink,
                            imagePlaceholderRef, handleSubmit, attendEvent,
                            toggleVisibilityStatus, showRegistrationForm}} />

      <div className="app-container">
        <ContentSection>
          <ContentSection.Body>
            <Tab panes={getPanes()} {...{activeIndex}} />
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

      </div>
    </StyledEvent>
  )
}

export default Event;