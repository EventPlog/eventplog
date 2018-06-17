import React from 'react';
import styled from 'styled-components';

import ContentPanel from 'js/components/shared/content-panel'
import { Form, label, Message, Checkbox } from 'semantic-ui-react'
import Input from 'js/components/shared/input'
import Button from 'js/components/shared/button'
import DateTimePicker from 'react-datetime-picker';

const StyleEventUpdate = styled.div`
  > img {
    width: 100%;
  }
  
  form.ui.form {
  
    .fields {
      margin-bottom: 2rem;
    }
    
    .checkbox {
      margin-bottom: 2rem;
    }
    
    .date-time-picker {
      width: 100%;
      
      > div {
        border: thin solid #aaa;
        width: 100%;
      }
      
      input {
        padding: 1px;
        border: 0;
      }
    }
  
  }
`

const EventUpdate = ({
  event = {},
  loading,
  success,
  handleChange,
  handleSubmit
}) => {
  const { title, description, link, start_date=(new Date()),
                start_time, end_date, end_time } = event
  return (
    <StyleEventUpdate>
      <ContentPanel title="Edit this event">
        <Form loading={loading} success={success}>
          <Message
            success
            header='Welcome!'
            content="You've successfully checked into this event!"
          />

          <Form.Field>
            <label>Title</label>
            <Input name="title"
                   value={title}
                   placeholder='Awesome event'
                   onChange={handleChange}/>
          </Form.Field>

          <Form.Field>
            <label>Description</label>
            <Input name="description"
                   value={description}
                   placeholder='An event about awesomeness' onChange={handleChange}/>
          </Form.Field>

          <Form.Field>
            <label>Link to RSVP Page (Optional)</label>
            <Input name="description"
                   value={link}
                   placeholder='http://someplace.com' onChange={handleChange}/>
          </Form.Field>

          <Form.Group widths="equal">
            <Form.Field>
              <label>Starts at</label>
              <DateTimePicker
                className="date-time-picker"
                onChange={handleChange}
                value={new Date()}
              />
            </Form.Field>

            <Form.Field>
              <label>Ends at</label>
              <DateTimePicker
                className="date-time-picker"
                onChange={handleChange}
                value={new Date()}
              />
            </Form.Field>

          </Form.Group>

          <Form.Field>
            <Checkbox checked label='Make this event public' />
          </Form.Field>

          <Button inverted type='submit' onClick={handleSubmit}>
            Save
          </Button>
        </Form>
      </ContentPanel>
    </StyleEventUpdate>
  )
}

export default EventUpdate;
