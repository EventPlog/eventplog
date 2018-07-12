import React from 'react';
import styled from 'styled-components';

import ContentPanel from 'js/components/shared/content-panel'
import { Form, label, Message, Checkbox } from 'semantic-ui-react'
import Input from 'js/components/shared/input'
import Button from 'js/components/shared/button'
// import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'
// import DateTimePickerStyles from 'js/styles/thirdparty/date-time-picker-styles'
import DateTimePicker from 'js/components/shared/date-time-picker'

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
  const { title, link, featured_image, start_date=(new Date()),
                start_time, end_date, end_time } = event
  return (
    <StyleEventUpdate>
      <ContentPanel title="Edit this event">
        <Form loading={loading} success={success}>
          <Message
            success
            header='Nice!'
            content="You've successfully updated this event!"
          />

          <Form.Field>
            <label>Title</label>
            <Input name="title"
                   value={title}
                   placeholder='Awesome event'
                   onChange={handleChange}/>
          </Form.Field>

          <Form.Field>
            <label>Link to featured image</label>
            <Input name="featured_image"
                   value={featured_image}
                   placeholder='An event about awesomeness' onChange={handleChange}/>
          </Form.Field>

          <Form.Field>
            <label>Link to RSVP Page (Optional)</label>
            <Input name="link"
                   value={link}
                   placeholder='http://someplace.com' onChange={handleChange}/>
          </Form.Field>

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
