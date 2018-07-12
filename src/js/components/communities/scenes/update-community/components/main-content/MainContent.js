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
  
  .cancel {
    margin-left: 1rem;
  }
`

const EventUpdate = ({
  community = {},
  loading,
  success,
  handleChange,
  handleSubmit
}) => {
  const {
    id,
    name,
    description,
    featured_image,
    logo,
    link,
    no_of_members,
    no_of_upcoming_events,
    interests,
    brand_color,
  } = community
  return (
    <StyleEventUpdate className="main-content">
      <ContentPanel title="Edit Community">
        <Form loading={loading} success={success}>
          <Message
            success
            header='Yes!'
            content="You've successfully updated this community"
          />

          <Form.Field>
            <label>Name</label>
            <Input name="name"
                   value={name}
                   placeholder='Awesome event'
                   onChange={handleChange}/>
          </Form.Field>

          <Form.Field>
            <label>One-line Description</label>
            <Input name="description"
                   value={description}
                   placeholder='An community of awesome people' onChange={handleChange}/>
          </Form.Field>

          <Form.Field>
            <label>Link to Group</label>
            <Input name="link"
                   value={link}
                   placeholder='http://someplace.com' onChange={handleChange}/>
          </Form.Field>

          <Form.Field>
            <label>Link to logo</label>
            <Input name="logo"
                   value={logo}
                   placeholder='http://someplace.com' onChange={handleChange}/>
          </Form.Field>

          <Form.Field>
            <label>Featured image url</label>
            <Input name="featured_image"
                   value={featured_image}
                   placeholder='http://someplace.com' onChange={handleChange}/>
          </Form.Field>

          <Form.Field>
            <label>Interests (separated by commas)</label>
            <Input name="interests"
                   value={interests}
                   placeholder='technology, food' onChange={handleChange}/>
          </Form.Field>

          <Form.Field>
            <label>Brand Color</label>
            <Input name="brand_color"
                   value={brand_color}
                   placeholder='#aefdae' onChange={handleChange}/>
          </Form.Field>

          {/*<Form.Group widths="equal">*/}
          {/*</Form.Group>*/}

          <Form.Field>
            <Checkbox checked label='Make this community public' />
          </Form.Field>

          <Form.Group>
            <Button inverted type='submit' onClick={handleSubmit}>
              Save
            </Button>

            <Button.Link className="cancel" to={`/communities/${community.id}`}>
              Cancel
            </Button.Link>
          </Form.Group>
        </Form>
      </ContentPanel>
    </StyleEventUpdate>
  )
}

export default EventUpdate;
