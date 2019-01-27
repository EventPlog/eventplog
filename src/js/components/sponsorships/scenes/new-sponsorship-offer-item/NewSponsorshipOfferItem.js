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
import config from 'js/config'

export const PLATFORM_COST = config.platform_cost
export const CURRENCY = config.currency

const StyledSponsor = styled.div`
  .form-info {
    font-size: 0.9rem;
    padding: 1rem;
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

export const getOriginalCost = (amt, originalCost) => originalCost
  ? parseFloat(originalCost)
  : (parseFloat(amt) / (parseFloat(PLATFORM_COST) + 1)).toFixed(2)

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
    originalCost = 0,
    user = {},
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
            <label>What's the title of this package?*</label>
              <Input name="title"
                     value={title}
                     placeholder='Silver Sponorship'
                     onChange={({target}) => handleChange({[target.name]: target.value} )} />
          </Form.Field>

          <Form.Field>
            <label>What benefits does a sponsor get?</label>
            <TextArea name="benefits"
                      rows="10"
                      value={benefits}
                      placeholder='Give details of what benefits a partner get by sponsoring this package'
                      onChange={(e) => handleChange({[e.target.name]: e.target.value} )} />
          </Form.Field>

          <Form.Field>
            <label>What form of sponsorship would you prefer?</label>
            <Select name="sponsorship_type"
                    value={sponsorship_type}
                    placeholder='cash'
                    defaultValue={sponsorship_type || 'cash'}
                    options={sponsorshipTypeOptions}
                    onChange={(e, attr) => handleChange({[attr.name]: attr.value}) }/>
          </Form.Field>

          <Form.Field>
            <label>How much does this package cost?*</label>
            <Input name="amount"
                   value={getOriginalCost(amount, originalCost) || 0}
                   type="number"
                   placeholder='1000'
                   onChange={({target}) => {
                     let value = parseFloat(target.value)
                     handleChange({
                       originalCost: target.value,
                       amount: value + (value * parseFloat(PLATFORM_COST))
                     })
                   }}/>
            <small>
              Package total cost is {CURRENCY}{amount}. We add our 15% platform fee to whatever amount you put. That way eventplog stays free for you.
            </small>
          </Form.Field>

          <Form.Field>
            <label>How many sponsorship slots are available for this package?</label>
              <Input name="slots_available"
                     value={slots_available}
                     type="number"
                     placeholder='1'
                     onChange={({target}) => handleChange({[target.name]: target.value} )}/>
          </Form.Field>

          <Button inverted
                  disabled={!(title && amount)}
                  onClick={id ? handleUpdate : handleCreate}>
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