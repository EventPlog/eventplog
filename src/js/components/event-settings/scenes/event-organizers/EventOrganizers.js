import React from 'react';
import styled from 'styled-components';
import { Form } from 'semantic-ui-react'

// internal
import ContentPanel from 'js/components/shared/content-panel'
import Input from 'js/components/shared/input'
import Button from 'js/components/shared/button'
import Members from 'js/components/shared/members'

import data from 'js/mock-api/data'

const StyleEventOrganizers = styled.div`
  > img {
    width: 100%;
  }
`

const EventOrganizers = ({ event = {} }) =>
  <StyleEventOrganizers>
    <ContentPanel title="Add organizers">
      <Form>
        <Form.Field>
          <label>Type in email addresses of co-organizers, separated by commas</label>
          <Input placeholder="someone@example.com, another@somedomain.com"/>
        </Form.Field>
        <Button>Send Invitation</Button>
      </Form>
    </ContentPanel>

    <ContentPanel title="Organizers">
      <Members {...{members: data.events[0].organizers}} />
    </ContentPanel>
  </StyleEventOrganizers>

export default EventOrganizers;
