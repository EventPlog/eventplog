import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

//======== INTERNAL ============
import Button from 'js/components/shared/button'

const StyledNotFound = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-top: 3rem;
  padding: 1rem;


  button {
    padding: 0.5rem;
  } 
  
  li {
    margin-bottom: 1rem;
  }
  
  .chat-icon {
    background: green;
    color: white;
    padding: 0.4rem 0 0.4rem 0.6rem;
    border-radius: 50%;
    font-size: 2rem;
    text-align: center;
    margin: 0 0.4rem;
    
    i {
      margin: 0;
      padding: 0;
      width: auto;
      height: auto;
    }
  } 
`

const EventNotFound = () => {
  return (
    <StyledNotFound>
      <h3 className="heading">
        We're sorry! 😞
      </h3>

      <p className="description">
        We couldn't retrieve the information you need about this event. You could
        <ol>
          <li>Confirm you're visiting the right route event id/slug.</li>
          <li><Button onclick={() => window.location.reload()}>Refresh</Button> this page.</li>
          <li>Take a screenshot of this error and share with us <Link to="https://spectrum.chat/eventplog">on spectrum.</Link></li>
          <li>Click on the
            <span className="chat-icon">
              <Icon name="envelope circle" />&nbsp;
            </span>
            icon by the bottom left to start chatting with a member of the team.

          </li>
        </ol>
      </p>


    </StyledNotFound>
  )
}

export default EventNotFound