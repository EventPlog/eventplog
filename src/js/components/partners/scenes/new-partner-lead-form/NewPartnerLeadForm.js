import React from 'react'
import { Message, Form, Icon, Checkbox } from 'semantic-ui-react'
import styled from 'styled-components'
import { lighten } from 'polished'

import { media } from 'js/styles/mixins'
import Loading from 'js/components/shared/loading'
import Input from 'js/components/shared/input'
import TextArea from 'js/components/shared/text-area'
import Button from 'js/components/shared/button'
import Select from 'js/components/shared/select'
import PlaceSelector from 'js/components/shared/place-selector'

const delay = 7000;

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
  
  button {
    font-size: 1.1rem;
    margin: 1rem 1rem 0 0;
  }
  
  .info {
    margin-bottom: 2rem;
  }
`

export const partnerTypeOptions = [
  { key: 'media', value: 'media', icon: <Icon name="folder open outline" />, text: 'Media' },
  { key: 'sponsor', value: 'sponsor', icon: <Icon name="play circle" />, text: 'Sponsor' },
]

const NewPartner = ({
  partner_lead = {},
  offer = {},
  currency,
  loading,
  error,
  success,
  className,
  style = {},
  handleChange,
  handleUpdate,
  handleCreate,
  handleDelete,
  handleModalClose,
}) => {

  const {
    id,
    company_name,
    extra_details,
    user = {},
    accept_terms,
  } = partner_lead

  const {
    first_name,
    last_name,
    email,
    phone_number = '',
  } = user

  const isValid = first_name && last_name && company_name
                  && (email || phone_number) && accept_terms

  const updatedUser = (key, update) => ({...user, [key]: update})

  if (success && handleModalClose) {
    window.setTimeout(() => handleModalClose(), delay)
    return (
      <Message
        success
        header='Success!'
        content={success}
      />
    )
  }

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

          <div className="info">
            Request to sponsor: {offer.title} ({currency}{offer.amount})
          </div>

          <Form.Field>
            <label>First Name</label>
              <Input name="first_name"
                     value={first_name}
                     placeholder='Jane'
                     onChange={({target}) => handleChange('user', updatedUser(target.name, target.value))}/>
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <Input name="last_name"
                   value={last_name}
                   placeholder='Doe'
                   onChange={({target}) => handleChange('user', updatedUser(target.name, target.value))}/>
          </Form.Field>

          <Form.Field>
            <label>Email</label>
            <Input name="email"
                   type="email"
                   value={email}
                   placeholder=''
                   onChange={({target}) => handleChange('user', updatedUser(target.name, target.value))}/>
          </Form.Field>

          <Form.Field>
            <label>Phone Number</label>
            <Input name="phone_number"
                   type="number"
                   value={phone_number}
                   placeholder=''
                   onChange={({target}) => handleChange('user', updatedUser(target.name, target.value))}/>
          </Form.Field>

          <Form.Field>
            <label>Company</label>
            <Input name="company_name"
                   value={company_name}
                   placeholder='XYZ Company'
                   onChange={({target}) => handleChange(target.name, target.value)}/>
          </Form.Field>

          <Form.Field>
            <label>Anything else you would like to add? (optional)</label>
            <TextArea name="extra_details"
                      value={extra_details}
                      placeholder='I would like to be carried along during planning'
                      onChange={({target}) => handleChange(target.name, target.value)}/>
          </Form.Field>

          <Form.Field>
            <Checkbox checked={accept_terms}
                      onClick={(e, attr) => handleChange('accept_terms', attr.checked ) }
                      label='I accept to be contacted by EventPlog on behalf of the organizer either by email or phone' />
          </Form.Field>

          <Button disabled={!isValid}
                  inverted
                  onClick={id ? handleUpdate : handleCreate}>
            Save
          </Button>

          <Button onClick={handleModalClose}>
            Cancel
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