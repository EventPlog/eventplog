import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components';
import { lighten } from 'polished'

import ContentEditable from 'js/components/shared/content-editable'
import { maxMedia } from 'js/styles/mixins'

const StyledTaskMeta = styled.div`
  display: flex;
  flex-direction: row-reverse;
  text-transform: capitalize;

  ${
    maxMedia.tablet`
      flex-direction: row
    `
  }
  .item {
    padding: 0 10px;
    border-right: none;
    box-shadow: 0px 2px 4px #ddd;
    background: ${props => lighten(0.4, props.theme.activeLink)};

    p {
      font-size: 0.9em;
      font-weight: 500; 
    }
    
    span.title {
      font-weight: 400;
      margin: 0;
      margin-right: 0.4rem;
      
      &:after {
        content: ':'
      }
    }

    &.comment-count {
      display: flex;
      align-items: center;
    }
  }
 
`


const TodoItemMeta = ({
  status,
  recipient,
  deadline,
  event = {},
  commentsCount = 0,
  handleChange,
  handleSubmit,
  isEditable = false,
}) => {
  const organizerOptions = () => {
    const {organizers = []} = event
    return organizers.map(organizer => ({
      key: organizer.user_id,
      value: organizer.user_id,
      icon: <img src={organizer.avatar_url || "sample-avatar.png"} />,
      text: organizer.display_name
    }))
  }

  const statusOptions = [
    { key: 'pending', value: 'pending', icon: <Icon src="send" />, text: 'Pending' },
    { key: 'in progress', value: 'in progress', icon: <Icon src="send" />, text: 'In Progress' },
    { key: 'completed', value: 'completed', icon: <Icon src="send" />, text: 'Completed' },
  ]

  const deadlineDate = deadline ? new Date(deadline) : new Date()
  return (
    <StyledTaskMeta className="task-meta">
      <div className="item">
        <p>
          <div className="child-column">
            <span className="title">Deadline</span>
            <ContentEditable propName="deadline"
                             type="datetime"
                             canEdit={isEditable}
                             defaultValue={deadlineDate}
                             onChange={handleChange}
                             onSubmit={handleSubmit}>
                {deadlineDate.toDateString() || 'none yet'}
            </ContentEditable>
          </div>
        </p>
      </div>
      <div className="item">
        <p>
          <div className="child-column">
            <span className="title">Owner</span>
            <ContentEditable propName="recipient_id"
                             type="select"
                             canEdit={isEditable}
                             defaultValue={recipient.display_name}
                             onChange={handleChange}
                             options={organizerOptions()}
                             onSubmit={handleSubmit}>
                {recipient.display_name || 'unassigned'}
            </ContentEditable>
          </div>
        </p>
      </div>
      <div className="item">
        <p>
          <div className="child-column">
            <span className="title">Status</span>
            <ContentEditable propName="status"
                             type="select"
                             canEdit={isEditable}
                             defaultValue={status}
                             onChange={handleChange}
                             options={statusOptions}
                             onSubmit={handleSubmit}>
                {status}
            </ContentEditable>
          </div>
        </p>
      </div>
      <div className="item comment-count">
        <p>
          <Icon name="comment" /> {commentsCount}
        </p>
      </div>
    </StyledTaskMeta>
  )
}

export default TodoItemMeta;