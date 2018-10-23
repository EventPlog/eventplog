import React from "react";
import styled from "styled-components";
import {darken} from "polished";

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
import Speakers from "js/components/speakers";
import Tab from "js/components/shared/tab";
import Report from "js/components/feedback/scenes/feedback-report";
import {media} from "js/styles/mixins";
import {genEventLink} from "js/utils";

const StyledEvent = styled.div`
  .event-description {
    margin-bottom: 4rem;
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
  }
  
  .comments-section {
    ${
      media.phone`
        margin: 0 1rem;
      `
    }
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

const Event = ({
  event = {},
  loading,
  error,
  community,
  activeLink,
  past_events = {},
  handleChange,
  handleSubmit,
  attendEvent,
  getComments,
  createComment,
  updateComment,
  imagePlaceholderRef,
  toggleVisibilityStatus,
  activeIndex,
}) => {

  if (loading || event.loading) return <Loading />
  if (error || event.error) return <Loading.Error msg={error || event.error} />

  const { event_discussion = {}, announcements, comments } = event

  const getPanes = () => {
    return [
      {name: `About`, content: AboutEvent },
      {name: `Speakers`, content: Speakers },
      {name: `Feedback`, content: Report },
      {name: `Discussion (${event_discussion.comments_count || 0})`, content: Discussions },
      {name: `Slides & Resources`, content: Resources },
    ]
  }

  const eventLink = genEventLink(event, community)

  const { title, description, featured_image} = event
  return (
    <StyledEvent activeLink={activeLink}>
      <EventBanner {...{...event, community, handleChange, imagePlaceholderRef,
        handleSubmit, attendEvent, eventLink, toggleVisibilityStatus}} />

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