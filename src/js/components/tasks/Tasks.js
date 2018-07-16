import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import styled from 'styled-components';

import Comments from 'js/components/shared/comments'
import TaskMeta from './TaskMeta';
import ContentPanel from 'js/components/shared/content-panel'
import data  from 'js/mock-api/data'
import { media } from 'js/styles/mixins'
import AddComment from 'js/components/shared/comments/add-comment'

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

export default class Tasks extends Component {
  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state;

    const tasks = [
      {name: 'Create event pages', active: true},
      {name: 'Finalize with food and drinks vendors and submit budget so everything that can be added unto you will be.'},
      {name: 'Make announcement on group'},
      {name: 'Finalize with food and drinks vendors and submit budget so everything that can be added unto you will be.'},
      {name: 'Confirm agenda and speakers/panelists'}
    ];

    return (
      <StyledTasks className="backstage-tasks">
        <Accordion>
          {
            tasks.map((task, index) => [
              <div className="task">
                <Accordion.Title className="task-title"
                                 active={activeIndex === index}
                                 index={index}
                                 onClick={this.handleClick}>
                  <Icon name='dropdown' />
                  { task.name }
                  <TaskMeta/>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === index}>
                  <p>
                    We need the event page to be created so it would look as finite as something amazing.
                    It would be great if we leveraged the F8 Template for this. See <a href="http://sample.com">here.</a>
                  </p>
                  <ContentPanel title="Comments">
                    <Comments comments={data.events[0].comments} />
                    <AddComment placeholder="Type your comment" />
                  </ContentPanel>
                </Accordion.Content>

              </div>

            ])
          }
        </Accordion>
      </StyledTasks>
    )
  }
}