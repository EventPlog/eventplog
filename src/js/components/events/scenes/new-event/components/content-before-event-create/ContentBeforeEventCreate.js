import React from 'react'
import { Form, Message } from 'semantic-ui-react'
import styled from 'styled-components'

// local
import Input from 'js/components/shared/input'
import Button from 'js/components/shared/button'
import { media } from 'js/styles/mixins'
import {
  genCommunityLink,
  removeSpecialChars
} from 'js/utils'

const StyledContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  
  ${
  media.phone`
      align-items: baseline;
    `
  }
    
    
  .submit-form {
    width: 100%;
    max-width: 600px;
  }
  
  .ui.form {
    margin: 60px 0;
    
    ${
      media.phone`
        margin: 50px 0;
        
        .inline.fields {
          flex-direction: column;
          align-items: baseline; 
        }
      `
    }
    
    .field.email-holder {
      flex: 1;
      
      ${
        media.phone`
          width: 100%;
          margin-bottom: 1.5rem;
        `
      }   
  
    }
  }
  
 .same-line {
   display: flex;
   align-items: center;
   white-space: nowrap;
 } 
`

const ContentBeforeEventCreate = ({
  event = {},
  community,
  handleChange,
  submitEvent,
  loading,
  error
}) => (
  <StyledContent>
    <h3>Create a event</h3>
    <p>
      What's the title of your event?
    </p>
    <div className="submit-form">
      <Form loading={loading} error={!!error}>

        <Message
          error
          header="Error"
          content={error && error.toString()}
        />

        <Form.Field className="wide email-holder">
          <label>What's the name of your event?</label>
          <Input name="title"
                 type="text"
                 value={event.title}
                 placeholder='Event title'
                 onChange={(e, attr) => handleChange(attr.name, attr.value)}/>
        </Form.Field>

        <Form.Field>
          <label>How'd you like people to visit your event page?</label>

          <Form.Field className="same-line">
            eventplog.com{genCommunityLink(community)}/
            <Input name="slug"
                   value={event.slug}
                   placeholder='amazing-event'
                   onChange={(e) => handleChange(e.target.name, removeSpecialChars(e.target.value))}/>
          </Form.Field>
        </Form.Field>

        <Button onClick={submitEvent}>Create</Button>
      </Form>
    </div>
  </StyledContent>
)

export default ContentBeforeEventCreate

