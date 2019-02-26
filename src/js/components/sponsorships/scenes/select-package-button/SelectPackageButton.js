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
import UserLink from 'js/components/shared/user-link'
import NewPartnerLeadForm from 'js/components/partners/scenes/new-partner-lead-form'
import Modal from 'js/components/shared/modal'
import { resizeImage } from 'js/utils'

import {
  pluralize,
  genEventLink,
  genUserProfileLink,
  getUserAvatar,
  titleize,
} from 'js/utils'

const corporateImage = 'https://res.cloudinary.com/eventplog/image/upload/c_scale,dpr_auto/v1548380264/corporate_tie.png'

const classyTyleStyles =  {
  backgroundImage: `url(${resizeImage(corporateImage, 'thumbnail')})`,
  flex: '1',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  opacity: '0.2',
  margin: '1rem auto',
  maxWidth: '300px',
}

const newPartnerStyles = {
  maxWidth: '400px',
  flex: '1',
}

const newPartnerPanelStyles = {
  backgroundColor: '#f7f4ec'
}

const contentBodyStyles = {
  display: 'flex',
}

class SelectPackageButton extends React.Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    const { offer_item, custom_offer, offer, btnText } = this.props

    return (
      <Modal style={{margin: '4rem auto'}}
             trigger={
               (props) =>
                   <Button className="edit-btn" {...props}>
                     {btnText}
                   </Button>
             } >
        <ContentPanel className="new-partner-panel"
                      style={newPartnerPanelStyles}
                      bodyStyle={contentBodyStyles}
                      title="Contact the organizer">
          <NewPartnerLeadForm style={newPartnerStyles}
                              offer={offer}
                              offer_item={offer_item}
                              custom_offer={custom_offer}
                              handleModalClose={this.handleClose} />
          <div className="hidden-xs" style={classyTyleStyles}></div>
        </ContentPanel>
      </Modal>
    )
  }
}

export default SelectPackageButton

