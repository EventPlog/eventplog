import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import ReactMarkdown from 'react-markdown'
import { lighten } from 'polished'

const CURRENCY = process.env.REACT_APP_CURRENCY

// internal
import ContentPanel from 'js/components/shared/content-panel'
import Button from 'js/components/shared/button'
import NewSponsor from '../new-sponsorship-offer-item/NewSponsorshipOfferItem'
import SelectPackageButton from 'js/components/sponsorships/scenes/select-package-button'
import { resizeImage } from 'js/utils'

import {
  pluralize,
  genEventLink,
  genUserProfileLink,
  getUserAvatar,
  titleize,
} from 'js/utils'

export const generateTitle = (sponsorship_offer_item = {}, event = {}, handleViewCount) => {
  return (
    <h3>
      {sponsorship_offer_item.title} ({sponsorship_offer_item.slots_taken || 0} of {sponsorship_offer_item.slots_available}) - {CURRENCY}{sponsorship_offer_item.amount}
    </h3>
  )
}

export const generateDescription = (sponsorship_offer_item = {}) => (
  <span>
    <ReactMarkdown source={sponsorship_offer_item.benefits} escapeHtml={false} />
  </span>
)

export const generateMeta = (sponsorship_offer_item, handleEdit, event) => (
  <ul className="meta">
    <li className='highlighted'>
      Preferred form: {sponsorship_offer_item.sponsorship_type || 'Cash or Kind'}
    </li>
    <li>
      <SelectPackageButton offer={sponsorship_offer_item}
                           btnText={<span><Icon name="send" /> Sponsor this package</span>}
                           offer_item={{
                             offer_item_id: sponsorship_offer_item.id,
                             offer_item_type: 'SponsorshipOfferItem'
                           }} />
    </li>
    {event.is_stakeholder &&
      <li>
        <Button onClick={handleEdit} className="edit-btn">
          <Icon name="edit" /> Edit
        </Button>
      </li>
    }
  </ul>
)

export const generateCTA = (handleClick) => (
  <Button onClick={handleClick}>
    Interested
  </Button>
)

const styles = css`
  button {
    padding: 1rem;
    min-width: 70px;
    margin-left: 0.5rem;
    
    &.cta-btn {
      color: ${props => props.theme.blueDark};
      background-color: ${props => props.theme.yellow};
      border-color: ${props => props.theme.yellow};
      font-size: 1.2rem;
      
      &.remove {
        background-color: ${props => props.theme.gray};
      }
      
      &.footer-btn {
        margin: 1rem 0;
      }
    }
  }
  
  .card-title a {
    color: var(--activeLink);
  }
  
  p, ul {
    max-width: 800px;
    font-size: 1.2em;
    font-weight: 400;
    color: #444; 
  }
  
  ul:not(.meta) {
    list-style: disc;
    padding-left: 2rem;
  }
  
  h3, h4 {
    margin-bottom: 0.5rem;
    font-weight: 800;
  }
  
  .highlighted {
    background: ${props => lighten(0.4, props.theme.primary)};
    padding: 5px;
    color: #000;
    font-weight: 500;
  }
  
  .edit-btn {
    margin: 1rem 0;
  }
`

export const SponsorshipOfferItem = ({
  sponsorship_offer_item,
  event,
  cart,
  loading,
  error,
  success,
  handleChange,
  handleUpdate,
  handleDelete,
  handleEdit,
  handleViewCount,
  handleAddToCart = () => {},
  handleRemoveFromCart = () => {},
  addedToCart,
  editing = false,
  currentUser,
  className,
}) => {
  const title = generateTitle(sponsorship_offer_item, event, handleViewCount)
  const description = generateDescription(sponsorship_offer_item)
  const meta = generateMeta(sponsorship_offer_item, handleEdit, event)
  const btn = addedToCart || sponsorship_offer_item.addedToCart
    ? {
      onClick: () => handleRemoveFromCart(),
      className: 'cta-btn remove',
      icon: <span><Icon name="minus"/>{`Remove from your cart`}</span>,
      inverted: true,
    } :
    {
      onClick: () => {},
      className: 'cta-btn',
      fullBtn: <SelectPackageButton />,
      inverted: true,
    }

  if (editing) {
    return (
      <ContentPanel title={`Edit or delete "${sponsorship_offer_item.title}"`}>
        <NewSponsor {...{
          sponsorship_offer_item, event, loading,
          error, success, handleChange,
          handleUpdate, handleDelete
        }} />
      </ContentPanel>
    )
  }

  return (
    <ContentPanel.Card
      className={className}
      key={sponsorship_offer_item.id}
      hideImage
      featured_image={getUserAvatar(sponsorship_offer_item.user)}
      {...{title, description, meta, btn}}
      showButton={false} />
  )
}

export default styled(SponsorshipOfferItem)`${styles}`