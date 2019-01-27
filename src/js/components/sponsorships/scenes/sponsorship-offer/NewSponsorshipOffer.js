import React from 'react'
import styled from 'styled-components'
import { Form, Icon, Select } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// internal
import ContentPanel from 'js/components/shared/content-panel'
import { pluralize, genEventLink } from 'js/utils'
import { sponsorshipTypeOptions } from '../new-sponsorship-offer-item/NewSponsorshipOfferItem'
import { TextArea, Input, Button } from 'js/components/shared'

const CustomOfferForm = ({title, amount, benefits, sponsorship_type}) => {
  return (
    <Form>
      <div style={{paddingBottom: '2rem'}}>If you would like to help out in a way different from the packages above, you could make your own offer...</div>
      <Form.Field>
        <label>Describe the offer in a sentence.</label>
        <Input name="title"
               value={title}
               placeholder='Sponsorship of logistics'
               onChange={({target}) => handleChange(target.name, target.value)}/>
      </Form.Field>

      <Form.Field>
        <label>How much is this sponsorship worth?</label>
        <Input name="amount"
               value={amount}
               placeholder='100000'
               onChange={({target}) => handleChange(target.name, target.value)}/>
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
                  onChange={({target}) => handleChange(target.name, target.value)}/>
        <small>Event organizers would accept your request(s) before the money gets to them.</small>
      </Form.Field>
      <Button className="cta-add">
        <Icon name="plus"/> Add this offer to my cart
      </Button>
    </Form>
  )
}
const SponsorsList = ({
  title,
  sponsorship_offer_items,
  attendEvent,
  getSponsors,
  handleAddToCart,
  handleRemoveFromCart,
  currentUser,
  cart,
  allowNext,
  className = ''
}) => {

  const newOffer = {
    title: <span>
             Or make your own offer
           </span>,
    hideImage: true,
    description: <CustomOfferForm/>,
  }

  return (
    <ContentPanel.Card
      className={className}
      key='new'
      hideImage
      {...newOffer}
      showButton={false} />
  )
}

export default SponsorsList