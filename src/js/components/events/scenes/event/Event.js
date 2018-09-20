import React from 'react'
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components'
import { darken } from 'polished'
import { Link } from 'react-router-dom'

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
import EventPictures from 'js/components/event-pictures'
import Resources from 'js/components/resources'
import Tab from 'js/components/shared/tab'
import Report from 'js/components/feedback/scenes/feedback-report'
import { media } from 'js/styles/mixins'
import { genEventLink } from 'js/utils'

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
  
  .quick-menu-holder {
    background: rgba(0,0,0,0.5);
    width: 100%;
    position: absolute;
    z-index: 100;
  }
  
  .ui.fluid.item.menu {
    margin: 0;
    background-color: transparent;
    border-radius: 0;
    opacity: 0.9;
    
    a {
      color: ${props => props.theme.gray};
      
      &:hover {
        color: var(--activeLink);
      }
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

const EventResources = ({event = {}}) => (
  <Resources recipient_id={event.id}
             recipient_type="Event" />
)

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
  activeIndex,
}) => {

  if (event.loading) return <Loading />
  if (event.error) return <Loading.Error msg={event.error} />

  const isStakeHolder = event.is_stakeholder

  const { event_discussion = {}, announcements, comments } = event

  const getPanes = () => {
    return [
      {name: `About`, content: AboutEvent },
      {name: `Report/Reviews`, content: Report },
      {name: `Discussion (${event_discussion.comments_count})`, content: Discussions },
      {name: `Slides & Resources`, content: Resources },
    ]
  }

  const eventLink = genEventLink(event, community)

  return (
    <StyledEvent activeLink={activeLink}>

        {event.is_stakeholder &&
          <div className="quick-menu-holder">
            <div className="app-container">
              <Menu fluid widths={3}>
                <Menu.Item name='Edit Event'>
                  <Link to={`${eventLink}/backstage/settings?activeIndex=1`}>Edit Event</Link>
                </Menu.Item>
                <Menu.Item name='Upload Guests CSV'>
                  <Link to={`${eventLink}/backstage/guests?activeIndex=1`}>Upload Guests CSV</Link>
                </Menu.Item>
                <Menu.Item name='Check In Guests'>
                  <Link to={`${eventLink}/backstage/guests`}>Check In Guests</Link>
                </Menu.Item>
              </Menu>
            </div>
          </div>}
        <EventBanner {...{...event, community, handleChange,
          handleSubmit, attendEvent, toggleVisibilityStatus}} />

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