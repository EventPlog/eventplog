import React from 'react'
import { Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// local
import { media } from 'js/styles/mixins'
import { addHttp } from 'js/utils'

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  > img {
    max-width: 500px;
    margin: 50px auto; 
    
    ${
      media.phone`
        width: 100%;
      `
    }
  }
  
  .medium.lowercase {
    text-transform: none;
    font-size: 1.2em;
    font-weight: 400;
    margin: 30px auto;
  }
  
  ul {
    font-size: 1.1em;
    font-weight: 400;
    line-height: 1.8em;
  }
`

const ContentAfterCommunitySubmit = ({ event = {} }) => (
  <StyledContent>
    <Message positive>
      <Message.Header>Thank you for sharing your thoughts!</Message.Header>
      {
        event.feedback_url &&
        <p>
          If you've got a bit more time, please help answer&nbsp;
          <a target="_blank" href={addHttp(event.feedback_url)}>a few more questions in this form</a>.&nbsp;
            We'll really appreciate it. Thanks!
        </p>
      }
    </Message>
  </StyledContent>
)

export default ContentAfterCommunitySubmit

