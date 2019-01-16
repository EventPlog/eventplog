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

const StyledSponsor = styled.div`
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

export const sponsorshipTypeOptions = [
  { key: 'cash', value: 'cash', icon: <Icon name="usd" />, text: 'Cash' },
  { key: 'kind', value: 'kind', icon: <Icon name="envelope" />, text: 'Kind' },
  { key: 'any', value: 'other', icon: <Icon name="file alternate" />, text: 'any' },
]

const NewSponsorshipOfferItem = ({
  sponsorship_offer_item = {},
  loading,
  error,
  success,
  handleChange,
  handleUpdate,
  handleCreate,
  handleDelete,
}) => {

  const {
    id,
    title = '',
    sponsorship_type = '',
    benefits = '',
    amount,
    slots_available = '',
    user = {}
  } = sponsorship_offer_item

  return (
    <StyledSponsor>
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
            <label>What's the title of this package?</label>
              <Input name="title"
                     value={title}
                     placeholder='Silver Sponorship'
                     onChange={({target}) => handleChange(target.name, target.value)}/>
          </Form.Field>

          <Form.Field>
            <label>What benefits does a sponsor get?</label>
            <TextArea name="benefits"
                      rows="10"
                      value={benefits}
                      placeholder='Give details of what benefits a partner get by sponsoring this package'
                      onChange={({target}) => handleChange(target.name, target.value)}/>
          </Form.Field>

          <Form.Field>
            <label>What form of sponsorship would you prefer?</label>
            <Select name="sponsorship_type"
                    value={sponsorship_type}
                    placeholder='talk'
                    defaultValue={sponsorship_type || 'talk'}
                    options={sponsorshipTypeOptions}
                    onChange={(e, attr) => handleChange(attr.name, attr.value) }/>
          </Form.Field>

          <Form.Field>
            <label>How much does this package cost?</label>
            <Input name="amount"
                   value={amount}
                   type="number"
                   placeholder='1000'
                   onChange={({target}) => handleChange(target.name, target.value)}/>
          </Form.Field>

          <Form.Field>
            <label>How many sponsorship slots are available for this package?</label>
              <Input name="slots_available"
                     value={slots_available}
                     type="number"
                     placeholder='1'
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
    </StyledSponsor>
  )
}

export default NewSponsorshipOfferItem