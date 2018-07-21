import React from 'react'
import { Table, Icon, Menu } from 'semantic-ui-react'
import styled, { css } from 'styled-components';
import Loading from 'js/components/shared/loading'

const styles = css`
  td {
    text-transform: capitalize;
  }
`

const GuestRow = ({
  className,
  index,
  guest = {},
  handleDelete,
}) => {
  return (
    <Table.Row className={className}>
      <Table.Cell>{index + 1}</Table.Cell>
      <Table.Cell>{guest.user.display_name.toLowerCase()}</Table.Cell>
      <Table.Cell textAlign='center'>
        {guest.check_in_time && <Icon color='green' name='checkmark' size='large' />}
      </Table.Cell>
      <Table.Cell textAlign='center'>
        {guest.given_feedback && <Icon color='green' name='checkmark' size='large' />}
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