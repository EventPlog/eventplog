import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Icon, Menu, Message } from 'semantic-ui-react'
import styled from 'styled-components';

// ============ Internal Components =============
import PageHeader from 'js/components/shared/PageHeader';
import Loading from 'js/components/shared/loading'
import Button from 'js/components/shared/button'
import Pagination from 'js/components/shared/pagination'
import GuestRow from './guest-row'
import { genEventLink } from 'js/utils'
import { media } from 'js/styles/mixins'

const StyledTable = styled.div`
  padding: 20px 0;
  
  .page-header {
    margin-bottom: 20px;
  }
  
  .check-in-form {
    margin-bottom: 1rem;
    display: inline-block;
  }
  
  .mobile-smaller-text {
    ${
      media.phone`
        font-size: 90%;
      `
    } 
  }
`

const GuestsList = ({
  guests = {},
  event,
  getGuests,
  success,
  handleSearch,
  showChildrenSuccess,
}) => {
  const { data = [], meta = {}, loading, error }  = guests
  if (loading) return <Loading />
  const startingIndex = meta.per_page * (meta.current_page - 1)
  return (
    <StyledTable>
      <p className="check-in-form">
        {/*<Button.Link to={`${genEventLink(event, event.community)}/backstage/guests?activeIndex=2`}>*/}
          {/*Register New Guest*/}
        {/*</Button.Link>*/}
        Click on 'New Guest' to register a person not on the list.
      </p>
      {success && <Message success
                           header='Success!'
                           content={success} />}

      <PageHeader title="Guests" handleSearch={handleSearch} />
      <p>Total no. of guests: {meta && meta.total_count}</p>
      <Table celled unstackable className="mobile-smaller-text">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>S/N</Table.HeaderCell>
            <Table.HeaderCell>Full Name</Table.HeaderCell>
            <Table.HeaderCell>Checked In</Table.HeaderCell>
            <Table.HeaderCell>Feedback</Table.HeaderCell>
            <Table.HeaderCell> </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data && data.map((guest, index) =>
            <GuestRow key={guest.id}
                      guest={guest}
                      event={event}
                      index={index + startingIndex}
                      showChildrenSuccess={showChildrenSuccess}
            />
          )}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='5'>
              <Menu floated='right' pagination>
                {
                  meta && meta.total_pages && data.length > 0
                    ? <Pagination totalPages={meta.total_pages}
                                  activePage={meta.current_page}
                                  onPageChange={getGuests} />
                    : ''
                }
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </StyledTable>
  )
}

export default GuestsList