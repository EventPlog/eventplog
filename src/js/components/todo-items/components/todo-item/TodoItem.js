import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Accordion, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

import Comments from 'js/components/shared/comments'
import TaskMeta from '../task-meta';
import ContentPanel from 'js/components/shared/content-panel'
import { media } from 'js/styles/mixins'
import AddComment from 'js/components/shared/comments/add-comment'
import Loading from 'js/components/shared/loading'
import ContentEditable from 'js/components/shared/content-editable'
import Button from 'js/components/shared/button'

const StyledTodoItem = styled.div`
  .description {
    margin-bottom: 4rem;
  }
  
  .title {
    margin: 2rem 0 1rem;
    border-bottom: 1px solid;
    
    input {
      padding: 1rem;
    }
  }
  
  .btn-back {
    display: inline-block;
    margin: 1rem 0;
  }
  
  .btn-delete-task {
    float: right;
    border: none;
    font-size: 2rem;
    color: ${props => props.theme.red};
    opacity: 0.3;
    
    &:hover {
      opacity: 1;
      color: white;
      background: ${props => props.theme.red};
    }
  }
  
  .task-meta {
    margin: 2rem 0 4rem;
    
    .item {
      padding: 1rem;
      box-shadow: none;
      
      &:first-child {
        border-radius: 0 0.5rem 0.5rem 0;
      }
      
      &:last-child {
        border-radius: 0.5rem 0 0 0.5rem;
      }
    }
  }
`
const TodoItem = ({
  event_checklist = {},
  todo_item = {},
  loading,
  error,
  event,
  link_back,
  createComment,
  updateComment,
  handleChange,
  handleDelete,
  handleSubmit
}) => {
  const {
    id,
    title,
    description,
    status,
    recipient = {},
    deadline,
    comments = {},
  } = todo_item

  if (loading) return <Loading />
  if (error) return <Loading.Error msg={error} />

  const { data = []} = comments
  return (
    <StyledTodoItem className="task">
      <Button.Link className="btn-back" to={link_back}>
        Back
      </Button.Link>
      <Button className="btn-delete-task" onClick={handleDelete}>
        <Icon name='trash alternate' />
      </Button>
      <TaskMeta {...{status, recipient, deadline, event,
                              handleChange, handleSubmit, isEditable: true,
                              commentsCount: data.length}} />
      <div className="title">
        <ContentEditable propName="title"
                         type="input"
                         canEdit={true}
                         defaultValue={title}
                         onChange={handleChange}
                         onSubmit={handleSubmit}>
          <h3>{ title }</h3>
        </ContentEditable>
      </div>
      <div className="content">
        <ContentEditable propName="description"
                         type="textarea"
                         canEdit={true}
                         defaultValue={description}
                         onChange={handleChange}
                         onSubmit={handleSubmit}>
          <ReactMarkdown className="description" source={description || 'Click to edit. In markdown, if you wish :)'} />
        </ContentEditable>

        <ContentPanel title="Comments">
          <Comments {...{comments, createComment, updateComment }} />
          <AddComment placeholder="What would you like to suggest?"
                      recipient_id={id}
                      recipient_type="TodoItem"
                      trackable_id={id}
                      trackable_type="TodoItem"
                      createComment={createComment} />
        </ContentPanel>
      </div>
    </StyledTodoItem>
  )
}

export default TodoItem