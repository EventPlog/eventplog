import React from 'react';
import styled from 'styled-components';
import { Form, label, Message, Checkbox, Icon } from 'semantic-ui-react'

import ContentPanel from 'js/components/shared/content-panel'
import Input from 'js/components/shared/input'
import Button from 'js/components/shared/button'
import DateTimePicker from 'js/components/shared/date-time-picker'
import { validDate, removeSpecialChars } from 'js/utils'
import TextArea from 'js/components/shared/text-area'
import Loading from 'js/components/shared/loading'

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
    
  }
  
  .same-line {
    display: flex;
    align-items: center;
    white-space: pre;
    
    .ui.input input[name="slug"] {
      width: 2rem;
    }
  }
  
`

const EventUpdate = ({
  event = {},
  loading,
  success,
  handleChange,
  handleSubmit,
  slug_check = {},
  checkForValidSlug,
}) => {
  if (loading) return <Loading/>
  const {
    title,
    description,
    link,
    featured_image,
    slug,
    agenda,
    hashtags,
    visibility_status,
    start_time=(new Date()), end_time=(new Date()),
    community = {} } = event
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
            <TextArea name="description"
                      value={description}
                      placeholder='An event about awesomeness'
                      onChange={(e) => handleChange(e.target.name, e.target.value)}/>
          </Form.Field>

          <Form.Field>

            <label>Slug</label>
            {slug_check.valid &&
            <div className="success green">Slug is available!</div>}
            {slug_check.error &&
            <div className="error red">{slug_check.error}</div>}
            {slug_check.loading &&
            <div className="warning">Checking for availability  <Icon loading name='asterisk' /></div>}

            <Form.Field widths="equal" className="same-line">
              eventplog.com/c/{community.slug || community.id}/e/
              <Input name="slug"
                     value={slug}
                     placeholder='all-hands-summit'
                     onBlur={checkForValidSlug}
                     onChange={(e) => handleChange(e.target.name, removeSpecialChars(e.target.value))}/>
            </Form.Field>
          </Form.Field>

          <Form.Field>
            <label>Agenda</label>
            <TextArea name="agenda"
                      value={agenda}
                      placeholder='* Keynote - 11am - Mike Ross'
                      onChange={(e) => handleChange(e.target.name, e.target.value)}/>
          </Form.Field>

          <Form.Group widths="equal">
            <Form.Field>
              <label>Starts at</label>

              <DateTimePicker
                showTimeSelect
                todayButton={"Today"}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="date-time-picker"
                selected={validDate(start_time)}
                onChange={(selected_date) => handleChange('start_time', selected_date) } />
            </Form.Field>

            <Form.Field>
              <label>Ends at</label>

              <DateTimePicker
                showTimeSelect
                todayButton={"Today"}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="date-time-picker"
                selected={validDate(end_time)}
                onChange={(selected_date) => handleChange('end_time', selected_date) } />
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
            <label>Official Hashtag(s)</label>
            <Input name="hashtags"
                   value={hashtags}
                   placeholder='#moonwalkers #daydragons'
                   onChange={(e) => handleChange(e.target.name, e.target.value)}/>
          </Form.Field>

          <Form.Field>
            <Checkbox checked={visibility_status == 'public_event'}
                      onClick={(e, attr) =>
                        handleChange('visibility_status',
                                      attr.checked ? 'public_event' : 'private_event' ) }
                      label='Make this event public' />
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
