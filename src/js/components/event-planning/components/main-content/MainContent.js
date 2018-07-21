import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

// internal components
import Tab from 'js/components/shared/tab';
import TodoItems from 'js/components/todo-items';
import ContentPanel from 'js/components/shared/content-panel'
import ContentEditable from 'js/components/shared/content-editable'
import Loading from 'js/components/shared/loading'

const StyledEventPlanning = styled.div`
  .tasks .content-body {
    margin: 2rem 0;
  }
  
  ul {
    list-style-type: initial;
    padding-left: 1rem;
  }
`

const EventPlanningMainContent = ({todo_items = {data: []}, ...props}) => {
  const getPanes = () => {
    const todoData = todo_items.data.filter(item => item.recipient_id == props.user.id)
    const userTodo = {...todo_items, data: todoData}
    return [
      {name: `My Task (${todoData.length})`, content: (props) => <TodoItems {...{...props, todo_items: userTodo}} /> },
      {name: `All Tasks (${todo_items.data.length})`, content: (props) => <TodoItems {...{...props, todo_items}} /> },
    ]
  }

  const {
    event_checklist = {},
    handleChange,
    handleSubmit,
    pending = [],
    in_progress = [],
    completed = [],
    loading,
    error,
  } = props
  const {description} = event_checklist

  if (loading) return <Loading />
  if (error) return <Loading.Error msg={error} />

  return (
    <StyledEventPlanning>
      <ContentPanel title="Goal(s)">
        <ContentEditable propName="description"
                         type="textarea"
                         canEdit={true}
                         defaultValue={description}
                         onChange={handleChange}
                         onSubmit={handleSubmit}>
          <ReactMarkdown source={description || 'Click to edit. In markdown, if you wish :)'} />
        </ContentEditable>
      </ContentPanel>
      <ContentPanel className="tasks" title="Tasks">
        <Tab panes={getPanes()} {...props} />
      </ContentPanel>
    </StyledEventPlanning>

  )

}

export default EventPlanningMainContent;
