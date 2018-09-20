import React from 'react'
import { Message, Form, Label, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import { lighten } from 'polished'

import { media } from 'js/styles/mixins'
import Loading from 'js/components/shared/loading'
import Input from 'js/components/shared/input'
import TextArea from 'js/components/shared/text-area'
import Button from 'js/components/shared/button'
import Select from 'js/components/shared/select'

const StyledResource = styled.div`
  .form-info {
    font-size: 0.9rem;
    padding: 0.5rem;
    background: #ececac;
    background: ${props => lighten(0.3, props.theme.yellow)};
    line-height: 1.5rem;
  }
  
  .btn-delete {
    background: ${props => props.theme.red};
    margin-left: 1rem;
    border-color: ${props => props.theme.red};
    color: white;
  }
`
const NewResource = ({
  resource = {},
  event = {},
  loading,
  error,
  success,
  handleChange,
  handleUpdate,
  handleCreate,
  handleDelete,
}) => {

  const categoryOptions = [
    { key: 'speaker_slides', value: 'speaker_slides', icon: <Icon name="send" />, text: 'Speaker Slides' },
    { key: 'resource', value: 'resource', icon: <Icon name="send" />, text: 'Additional Resource' },
  ]

  const resourceTypeOptions = [
    { key: 'slides', value: 'slides', icon: <Icon name="send" />, text: 'Slides' },
    { key: 'ebook', value: 'ebook', icon: <Icon name="send" />, text: 'Ebook' },
    { key: 'video', value: 'video', icon: <Icon name="send" />, text: 'Video' },
    { key: 'article', value: 'article', icon: <Icon name="send" />, text: 'article' },
    { key: 'other', value: 'other', icon: <Icon name="send" />, text: 'Other' },
  ]

  // only stakeholders or speakers can add slides
  if (!event.is_stakeholder) {
    delete categoryOptions[0]
    delete resourceTypeOptions[0]
  }

  const {
    id,
    title = '',
    description = '',
    resource_type,
    category,
    url = ''
  } = resource

  return (
    <StyledResource>
        <Form loading={loading} success={success} error={error}>
          <Message
            success
            header='Success!'
            content={success}
          />

          <Message
            error
            header='Error!'
            content={error}
          />

          <Form.Field>
            <Label>Title</Label>
              <Input name="title"
                     value={title}
                     placeholder='The revolution of education'
                     onChange={({target}) => handleChange(target.name, target.value)}/>
          </Form.Field>

          <Form.Field>
            <Label>What's the resource about?</Label>
              <TextArea name="description"
                        value={description}
                        placeholder='What value does this material add?'
                        onChange={({target}) => handleChange(target.name, target.value)}/>
          </Form.Field>

          <Form.Field>
            <Label>A speaker's slides or an additional resource?</Label>
            <Select name="category"
                    value={category || 'resource'}
                    placeholder='speaker slides?'
                    defaultValue={category || 'resource'}
                    options={categoryOptions}
                    onChange={(e, attr) => handleChange(attr.name, attr.value) }/>
          </Form.Field>

          <Form.Field>
            <Label>How is it packaged?</Label>
            <Select name="resource_type"
                    value={resource_type}
                    placeholder='ebook?'
                    defaultValue={resource_type || 'ebook'}
                    options={resourceTypeOptions}
                    onChange={(e, attr) => handleChange(attr.name, attr.value) }/>
          </Form.Field>

          <Form.Field>
            <Label>Where can people access it online?</Label>
            <Input name="url"
                   value={url}
                   placeholder='http://somewhere.com/view/pdf'
                   onChange={({target}) => handleChange(target.name, target.value)}/>
            <p className="form-info">
              Please confirm you have legal rights to redistribute a material before sharing.
              If any material is proven to violate intellectual property laws, we would have to take it down..
            </p>
          </Form.Field>

          <Button onClick={id ? handleUpdate : handleCreate}>
            Save
          </Button>

          {id && <Button onClick={handleDelete}
                         className="btn-delete">
                   Delete
                 </Button>}
        </Form>
    </StyledResource>
  )
}

export default NewResource