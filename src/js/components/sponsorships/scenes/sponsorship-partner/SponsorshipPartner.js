import React from 'react'
import { Checkbox, Icon, Form, Table, Header, Message } from 'semantic-ui-react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

// ========= INTERNAL ==========
import { titleize } from 'js/utils'
import ContentPanel from 'js/components/shared/content-panel'
import ExistingPartnerSearch from 'js/components/partners/scenes/existing-partner-search'
import Terms from '../terms'
import TextArea from 'js/components/shared/text-area'
import ContentEditable from 'js/components/shared/content-editable'

const StyledReview = styled.div`
  ul {
    list-style-type: disc;
    margin-left: 1rem;
  }
  
  .address-region {
    margin-bottom: 3rem;
  
    h3 {
      margin: 0;
    } 
  }
  
  .content-header {
    font-size: 1.3rem;
  }
  
  .content-body {
    textarea {
      width: 100%;
    }
  }
  
  .meta-details {
    margin: 2rem 0; 
  }
`

const SponsorshipPartner = ({
  cart,
  event,
  sponsorship,
  sponsorship_offer = {},
  updateSponsorship,
  handleChange,
  handleSubmit,
  currentUser,
  allowNext,
}) => {

  const {
    partner,
    partner_terms,
    organizer_terms,
    organizer_terms_accepted_by,
  } = sponsorship

  const termsAndConditions =
    <div>
      <Terms title="Organizer's Terms and Conditions"
             handleAccept={(e, attr) => {
                 updateSponsorship({'organizer_terms_accepted_by': currentUser.id })
               }}
             handleReject={() => {
                 updateSponsorship({'organizer_terms_accepted_by': null })
               }}
             terms={organizer_terms || sponsorship_offer.organizer_terms}
             canEdit={event.is_stakeholder && !organizer_terms_accepted_by}
             handleChange={handleChange}
             handleSubmit={handleSubmit}>

        <Form>
          <Form.Field>
            <Checkbox checked={!!organizer_terms_accepted_by}
                      label="I have read and accept the organizer's terms and conditions."/>
          </Form.Field>
        </Form>
      </Terms>
    </div>

  return (
    <StyledReview>
      <ContentPanel title="Select or create the organization you represent">
        <ExistingPartnerSearch handleSelect={allowNext} partner={partner} sponsorship_type="item" />
      </ContentPanel>

      {sponsorship.id &&
        [
          <ContentPanel title="Add any extra requests/conditions you wish">
            <ContentEditable propName="partner_terms"
                             type="textarea"
                             rows="10"
                             style={{minHeight: '10vh'}}
                             canEdit={true}
                             defaultValue={partner_terms}
                             onChange={handleChange}
                             onSubmit={handleSubmit}>
              <ReactMarkdown source={partner_terms || 'Click here to start typing...'}/>
            </ContentEditable>,

          </ContentPanel>,
          <div className="meta-details">
            {termsAndConditions}
          </div>
        ]
      }

    </StyledReview>
  )
}

export default SponsorshipPartner