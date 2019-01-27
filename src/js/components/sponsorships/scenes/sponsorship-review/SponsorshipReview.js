import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

// ========= INTERNAL ==========
import { titleize, genEventLink } from 'js/utils'

const CURRENCY = process.env.REACT_APP_CURRENCY

const StyledReview = styled.div`
  ul {
    list-style-type: disc;
    margin-left: 1rem;
  }
  
  .address-region {
    margin-bottom: 3rem;
  
    small {
      text-transform: uppercase;
    }
    
    h3 {
      margin: 0;
    } 
  }
  
  .sub-total {
    font-size: 130%;
    
    td:first-child {
      text-align: right;
    }
    
    td:last-child {
      padding: 0.7rem;
    }
  }
  
  .vat {
    td:first-child {
      text-align: right;
    }
  }
  
  .total {
    font-size: 200%;
    
    th:first-child {
      text-align: right;
      padding: 1.5rem;
      padding-right: 0.7rem;
    }
    
    th:last-child {
      padding: 0.7rem;
    }
  }
`

const SponsorshipReviewTable = ({
  cart,
  subTotal,
  vat,
  total,
  sponsorship,
}) => {

  const { partner = {} } = sponsorship
  return (
    <StyledReview>
      <div className="address-region">
        <small>Bill to:</small>
        <h3>{partner.name}</h3>
        <div className="subtitle">{partner.location && partner.location.address}</div>
        <div className="subtitle">C/O: {partner.user && partner.user.display_name}</div>
      </div>

        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Event</Table.HeaderCell>
              <Table.HeaderCell>Package</Table.HeaderCell>
              <Table.HeaderCell>Benefits</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {cart.data && cart.data.map(({event = {}, ...item}) =>
              <Table.Row>
                <Table.Cell>
                  <Link target='_blank' to={genEventLink(event)}>
                    {event.title}
                  </Link>
                </Table.Cell>
                <Table.Cell>{item.title}</Table.Cell>
                <Table.Cell>
                  <ReactMarkdown source={item.benefits} />
                </Table.Cell>
                <Table.Cell>{titleize(item.sponsorship_type)}</Table.Cell>
                <Table.Cell>{CURRENCY}{parseFloat(item.amount).toFixed(2)}</Table.Cell>
              </Table.Row>
            )}

            <Table.Row className="sub-total">
              <Table.Cell colSpan='4'>Sub-Total</Table.Cell>
              <Table.Cell>{CURRENCY}{subTotal.toFixed(2)}</Table.Cell>
            </Table.Row>

            <Table.Row className="vat">
              <Table.Cell colSpan='4'>VAT</Table.Cell>
              <Table.Cell>{CURRENCY}{vat.toFixed(2)}</Table.Cell>
            </Table.Row>

            <Table.Row className="total">
              <Table.HeaderCell colSpan='4'>Total</Table.HeaderCell>
              <Table.HeaderCell>{CURRENCY}{total.toFixed(2)}</Table.HeaderCell>
            </Table.Row>
          </Table.Body>

        </Table>
    </StyledReview>
  )
}

export default SponsorshipReviewTable