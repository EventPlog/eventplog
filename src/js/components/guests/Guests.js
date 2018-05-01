import React from 'react'
import { Table, Icon, Menu } from 'semantic-ui-react'
import styled from 'styled-components';
import PageHeader from '../shared/PageHeader';

const StyledTable = styled.div`
  padding: 20px 0;
  
  .page-header {
    margin-bottom: 20px;
  }
`

const GuestsList = () => (
  <StyledTable>
    <PageHeader title="Guests" />
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>S/N</Table.HeaderCell>
          <Table.HeaderCell>Full Name</Table.HeaderCell>
          <Table.HeaderCell>Checked In</Table.HeaderCell>
          <Table.HeaderCell>Given Feedback</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>John</Table.Cell>
          <Table.Cell textAlign='center'>
            <Icon color='green' name='checkmark' size='large' />
          </Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>Jamie</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>Requires call</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>3</Table.Cell>
          <Table.Cell>Jill</Table.Cell>
          <Table.Cell>Denied</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='4'>
            <Menu floated='right' pagination>
              <Menu.Item as='a' icon>
                <Icon name='chevron left' />
              </Menu.Item>
              <Menu.Item as='a'>1</Menu.Item>
              <Menu.Item as='a'>2</Menu.Item>
              <Menu.Item as='a'>3</Menu.Item>
              <Menu.Item as='a' icon>
                <Icon name='chevron right' />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  </StyledTable>
)

export default GuestsList