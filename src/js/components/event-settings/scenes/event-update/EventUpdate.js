import React from 'react';
import styled from 'styled-components';
import { Form, label, Message, Checkbox, Icon } from 'semantic-ui-react'
import PlaceSelector from 'js/components/shared/place-selector'

import ContentPanel from 'js/components/shared/content-panel'
import Input from 'js/components/shared/input'
import Button from 'js/components/shared/button'
import DateTimePicker from 'js/components/shared/date-time-picker'
import { validDate, removeSpecialChars } from 'js/utils'
import TextArea from 'js/components/shared/text-area'
import Select from 'js/components/shared/select'
import Loading from 'js/components/shared/loading'
import config from 'js/config'

const StyleEventUpdate = styled.div`
   
  > img {
    width: 100%;
  }
  
  form.ui.form {
    font-size: 1.3rem; 
    
    .fields {
      margin-bottom: 2rem;
    }
    
    .field {
      margin: 0 0 3em;
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

const categoryOptions =
  config.event_categories.map(cat => ({
    key: cat,
    value: cat,
    text: cat,
  }))

const EventUpdate = ({
  event = {},
  loading,
  success,
  handleChange,
  handleSubmit,
  slug_check = {},
  checkForValidSlug,
  onSearchChange,
  searchQuery,
}) => {
  if (loading) return <Loading/>
  const {
    title,
    description,
    link,
    featured_image,
    slug,
    venue,
    agenda,
    hashtags,
    visibility_status,
    category = {},
    start_time=(new Date()), end_time=(new Date()),
    location,
    community = {} } = event

  const goalsCharLimit = 280

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

          <Form.Field className="wide email-holder">
            <label>In a tweet (280 characters or less), tell your target audience why they should care about/attend this event.</label>
            <TextArea name="goals"
                      type="text"
                      value={event.goals}
                      maxLength={goalsCharLimit}
                      placeholder='Event goals in a sentence or two.'
                      onChange={(e) => handleChange(e.target.name, e.target.value)} />
            <small>{goalsCharLimit - (event.goals || '').length} characters left.</small>
          </Form.Field>

          <Form.Field>
            <label>Description (more verbose description for your event page)</label>
            <TextArea name="description"
                      value={description}
                      placeholder='An event about awesomeness'
                      rows="10"
                      onChange={(e) => handleChange(e.target.name, e.target.value)}/>
          </Form.Field>

          <Form.Field>
            <label>Venue</label>
            <PlaceSelector location={location}
                           locationField="location"
                           handleChange={handleChange}/>
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
            <label>Agenda (Hit 'Enter' twice for a new line)</label>
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

          <Form.Field className="search-holder">
            <label>Which industry would you classify this event under?</label>
            <Select
              search
              name="category_name"
              type="text"
              className="select-search"
              placeholder="Education"
              value={category.name}
              options={categoryOptions}
              onSearchChange={onSearchChange}
              text={searchQuery}
              searchQuery={searchQuery}
              onChange={(e, attr) => handleChange(attr.name, attr.value)}
            />
          </Form.Field>

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

          <Button inverted large type='submit' onClick={handleSubmit}>
            Save
          </Button>
        </Form>
      </ContentPanel>
    </StyleEventUpdate>
  )
}

export default EventUpdate;
