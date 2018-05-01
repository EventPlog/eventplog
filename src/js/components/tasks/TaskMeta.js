import React, { Component } from 'react'
import styled from 'styled-components';

const StyledTaskMeta = styled.div`
  display: flex;
  flex-direction: row-reverse;

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


class TaskMeta extends Component {
  render () {
    return (
      <StyledTaskMeta className="task-meta">
        <div className="item">
          <p>
            <span>Deadline</span> 24/04/2018
          </p>
        </div>
        <div className="item">
          <p>
            <span>Owner</span> Patricia
          </p>
        </div>
        <div className="item">
          <p>
            <span>Status</span> In Progress
          </p>
        </div>
      </StyledTaskMeta>
    )
  }
}

export default TaskMeta;