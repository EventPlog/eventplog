import React from 'react'
import { Message, Form, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import { lighten } from 'polished'

import { media } from 'js/styles/mixins'
import Loading from 'js/components/shared/loading'
import Input from 'js/components/shared/input'
import TextArea from 'js/components/shared/text-area'
import Button from 'js/components/shared/button'
import Select from 'js/components/shared/select'
import PlaceSelector from 'js/components/shared/place-selector'

const StyledPartner = styled.div`
  ${
    media.phone`
      padding: 1rem;
    `
  }
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

export const partnerTypeOptions = [
  { key: 'media', value: 'media', icon: <Icon name="folder open outline" />, text: 'Media' },
  { key: 'sponsor', value: 'sponsor', icon: <Icon name="play circle" />, text: 'Sponsor' },
]

const NewPartner = ({
  partner = {},
  loading,
  error,
  success,
  className,
  style = {},
  handleChange,
  handleUpdate,
  handleCreate,
  handleDelete,
}) => {

  const {
    id,
    name = '',
    tagline = '',
    description = '',
    tw_username = '',
    fb_username = '',
    site_link,
    logo = '',
    slug = '',
    phone_number = '',
  } = partner

  const isValid = name && tagline && description && phone_number

  return (
    <StyledPartner style={style} className={className}>
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
            <label>Name</label>
              <Input name="name"
                     value={name}
                     placeholder='XYZ Company'
                     onChange={({target}) => handleChange(target.name, target.value)}/>
          </Form.Field>

          <Form.Field>
            <label>Tagline</label>
            <Input name="tagline"
                   value={tagline}
                   placeholder='A brief catchy phrase the organization goes by'
                   onChange={({target}) => handleChange(target.name, target.value)}/>
          </Form.Field>

          <Form.Field>
            <label>Description</label>
            <TextArea name="description"
                      value={description}
                      placeholder="Describe what this company or brand stands for."
                      onChange={({target}) => handleChange(target.name, target.value)}/>
          </Form.Field>

          <Form.Field className="wide email-holder">
            <label>Official address</label>
            <PlaceSelector location={partner.location}
                           locationField="location"
                           handleChange={handleChange} />
          </Form.Field>

          <Form.Field>
            <label>Contact Phone Number</label>
            <Input name="phone_number"
                   value={phone_number}
                   placeholder='08023456789'
                   onChange={({target}) => handleChange(target.name, target.value)}/>
          </Form.Field>

          <Form.Field>
            <label>twitter Username</label>
            <Input name="tw_username"
                   value={tw_username}
                   placeholder='username without the @'
                   onChange={({target}) => handleChange(target.name, target.value)}/>
          </Form.Field>

          <Form.Field>
            <label>Facebook Username</label>
            <Input name="fb_username"
                   value={fb_username}
                   placeholder='username without the @'
                   onChange={({target}) => handleChange(target.name, target.value)}/>
          </Form.Field>

          <Form.Field>
            <label>Site Link</label>
            <Input name="site_link"
                   value={site_link}
                   placeholder='@twitter_username'
                   onChange={({target}) => handleChange(target.name, target.value)}/>
          </Form.Field>

          {id &&
            <Form.Field>
              <label>Slug</label>
              <Input name="slug"
                     value={slug}
                     placeholder='slug'
                     onChange={({target}) => handleChange(target.name, target.value)}/>
            </Form.Field>
          }

          <Button disabled={!isValid}
                  onClick={id ? handleUpdate : handleCreate}>
            Save
          </Button>

          {id && <Button inverted
                         onClick={handleDelete}
                         className="btn-delete">
                   Delete
                 </Button>}
        </Form>
    </StyledPartner>
  )
}

export default NewPartner