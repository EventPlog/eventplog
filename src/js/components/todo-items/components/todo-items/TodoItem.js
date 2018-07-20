import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'

import Comments from 'js/components/shared/comments'
import TaskMeta from '../task-meta';
import ContentPanel from 'js/components/shared/content-panel'
import { media } from 'js/styles/mixins'
import Button from 'js/components/shared/button'
import Accordion from 'js/components/shared/accordion'

const StyledTodoItem = styled.div`
  .description {
    margin-bottom: 2rem;
  }
  
  .footer {
    margin-bottom: 1rem;
    
    a {
      display: contents;
      
      &:hover {
        color: var(--activeLink) !important;
      }
    }
  }
`
const TodoItem = ({
  index,
  activeIndex,
  changeAccordion,
  match = {},
  todo_item = {},
}) => {
  const {id, title, description, status, recipient, deadline, comments = {}} = todo_item
  const { community_id, event_id } = match.params || {}
  return (
    <StyledTodoItem className="task">
      <Accordion.Title className="task-title"
                       active={activeIndex === index}
                       index={index}
                       onClick={changeAccordion}>
        <Icon name='dropdown' />
        { title }
        <TaskMeta {...{status, recipient, deadline, isEditable: false,
                        commentsCount: comments.data.length
        }} />
      </Accordion.Title>
      <Accordion.Content active={activeIndex === index}>

        <ReactMarkdown className="description" source={description} />

        <div className="footer">
          <Button.Link to={`/communities/${community_id}/events/${event_id}/backstage/tasks/${id}`}>
            Edit or comment
          </Button.Link>

        </div>
      </Accordion.Content>


    </StyledTodoItem>
  )
}

export default TodoItem