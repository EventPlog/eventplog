import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import Comments from './comments/Comments';
import TaskMeta from './TaskMeta';

import styled from 'styled-components';

const StyledTasks = styled.div`
  p {
    font-size: 1.3em;
    font-weight: 300; 
  }
`

export default class Tasks extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state;

    const tasks = [
      {name: 'Create event page', active: true},
      {name: 'Make announcement on group'},
      {name: 'Finalize with food and drinks vendors'}
    ];

    return (
      <StyledTasks>
        <Accordion>
          {
            tasks.map((task, index) => [
              <TaskMeta/>,
              <Accordion.Title active={activeIndex === index} index={index} onClick={this.handleClick}>
                <Icon name='dropdown' />
                { task.name }
              </Accordion.Title>,
              <Accordion.Content active={activeIndex === index}>
                <p>
                  We need the event page to be created so it would look as finite as something amazing.
                  It would be great if we leveraged the F8 Template for this. See <a href="http://sample.com">here.</a>
                </p>
                <Comments/>
              </Accordion.Content>

            ])
          }
        </Accordion>
      </StyledTasks>
    )
  }
}