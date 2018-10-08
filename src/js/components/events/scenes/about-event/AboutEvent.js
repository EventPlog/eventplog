import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { darken } from 'polished'
import { Message } from 'semantic-ui-react'
import ReactMarkdown from 'react-markdown'

// internal components
import ContentPanel from 'js/components/shared/content-panel'
import Loading from 'js/components/shared/loading'
import Button from 'js/components/shared/button'
import Announcements from 'js/components/shared/announcements'
import Members from 'js/components/shared/members'
import ContentEditable from 'js/components/shared/content-editable'
import QuickFeedbackForm from 'js/components/feedback/scenes/quick-feedback-form'
import { genEventLink } from 'js/utils'

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
  organizers,
  community,
  activeLink,
  past_events = {},
  handleChange,
  handleSubmit,
  attendEvent,
  createComment,
  updateComment,
  getAnnouncements,
  createAnnouncement,
  updateAnnouncement,
}) => {

  if (event.loading) {
    return <Loading />
  }

  const isStakeHolder = event.is_stakeholder

  const {title, description, is_stakeholder,
          announcements, agenda} = event

  const noOrganizersYet = !organizers || !Object.keys(organizers).length > 0

  const eventShortLink = `${window.location.host}${genEventLink(event)}/register`
  return (
    <StyledEvent activeLink={activeLink}>
      <ContentPanel title="Description">
        <div className="event-description">
          <ContentEditable propName="description"
                           type="textarea"
                           canEdit={isStakeHolder}
                           defaultValue={description}
                           onChange={handleChange}
                           onSubmit={handleSubmit}>

            <ReactMarkdown escapeHtml={false}
                           source={description || (is_stakeholder ?'Click to edit. In markdown, if you wish :)' : 'None yet.')} />

          </ContentEditable>
        </div>
      </ContentPanel>

      <ContentPanel title="Agenda">
        <div className="event-agenda">
          <ContentEditable propName="agenda"
                           type="textarea"
                           canEdit={isStakeHolder}
                           defaultValue={agenda}
                           onChange={handleChange}
                           onSubmit={handleSubmit}>

            <ReactMarkdown escapeHtml={false}
                           source={agenda || (is_stakeholder ? 'Click to edit. In markdown, if you wish :)' : 'None yet.')} />

          </ContentEditable>
        </div>
      </ContentPanel>

      <Announcements {...{announcements, getAnnouncements,
        createAnnouncement, updateAnnouncement,
        canCreateAnnouncement: is_stakeholder,
        recipient_id: event.id,
        recipient_type: 'Event'}} />


      <ContentPanel title="Meet the organizers">
        <Members>
          {organizers && organizers.map(member =>
            <Members.Member member={member} />
          )}
        </Members>
        {noOrganizersYet && is_stakeholder &&
        <Button.Link className="btn-inline" to={`${genEventLink(event, event.community)}/backstage/settings`}>
          Go backstage to add organizers
        </Button.Link>}
      </ContentPanel>

      {is_stakeholder &&
        <ContentPanel title="Embed your registration form">
          <Message info>
            <p>Only you and other organizers can see this code section.</p>
          </Message>
          <p>
            To embed your registration form,&nbsp;
            copy and paste this embed code where you want the form to appear on your site on your site.
          </p>
          <p>
            <code>
              {`
              <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  src="${window.location.origin}/ext${genEventLink(event)}/register"
                  style="border:0;width:100px;min-height:600px;height:100%"></iframe>
            `}
            </code>
          </p>
          <p>
            Alternatively, you can point your guests to&nbsp;
            <Link to={`${genEventLink(event)}/register`}>{eventShortLink}</Link>&nbsp;
            to register faster.
          </p>
        </ContentPanel>
      }
    </StyledEvent>
  )
}

export default Event;