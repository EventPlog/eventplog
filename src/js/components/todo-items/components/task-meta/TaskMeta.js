import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components';
import ContentEditable from 'js/components/shared/content-editable'

const StyledTaskMeta = styled.div`
  display: flex;
  flex-direction: row-reverse;
  text-transform: capitalize;

  .item {
    padding: 0 10px;
    border-right: none;
    box-shadow: 0px 2px 4px #ddd;

    p {
      font-size: 0.9em;
      font-weight: 300; 
    }
    
    span {
      font-weight: 400;
      
      &:after {
        content: ':'
      }
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
    return organizers.map(person => ({
      key: person.id,
      value: person.id,
      icon: <img src={person.avatar_url || "sample-avatar.png"} />,
      text: person.display_name
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
          <ContentEditable propName="deadline"
                           type="datetime"
                           canEdit={isEditable}
                           defaultValue={deadlineDate}
                           onChange={handleChange}
                           onSubmit={handleSubmit}>
            <span>Deadline</span> {deadlineDate.toDateString() || 'none yet'}
          </ContentEditable>
        </p>
      </div>
      <div className="item">
        <p>
          <ContentEditable propName="recipient_id"
                           type="select"
                           canEdit={isEditable}
                           defaultValue={recipient.display_name}
                           onChange={handleChange}
                           options={organizerOptions()}
                           onSubmit={handleSubmit}>
            <span>Owner</span> {recipient.display_name || 'unassigned'}
          </ContentEditable>
        </p>
      </div>
      <div className="item">
        <p>
          <ContentEditable propName="status"
                           type="select"
                           canEdit={isEditable}
                           defaultValue={status}
                           onChange={handleChange}
                           options={statusOptions}
                           onSubmit={handleSubmit}>
            <span>Status</span> {status}
          </ContentEditable>
        </p>
      </div>
      <div className="item">
        <p>
          <Icon name="comment" /> {commentsCount}
        </p>
      </div>
    </StyledTaskMeta>
  )
}

export default TodoItemMeta;