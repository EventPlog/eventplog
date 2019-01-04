import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

// ========= INTERNAL ==========
import { titleize, genEventLink } from 'js/utils'

const CURRENCY = process.env.REACT_APP_CURRENCY

const StyledPayment = styled.div`
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
  
`

const SponsorshipPaymentTable = ({
  cart,
  total,
  event,
  sponsorship,
}) => {

  const { partner = {} } = sponsorship
  return (
    <StyledPayment>
      <div className="address-region">
        <small>To:</small>
        <h3>{partner.name}</h3>
        <div className="subtitle">{partner.location && partner.location.address}</div>
        <div className="subtitle">C/O: {partner.user && partner.user.display_name}</div>
      </div>

      <p>
        Hi {partner.user.less_formal_name},
      </p>
      <p>
        Thank you for your interest in supporting <Link to={genEventLink(event)}>{event.title}</Link> with a total of {CURRENCY}{total}.
      </p>
      <p>
        We are still figuring out the best way to serve partner organizations, so one of our <b>partner advocates</b> will reach out to you <b>within 24 hours</b> to confirm your terms, conditions and synchronize your expectations with the event organizer before sharing with your our current means of payment.
      </p>
      <p>
        We will reach out to you via telephone (<b>{partner.phone_number}</b>) and via email (<b>{partner.user.email}</b>).
      </p>
      <p>
        Once again, thank you for all your support!
      </p>
      <br />
      <br />
      <p>
        Warm regards,
      </p>
      <p>
        <b>Innocent Amadi</b><br/>
        Partner Advocate, EventPlog.
      </p>
    </StyledPayment>
  )
}

export default SponsorshipPaymentTable