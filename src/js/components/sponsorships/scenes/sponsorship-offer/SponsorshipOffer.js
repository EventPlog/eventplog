import React from 'react'
import { Icon } from 'semantic-ui-react'
import styled, {css} from 'styled-components'
import ReactMarkdown from 'react-markdown'

import SponsorshipOfferItems from './SponsorshipOfferItems'
import NewSponsor from '../new-sponsorship-offer-item'
import Button from 'js/components/shared/button'
import ContentPanel from 'js/components/shared/content-panel'
import Loading from 'js/components/shared/loading'
import { genEventLink } from 'js/utils'
import { media } from 'js/styles/mixins'
import Modal from 'js/components/shared/modal'
import ContentEditable from 'js/components/shared/content-editable'
import TargetAudience from './components/TargetAudience'
import MediaPartners from './components/MediaPartners'
import { removeSpecialChars } from 'js/utils'


const styles = css`
  position: relative;
  
  &.app-container {
    margin-top: 3rem;
    padding: 1rem;
    
    > div {
      width: 100%;
    }
  }
  
  .pic-frame {
    margin: 2rem 0;
  }
  
  .caption {
    margin: 1rem 0;
  }
  
  img {
    max-width: 100%;
  }
  
  .pagination-wrapper {
    display: flex;
  }
  
  .meta-details {
    display: flex;
    flex-direction: column;
    margin: 2rem 2rem 4rem;
    line-height: 1.5;
    
    ${
      media.phone`
        margin-left: 0rem;
        margin-right: 0rem;
      `
    }
    
    form {
      margin-bottom: 2rem;
    }
    
    .field {
      margin-bottom: 2rem;
      
      label {
        font-size: 1.2rem;
      }
    }
  }
  
  .continue-btn {
    background-color: ${props => props.theme.green};
    font-size: 1.2rem;
    padding: 1.2rem;
  }
  
  .pseudo-link {
    color: var(--activeLink);
  }
  
  .content-panel + .content-panel {
    margin-top: 6rem;
  }
  
  td .small {
    display: block;
    font-size: 90%;
    color: #888;
  }
  
  .btn-delete {
    cursor: pointer;
    
    &:hover {
      background: ${props => props.theme.gray};
    }
  }
  
  .same-line {
    display: flex;
  }
  
  .sponsorship-package-title {
    align-items: flex-end;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
`

export const generateTitle = (event) => {
  return (
    <div className="sponsorship-package-title">
      Sponsorship Packages

      <div className="right">
        { event.is_stakeholder &&
          <Modal style={{padding: '2rem 0'}}
                 trigger={
                    <Button>
                      <Icon name="plus"/>
                      Add a new package
                    </Button>
                  }>
            <ContentPanel title="Add a package you'd like sponsored">
              <NewSponsor newSponsor />
            </ContentPanel>
          </Modal>
        }
      </div>
    </div>
  )
}

export const SponsorshipOffer = ({
  className,
  sponsorships = {},
  sponsorship_offer = {},
  sponsorship_offer_items = {},
  event,
  cart,
  loading,
  error,
  currentUser,
  handleChange,
  handleSubmit,
  updateEvent,
  partners = {},
  deleteSponsorship,
  allowNext = () => {}
}) => {

  if (loading) return <Loading />
  if (error) return <Loading.Error msg={error} />

  return (
    <div className={`${className} sponsors app-container`}>
      <div>
        {(sponsorship_offer.pitch || event.is_stakeholder) &&
          <ContentPanel title="Quick note from organizers">
            <ContentEditable propName="pitch"
                             type="textarea"
                             rows="10"
                             style={{minHeight: '10vh'}}
                             canEdit={event.is_stakeholder}
                             defaultValue={sponsorship_offer.pitch}
                             onChange={handleChange}
                             onSubmit={handleSubmit}>
              <ReactMarkdown source={sponsorship_offer.pitch || (event.is_stakeholder ? 'Click to add a quick note convincing people why they should sponsor this event.': '')}/>
            </ContentEditable>
          </ContentPanel>
        }

        <MediaPartners {...{ partners, event, sponsorships, deleteSponsorship }} />

        <TargetAudience {...{ sponsorship_offer, handleChange,
                              handleSubmit, updateEvent, event } }/>

        <SponsorshipOfferItems title={generateTitle(event)}
                               currentUser={currentUser}
                               cart={cart}
                               allowNext={allowNext}
                               sponsorship_offer_items={sponsorship_offer_items} />

      </div>
    </div>
  )
}

export default styled(SponsorshipOffer)`${styles}`
