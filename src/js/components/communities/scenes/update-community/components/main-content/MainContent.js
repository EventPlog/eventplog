import React from 'react';
import styled from 'styled-components';
import { Form, label, Message, Checkbox, Icon } from 'semantic-ui-react'

import ContentPanel from 'js/components/shared/content-panel'
import Input from 'js/components/shared/input'
import Button from 'js/components/shared/button'
import Select from 'js/components/shared/select'
import color from 'js/styles/theme/variables'

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
  
  .same-line {
    display: flex;
    align-items: center;
  }
  
  input[name='slug'] {
    text-align: right;
  }
  
`

const colorOptions = [
  { key: 'default', value: color.primary, icon: 'point purple', text: 'default' },
  { key: 'blue', value: color.blue, icon: 'point blue', text: 'blue' },
  { key: 'red', value: color.red, icon: 'point red', text: 'red' },
  { key: 'green', value: color.green, icon: 'point green', text: 'green' },
  { key: 'pink', value: color.pink, icon: 'point pink', text: 'pink' },
  { key: 'orange', value: color.orange, icon: 'point orange', text: 'orange' },
  { key: 'yellow', value: color.yellow, icon: 'point yellow', text: 'yellow' },
]

const EventUpdate = ({
  community = {},
  loading,
  success,
  handleChange,
  handleSubmit,
  slug_check = {},
  checkForValidSlug,
}) => {
  const {
    id,
    name,
    description,
    featured_image,
    logo,
    link,
    slug,
    topic_interests = [],
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
                   maxLength={70}
                   placeholder='An community of awesome people' onChange={handleChange}/>
          </Form.Field>

          <Form.Field>
            <label>Slug</label>
            {slug_check.valid &&
              <div className="success green">Slug is available!</div>}
            {slug_check.error &&
              <div className="error red">{slug_check.error}</div>}
            {slug_check.loading &&
              <div className="">Checking for availability  <Icon loading name='asterisk' /></div>}

            <Form.Field widths="equal" className="same-line">
              eventplog.com/c/
              <Input name="slug"
                     value={slug}
                     onBlur={checkForValidSlug}
                     disabled={slug_check.loading}
                     placeholder='something' onChange={handleChange}/>
            </Form.Field>
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
            <Input name="topic_interests"
                   value={topic_interests.join(',')}
                   placeholder='technology, food'
                   onChange={(e) => handleChange(e, {
                     name: e.target.name,
                     value: e.target.value.split(',')
                   })}/>
          </Form.Field>

          <Form.Field>
            <label>Brand Color</label>
            <Select options={colorOptions}
                    name="brand_color"
                    value={brand_color}
                    defaultValue={color.activeLink}
                    onChange={handleChange}/>

          </Form.Field>

          {/*<Form.Group widths="equal">*/}
          {/*</Form.Group>*/}

          <Form.Field>
            <Checkbox checked label='Make this community public' />
          </Form.Field>

          <Form.Group>
            <Button inverted type='submit' onClick={handleSubmit} disabled={slug_check.error}>
              Save
            </Button>

            <Button.Link className="cancel" to={`/communities/${community.id}`}>
              Back to Community Page
            </Button.Link>
          </Form.Group>
        </Form>
      </ContentPanel>
    </StyleEventUpdate>
  )
}

export default EventUpdate;
