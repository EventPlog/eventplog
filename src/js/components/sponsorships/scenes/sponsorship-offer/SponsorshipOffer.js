import React from 'react'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { lighten } from 'polished'

import SponsorshipOfferItems from './SponsorshipOfferItems'
import NewSponsor from '../new-sponsorship-offer-item'
import Button from 'js/components/shared/button'
import ContentPanel from 'js/components/shared/content-panel'
import Loading from 'js/components/shared/loading'
import { media } from 'js/styles/mixins'
import Modal from 'js/components/shared/modal'
import ContentEditable from 'js/components/shared/content-editable'
import TargetAudience from './components/TargetAudience'
import MediaPartners from './components/MediaPartners'
import Members from 'js/components/shared/members'
import AboutUser from 'js/components/user/scenes/user/components/AboutUser.js'

import {
  genEventLink,
  genCommunityLink,
  removeSpecialChars
} from 'js/utils'


const StyledSponsorshipOffer = styled.div`
  position: relative;
  background: #634d46;
  
  &.app-container {
    margin-top: 3rem;
    margin-bottom: 6rem;
    padding: 1rem;
    
    > div {
      width: 100%;
    }
    
    ${
      media.phone`
        background: transparent;
        margin-left: -2rem;
        width: calc(100% + 4rem);
        margin-top: 0;
        margin: 0;
      `
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
    margin: 1rem auto;
    align-self: center;
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
  
  button {
    background: var(--yellow);
    border: none;
    color: ${props => props.theme.darkGray};
    font-size: 1.2rem;
  }
  
  .continue-btn {
    background-color: ${props => props.theme.green};
    font-size: 1.2rem;
    padding: 1.2rem;
  }
  
  .pseudo-link {
    color: var(--activeLink);
  }
  
  .content-panel {
    padding-top: 6rem;
    padding-bottom: 4rem;
    background-color: inherit;
    box-shadow: none;
    
    ${
      media.phone`
        padding-right: 2rem;
        padding-left: 2rem;
      `
    }
    
    &.yellow {
      background: #f7f78a;
    }
    
    &.blue {
      background: #b9cbfb;
    }
    
    &.brown {
      background: #fbbba4;
    }
    
    &.purple {
      background: #ceb7fd;
    }
    
    &.dark-purple {
      background: ${props => lighten(-0.05, '#ceb7fd')};
    }
    
    &.gray {
      background: ${props => props.theme.gray};
    }
    
    &.light-green {
      background: #c0dee4;
    }
    
    &.white {
      background: #fff;
    }
    
    .content-header {
      font-size: 2rem;
    }
    
    &.add-partner {
      padding-top: 2rem;
      padding-bottom: 0;
      
      .content-header {
        font-size: 1.2rem;
      }
    }
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
  
  .edit-cta {
    margin-top: 2rem;
  }
  
  div, p {
    font-size: 1.4rem;
    line-height: 1.6;
  }
  
  .btn-inline {
    display: inline-block;
    margin-top: 1rem;
  }
  
  .avatar-medium {
    margin: 2rem 0;
  }
  
  .custom-sponsor-form {
    padding-top: 2rem;
    padding-bottom: 1rem;
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
                      Add
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
  organizers,
  sponsorships = {},
  sponsorship_offer = {},
  sponsorship_offer_items = {},
  event = {},
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

  const { community } = event
  return (
    <StyledSponsorshipOffer className={`${className} sponsors app-container`}>
      <div>
        {(sponsorship_offer.pitch || event.is_stakeholder) &&
          <ContentPanel className="yellow" title="Quick Pitch">
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
        {(community || event.is_stakeholder) &&
          <ContentPanel className="gray" title="About the community">
            {community && community.description && <ReactMarkdown source={community.description} />}
            {event.is_stakeholder &&
              <div className="edit-cta">
                <Button.Link className="btn-inline" to={`${genCommunityLink(community)}/edit`}>
                  Update community description
                </Button.Link>
              </div>
            }
          </ContentPanel>
        }

        {(event.goals || event.is_stakeholder) &&
          <ContentPanel className="light-green" title={`About ${event.title}`}>
            <ReactMarkdown source={event.description || event.goals} />

            <img src={event.featured_image} />

            {event.is_stakeholder
              ? <div className="edit-cta">
                  <Button.Link className="btn-inline"
                               to={`${genEventLink(event)}/backstage/settings?activeIndex=1`}>
                    Update event description
                  </Button.Link>
                </div>
              : <div className="edit-cta">
                  <Button.Link target="_blank"
                               inverted
                               className="btn-inline"
                               to={`${genEventLink(event)}`}>
                    View more on event page
                  </Button.Link>
                </div>
            }
          </ContentPanel>
        }

        {organizers &&
          <ContentPanel className="white" title="Meet the organizers">
            <Members>
              {organizers.length > 3
                ? organizers.map(member =>
                    <Members.Member member={member} />
                  )
                : organizers.map(member =>
                    <AboutUser {...{user: member, currentUser }}/>
                  )
              }
            </Members>
            {event.is_stakeholder &&
              <Button.Link className="btn-inline" to={`${genEventLink(event, event.community)}/backstage/settings`}>
                Add more organizers
              </Button.Link>
            }
          </ContentPanel>
        }

        <MediaPartners className="blue" {...{ partners, event, sponsorships, deleteSponsorship }} />

        <TargetAudience className="brown"
                        {...{ sponsorship_offer, handleChange,
                              handleSubmit, updateEvent, event } }/>

        <SponsorshipOfferItems title={generateTitle(event)}
                               currentUser={currentUser}
                               cart={cart}
                               allowNext={allowNext}
                               className="purple"
                               sponsorship_offer_items={sponsorship_offer_items} />

      </div>
    </StyledSponsorshipOffer>
  )
}

export default SponsorshipOffer
