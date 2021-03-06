import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { lighten } from 'polished'
import ReactMarkdown from 'react-markdown'

// internal
import ContentPanel from 'js/components/shared/content-panel'
import ContentSection from "js/components/shared/content-section";
import Sidebar from 'js/components/shared/sidebar'
import ContentEditable from 'js/components/shared/content-editable'
import Button from 'js/components/shared/button'
import AboutUser from 'js/components/user/scenes/user/components/AboutUser'
import Loading from 'js/components/shared/loading'
import AddComment from "js/components/shared/comments/add-comment";
import Comments from "js/components/shared/comments";
import Resources from "js/components/resources";

import {
  pluralize,
  genEventLink,
  genUserProfileLink,
  getUserAvatar,
  titleize,
} from 'js/utils'

export const generateCTA = (handleClick) => (
  <Button onClick={handleClick}>
    Interested
  </Button>
)

const styles = css`
  &.app-container {
    margin: 2rem auto;
    padding: 1rem 2rem;
    
    .user-banner {
      width: 100%;
    }
  }
  
  .page-title {
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  p {
    font-size: 1.1rem;
    font-weigth: 300;
  } 
  
  .main-body {
    padding: 0 1rem;
  }
  
  .user-banner {
    color: ${props => props.theme.gray};
    
    .user-info {
      flex-direction: column;
    }
    
    .avatar-medium {
      margin-top: 1rem;
    }
    
    .user-info-text {
      margin: 0;
      text-align: center;
      
      h3 a {
        color: ${props => props.theme.gray};
        
        &:hover {
          text-decoration: underline;
        }
      }
      
      li.user-name span {
        color: ${props => props.theme.gray};
      }
    }
  }
  
  .edit-presentation {
    margin: auto;
    display: inherit;
    color: ${props => lighten(0.3, props.theme.activeLink)};
  }
  
  .sidebar {
    p {
      color: ${props => props.theme.grayMedium};
    }
      
  }
`

export const Presentation = ({
  presentation,
  comments,
  event,
  loading,
  error,
  success,
  handleChange,
  handleUpdate,
  handleDelete,
  handleEdit,
  handleViewCount,
  editing = false,
  currentUser,
  className,
}) => {

  if (loading) return <Loading />

  const { is_stakeholder } = event
  const {
    title,
    summary,
    details,
    no_of_views,
    user = {},
    presentation_type,
  } = presentation

  const presentationType = presentation_type !== 'other' ? presentation_type : 'presentation'
  const eventLink = genEventLink(event, event.community)
  const canEdit = (user.id == currentUser.id) || is_stakeholder
  return (
    <div className={`${className}`}>
      <div>View <Link to={`${eventLink}/presentations`}>all presentations</Link></div>
      <div className="app-container">
        <ContentSection>
          <ContentSection.Body>
            <ContentPanel title={`Title of the ${presentationType}`}>
              <ContentEditable propName="title"
                               type="input"
                               canEdit={canEdit}
                               defaultValue={title}
                               onChange={handleChange}
                               onSubmit={handleUpdate}>

                <p>{title}</p>
              </ContentEditable>
            </ContentPanel>

            <ContentPanel title="Summary">
              <ContentEditable propName="summary"
                               type="textarea"
                               canEdit={canEdit}
                               defaultValue={summary}
                               onChange={handleChange}
                               onSubmit={handleUpdate}>

                <ReactMarkdown escapeHtml={false}
                               source={summary || (canEdit ? 'Click to edit. In markdown, if you wish :)' : 'None yet.')} />

              </ContentEditable>
            </ContentPanel>

            <ContentPanel title="Details">
              <ContentEditable propName="details"
                               type="textarea"
                               canEdit={canEdit}
                               defaultValue={details}
                               onChange={handleChange}
                               onSubmit={handleUpdate}>

                <ReactMarkdown escapeHtml={false}
                               source={details || (canEdit ? 'Click to edit. In markdown, if you wish :)' : 'None yet.')} />

              </ContentEditable>
            </ContentPanel>

            <Resources title="Resources"
                       requester={{recipient_id: presentation.id, recipient_type: 'Presentation'}}/>
          </ContentSection.Body>

          <ContentSection.Sidebar>
            <Sidebar title="About the speaker">
              <AboutUser user={presentation.user}>
                {canEdit &&
                  <Button.Link className="edit-presentation"
                               to={`${genEventLink(event, event.community)}/presentations/${presentation.id}/user/${user.id}/edit`}>
                    Edit Speaker
                  </Button.Link>
                }
              </AboutUser>
            </Sidebar>
          </ContentSection.Sidebar>

          <ContentSection.FullRow>
            <ContentSection.Body>
              <ContentPanel className="comments-section" title="Questions/Comments">
                <AddComment placeholder="What would you like to ask/suggest?"
                            recipient_id={presentation.id}
                            recipient_type="Presentation"
                            trackable_id={presentation.id}
                            trackable_type="Presentation" />

                <Comments recipient_id={presentation.id}
                          recipient_type="Presentation"
                  {...{comments }} />

              </ContentPanel>
            </ContentSection.Body>
          </ContentSection.FullRow>
        </ContentSection>

      </div>
    </div>
  )
}

export default styled(Presentation)`${styles}`