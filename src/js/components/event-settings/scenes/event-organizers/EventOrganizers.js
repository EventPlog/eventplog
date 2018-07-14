import React from 'react';
import styled from 'styled-components';
import { Icon, Form } from 'semantic-ui-react'

// internal
import ContentPanel from 'js/components/shared/content-panel'
import Input from 'js/components/shared/input'
import Button from 'js/components/shared/button'
import Members from 'js/components/shared/members'
import PendingInvitationsList from './PendingInvitationsList'

import data from 'js/mock-api/data'

const StyleEventOrganizers = styled.div`
  > img {
    width: 100%;
  }
`

const EventOrganizers = ({
  event = {},
  recipient_emails,
  handleChange,
  handleDelete,
  handleSubmit,
}) =>
  <StyleEventOrganizers>
    <ContentPanel title="Add organizers">
      <Form>
        <Form.Field>
          <label>Type in email addresses of co-organizers, separated by commas</label>
          <Input onChange={handleChange}
                 name="recipient_emails"
                 value={recipient_emails}
                 placeholder="someone@example.com, another@somedomain.com"/>
        </Form.Field>
        <Button onClick={handleSubmit}>
          Send Invitation
        </Button>
      </Form>
    </ContentPanel>

    {event.organizers && event.organizers.length > 0 &&
      <ContentPanel title="Organizers">
        <Members {...{members: event.organizers}} />
      </ContentPanel>}

    {event.organizers_invitations && event.organizers_invitations.length > 0 &&
      <ContentPanel title="Pending invitations">
        <PendingInvitationsList invitations={event.organizers_invitations}
                                handleDelete={handleDelete}
        />
      </ContentPanel>}
  </StyleEventOrganizers>

export default EventOrganizers;
