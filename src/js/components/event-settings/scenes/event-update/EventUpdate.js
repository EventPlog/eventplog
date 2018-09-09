import React from 'react';
import styled from 'styled-components';

import ContentPanel from 'js/components/shared/content-panel'
import { Form, label, Message, Checkbox } from 'semantic-ui-react'
import Input from 'js/components/shared/input'
import Button from 'js/components/shared/button'
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'
import DateTimePickerStyles from 'js/styles/thirdparty/date-time-picker-styles'
import { validDate } from 'js/utils'

const StyleEventUpdate = styled.div`
  ${ DateTimePickerStyles }
   
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
  const { title, description, link, featured_image, start_time=(new Date()),
                end_date, end_time=(new Date()) } = event
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
                   onChange={(e) => handleChange(e.target.name, e.target.value)}/>
          </Form.Field>

          <Form.Field>
            <label>Description</label>
            <Input name="description"
                   value={description}
                   placeholder='An event about awesomeness'
                   onChange={(e) => handleChange(e.target.name, e.target.value)}/>
          </Form.Field>


          <Form.Group widths="equal">
            <Form.Field>
              <label>Starts at</label>
              <DateTimePicker
                name="start_time"
                className="date-time-picker"
                onChange={(val) => handleChange('start_time', val)}
                value={validDate(start_time)}
              />
            </Form.Field>

            <Form.Field>
              <label>Ends at</label>
              <DateTimePicker
                name="end_time"
                className="date-time-picker"
                onChange={(val) => handleChange('end_time', val)}
                value={validDate(end_time)}
              />
            </Form.Field>
          </Form.Group>

          <Form.Field>
            <label>Link to featured image</label>
            <Input name="featured_image"
                   value={featured_image}
                   placeholder='An event about awesomeness'
                   onChange={(e) => handleChange(e.target.name, e.target.value)}/>
          </Form.Field>

          <Form.Field>
            <label>Link to RSVP Page (Optional)</label>
            <Input name="link"
                   value={link}
                   placeholder='http://someplace.com'
                   onChange={(e) => handleChange(e.target.name, e.target.value)}/>
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
