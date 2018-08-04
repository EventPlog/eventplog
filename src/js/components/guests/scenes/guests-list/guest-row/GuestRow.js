import React from 'react'
import { Table, Icon, Menu } from 'semantic-ui-react'
import styled, { css } from 'styled-components';

import Loading from 'js/components/shared/loading'
import Button from 'js/components/shared/button'
import { media } from 'js/styles/mixins'

const styles = css`
  td {
    text-transform: capitalize;
  }
  
  button, a.btn-link {
    padding: 0.5rem;
    font-size: x-small;
    
    ${
      media.phone`
        display: inline-block;
      `
    } 
  }
  
  .small-text {
    font-size: 90%;
    color: ${props => props.theme.grayLight};
    text-transform: none;
  }
`

const GuestRow = ({
  className,
  index,
  guest = {},
  event = {},
  handleDelete,
  handleCheckIn,
  handleSubmit,
}) => {
  return (
    <Table.Row className={className}>
      <Table.Cell>{index + 1}</Table.Cell>
      <Table.Cell>
        {guest.user.display_name}<br />
        <span className="small-text">{guest.user.unconfirmed_email}</span>
      </Table.Cell>
      <Table.Cell textAlign='center'>
        {guest.check_in_time
          ? <Icon color='green' name='checkmark' size='large' />
          : <Button onClick={() => handleCheckIn(guest.user)}>
              Check In
            </Button>
        }
      </Table.Cell>
      <Table.Cell textAlign='center'>
        {guest.given_feedback
          ? <Icon color='green' name='checkmark' size='large' />
          : <Button.Link className="btn-link" to={`/communities/${event.community_id}/events/${event.id}/backstage/feedback/?guest_id=${guest.id}&guest_name=${guest.user.less_formal_name}`}>
              Show form
            </Button.Link>
        }
      </Table.Cell>
      <Table.Cell textAlign='center'>
        <Icon className='btn-delete'
              color='red'
              name='close'
              size='large'
              onClick={handleDelete} />
      </Table.Cell>
    </Table.Row>
  )
}

export default styled(GuestRow)`${styles}`