import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components';
import { lighten } from 'polished'

// import {Select} from 'semantic-ui-react'
import Select from 'js/components/shared/select'
import { media } from 'js/styles/mixins'
import TodoItem from './TodoItem'
import NewTodoItem from '../new-todo-item'
import Loading from 'js/components/shared/loading'
import ContentPanel from 'js/components/shared/content-panel'
import ProgressBar from 'js/components/shared/progress-bar'
import Accordion from 'js/components/shared/accordion'

const StyledTasks = styled.div`
  .content-panel:last-child {
    border-bottom: none;
  }
  
  p {
    font-size: 1.3em;
    font-weight: 500; 
  }
  
  .task {
    border-bottom: 1px solid #ddd;
    margin-bottom: 1rem;
    
    .task-title {
      font-weight: 500;
      
      &:not( .task-meta) {
        font-size: 1.2rem;
      }
          
      ${
        media.phone`
          margin-top: 2rem;
        `
      } 
    }
  }
  
  
  .task-meta {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1rem;
  }
  
  .tasks {
    padding: 1rem;
    margin-bottom: 2rem;
    
    &.completed {
      background: ${props => lighten(0.5, props.theme.green)};
    }
    
    &.in-progress {
      background: ${props => lighten(0.4, props.theme.yellow)};
    }
    
    &.pending {
      background: ${props => props.theme.gray};
    }
    
    .item {
      background: white;
    }
  }
`

const EventChecklist = ({
  todo_items = {},
  pending = [],
  in_progress = [],
  completed = [],
  activeIndex,
  match,
  event,
  changeAccordion
}) => {
  const { description, data = [], loading, error } = todo_items
  if (loading) return <Loading />
  if (error) return <Loading.Error msg={error} />
  const percentCompletion = Math.round((completed.length / data.length) * 100)
  return (
    <StyledTasks className="backstage-tasks">

      <ContentPanel className="padded" title="Summary">
        <ProgressBar percent={percentCompletion} />
        <div>
          <p>
            {completed.length} tasks completed,&nbsp;
            {in_progress.length} in progress,&nbsp;
            {pending.length} pending.</p>
        </div>
      </ContentPanel>

      {completed && completed.length > 0 &&
        <ContentPanel className="tasks completed" title="Completed">
          <Accordion>
            {(props) => (
              completed.map((todo_item, index) => [
                <TodoItem key={index} {...{todo_item, match, event, index, ...props}} />
              ])
            )}
          </Accordion>
        </ContentPanel>
      }

      {in_progress && in_progress.length > 0 &&
        <ContentPanel className="tasks in-progress" title="In Progress">
          <Accordion>
            {(props) => (
              in_progress.map((todo_item, index) => [
                <TodoItem key={index} {...{todo_item, match, index, ...props}} />
              ])
            )}
          </Accordion>{}
        </ContentPanel>
      }

      {pending && pending.length > 0 &&
        <ContentPanel className="tasks pending" title="Pending">
          <Accordion>
            {(props) => (
              pending.map((todo_item, index) => [
                <TodoItem key={index} {...{todo_item, match, index, ...props}} />
              ])
            )}
          </Accordion>
        </ContentPanel>
      }
      <ContentPanel className="padded" title="Add a new task">
        <NewTodoItem/>
      </ContentPanel>
    </StyledTasks>
  )
}

const withProps = (Component, props) => () => <Component {...props}/>


export default EventChecklist