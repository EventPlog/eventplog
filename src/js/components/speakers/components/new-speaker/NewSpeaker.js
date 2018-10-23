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

const StyledSpeaker = styled.div`
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
const NewSpeaker = ({
  speaker = {},
  email,
  loading,
  error,
  success,
  handleChange,
  handleUpdate,
  handleCreate,
  handleDelete,
}) => {

  let categoryOptions = [
    { key: 'speaker', value: 'speaker', icon: <Icon name="send" />, text: 'Additional Speaker' },
  ]

  let presentationTypeOptions = [
    { key: 'talk', value: 'talk', icon: <Icon name="folder open outline" />, text: 'Talk' },
    { key: 'workshop', value: 'workshop', icon: <Icon name="play circle" />, text: 'Workshop' },
    { key: 'other', value: 'other', icon: <Icon name="compass outline" />, text: 'Other' },
  ]

  const {
    id,
    title = '',
    summary = '',
    details = '',
    presentation_type = '',
    user = {}
  } = speaker

  return (
    <StyledSpeaker>
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
            <Label>What's the speaker's email?</Label>
            <small>You can add more details later.</small>
            <Input name="email"
                   value={user.email}
                   placeholder='someone@example.com'
                   onChange={({target}) => handleChange(target.name, target.value)}/>
          </Form.Field>

          <Form.Field>
            <Label>What's the title of this presentation?</Label>
              <Input name="title"
                     value={title}
                     placeholder='The revolution of education'
                     onChange={({target}) => handleChange(target.name, target.value)}/>
          </Form.Field>

          <Form.Field>
            <Label>What's the nature of this presentation?</Label>
            <Select name="presentation_type"
                    value={presentation_type}
                    placeholder='talk'
                    defaultValue={presentation_type || 'talk'}
                    options={presentationTypeOptions}
                    onChange={(e, attr) => handleChange(attr.name, attr.value) }/>
          </Form.Field>

          <Form.Field>
            <Label>Give a summary of the presentation</Label>
            <TextArea name="summary"
                      value={summary}
                      placeholder="At a glance, what's the presentation about?"
                      onChange={({target}) => handleChange(target.name, target.value)}/>
          </Form.Field>

          <Form.Field>
            <Label>Detailed description</Label>
            <TextArea name="details"
                      rows="10"
                      value={details}
                      placeholder='For the nerds, give a lot more details of what to expect'
                      onChange={({target}) => handleChange(target.name, target.value)}/>
          </Form.Field>

          <Button onClick={id ? handleUpdate : handleCreate}>
            Save
          </Button>

          {id && <Button onClick={handleDelete}
                         className="btn-delete">
                   Delete
                 </Button>}
        </Form>
    </StyledSpeaker>
  )
}

export default NewSpeaker