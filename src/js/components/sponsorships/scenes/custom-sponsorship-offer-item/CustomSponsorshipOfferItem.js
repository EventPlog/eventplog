import React from 'react'
import styled from 'styled-components'
import { Form, Icon, Select, Checkbox } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// internal
import ContentPanel from 'js/components/shared/content-panel'
import { pluralize, genEventLink } from 'js/utils'
import { sponsorshipTypeOptions } from '../new-sponsorship-offer-item/NewSponsorshipOfferItem'
import { TextArea, Input, Button } from 'js/components/shared'
import SelectPackageButton from 'js/components/sponsorships/scenes/select-package-button'

const CustomSponsorshipOffer = ({
  sponsorship_offer_item = {},
  handleChange,
  className = ''
}) => {
  const {
    title,
    amount,
    benefits,
    sponsorship_type,
  } = sponsorship_offer_item

  const valid = title && amount && benefits && sponsorship_type

  return (
      <Form>
        <div style={{paddingBottom: '2rem'}}>
          Let the organizers know how you would like to contribute.
        </div>
        <Form.Field>
          <label>Describe the offer in a sentence.</label>
          <Input name="title"
                 value={title}
                 placeholder='Sponsorship of logistics'
                 onChange={({target}) => handleChange({[target.name]: target.value})}/>
        </Form.Field>

        <Form.Field>
          <label>How much is this sponsorship worth?</label>
          <Input name="amount"
                 value={amount}
                 placeholder='100000'
                 onChange={({target}) => handleChange({[target.name]: target.value})}/>
        </Form.Field>

        <Form.Field>
          <label>What form of sponsorship would you this be?</label>
          <Select name="sponsorship_type"
                  value={sponsorship_type}
                  placeholder='cash'
                  defaultValue={sponsorship_type || 'cash'}
                  options={sponsorshipTypeOptions}
                  onChange={(e, attr) => handleChange({[attr.name]: attr.value}) }/>
        </Form.Field>

        <Form.Field>
          <label>What benefits do you request for from the organizers?</label>
          <TextArea name="benefits"
                    value={benefits}
                    placeholder="* 2 thank you tweets."
                    onChange={({target}) => handleChange({[target.name]: target.value})}/>
        </Form.Field>

        <div className="cta-add edit-cta">
          <SelectPackageButton disabled={!valid}
                               btnText={<span><Icon name="send" /> Submit Offer</span>}
                               offer={sponsorship_offer_item}
                               custom_offer={sponsorship_offer_item} />
        </div>

      </Form>
  )
}

export default CustomSponsorshipOffer