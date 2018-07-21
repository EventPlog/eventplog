import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components';

// import {Select} from 'semantic-ui-react'
import Select from 'js/components/shared/select'
import { media } from 'js/styles/mixins'
import TodoItem from './TodoItem'
import Loading from 'js/components/shared/loading'
import ContentPanel from 'js/components/shared/content-panel'
import ProgressBar from 'js/components/shared/progress-bar'
import Accordion from 'js/components/shared/accordion'

const StyledTasks = styled.div`
  
  p {
    font-size: 1.3em;
    font-weight: 300; 
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
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`

const EventChecklist = ({
  todo_items = {},
  pending = [],
  in_progress = [],
  completed = [],
  activeIndex,
  match,
  changeAccordion
}) => {
  const { description, data = [], loading, error } = todo_items
  if (loading) return <Loading />
  if (error) return <Loading.Error msg={error} />
  const percentCompletion = (completed.length / data.length) * 100
  return (
    <StyledTasks className="backstage-tasks">

      <ContentPanel title="Summary">
        <ProgressBar percent={percentCompletion} />
        <div>
          <p>
            {completed.length} tasks completed,&nbsp;
            {in_progress.length} in progress,&nbsp;
            {pending.length} pending.</p>
        </div>
      </ContentPanel>

      {completed && completed.length > 0 &&
        <ContentPanel title="Completed">
          <Accordion>
            {(props) => (
              completed.map((todo_item, index) => [
                <TodoItem key={index} {...{todo_item, match, index, ...props}} />
              ])
            )}
          </Accordion>
        </ContentPanel>
      }

      {in_progress && in_progress.length > 0 &&
        <ContentPanel title="In Progress">
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
        <ContentPanel title="Pending">
          <Accordion>
            {(props) => (
              pending.map((todo_item, index) => [
                <TodoItem key={index} {...{todo_item, match, index, ...props}} />
              ])
            )}
          </Accordion>
        </ContentPanel>
      }
    </StyledTasks>
  )
}

const withProps = (Component, props) => () => <Component {...props}/>


export default EventChecklist