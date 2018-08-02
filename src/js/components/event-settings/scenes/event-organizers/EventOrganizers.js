import React from 'react';
import styled from 'styled-components';
import { Icon, Form, Message } from 'semantic-ui-react'

// internal
import ContentPanel from 'js/components/shared/content-panel'
import Input from 'js/components/shared/input'
import Button from 'js/components/shared/button'
import Members from 'js/components/shared/members'
import PendingInvitationsList from './PendingInvitationsList'
import Select from 'js/components/shared/select'
import roleOptions from 'js/utils/userRoleOptions'
import EventOrganizer from '../event-organizer'

import data from 'js/mock-api/data'

const StyleEventOrganizers = styled.div`
  > img {
    width: 100%;
  }
`

const EventOrganizers = ({
  event = {},
  role,
  volunteers,
  organizers,
  recipient_emails,
  handleChange,
  handleDelete,
  handleSubmit,
  error,
  loading,
}) =>
  <StyleEventOrganizers>
    <ContentPanel title="Add organizers">
      <Form loading={loading} error={!!error}>

      <Message
        error
        header="Error"
        content={error && error.toString()}
      />

        <Form.Field>
          <label>Type in email addresses of co-organizers, separated by commas</label>
          <Input onChange={(e) => handleChange(e.target.name, e.target.value)}
                 name="recipient_emails"
                 value={recipient_emails}
                 placeholder="someone@example.com, another@somedomain.com"/>
        </Form.Field>


        <Form.Field>
          <label>Assigned role</label>
          <Select options={roleOptions}
                  name="role"
                  value={role}
                  defaultValue={roleOptions[0].text}
                  onChange={(e, attr) => handleChange(attr.name, attr.value)}/>

        </Form.Field>
        <Button onClick={handleSubmit}>
          Send Invitation
        </Button>
      </Form>
    </ContentPanel>

    {organizers && organizers.length > 0 &&
      <ContentPanel title="Organizers">
        <Members>
          {organizers && organizers.map(organizer =>
            <EventOrganizer organizer={organizer} />
          )}
        </Members>
      </ContentPanel>}

    {volunteers && volunteers.length > 0 &&
      <ContentPanel title="Volunteers">
        <Members>
          {volunteers && volunteers.map(volunteer =>
            <EventOrganizer organizer={volunteer} />
          )}
        </Members>
      </ContentPanel>}

    {event.organizers_invitations && event.organizers_invitations.length > 0 &&
      <ContentPanel title="Pending invitations">
        <PendingInvitationsList invitations={event.organizers_invitations}
                                handleDelete={handleDelete}
        />
      </ContentPanel>}
  </StyleEventOrganizers>

export default EventOrganizers;
