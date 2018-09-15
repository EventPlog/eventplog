import React from 'react';
import styled from 'styled-components';
import { Icon, Form, Message } from 'semantic-ui-react'

// internal
import ContentPanel from 'js/components/shared/content-panel'
import Input from 'js/components/shared/input'
import TextArea from 'js/components/shared/text-area'
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
  description,
  volunteers,
  organizers,
  recipient_emails,
  handleChange,
  handleDelete,
  handleSubmit,
  error,
  success,
  loading,
}) =>
  <StyleEventOrganizers>
    <ContentPanel title="Add organizers">
      {event.visibility_status == "private_event" &&
        <Message
          info
          header="Heads up!"
          content={"This event is still private. Volunteers won't be able to see it until it's public."}
        />
      }
      <Form loading={loading} success={success} error={!!error}>

      <Message
        success
        header="Yay!"
        content={success}
      />

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

        <Form.Field>
          <label>Personalized note (so your organizers know what the invitation is about).</label>
          <TextArea onChange={(e) => handleChange(e.target.name, e.target.value)}
                    name="description"
                    value={description}
                    placeholder="Hey Sarah, bringing you in here so we can collaborate better and document our planning process."/>

        </Form.Field>
        <Button disabled={!recipient_emails} onClick={handleSubmit}>
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
