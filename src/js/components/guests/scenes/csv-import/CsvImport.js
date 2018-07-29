import React from 'react';
import styled from 'styled-components';
import { Form, Message } from 'semantic-ui-react'

//========== INTERNAL ===========

import Button from 'js/components/shared/button'
import Input from 'js/components/shared/input'
import ContentPanel from 'js/components/shared/content-panel'

const StyleMessengerCheckIn = styled.div`
  > img {
    width: 100%;
  }
  
  .ui.info.message {
    margin-bottom: 2rem;
  }
`

const HeadsUpInfo = ({url}) => (
  <Message info>
    <Message.Header>A bit of housekeeping.</Message.Header>
    <p>
      Please check your CSV file to make sure you rename columns properly or as you would like them saved.
    </p>
    <p>
      Use common names to represet common data. E.g. first name, last name, full name, email, occupation, phone number, etc.
    </p>
    <p>
      Lastly, delete any columns with data you don't need or you don't want saved.
    </p>
  </Message>
)

const MessengerCheckIn = ({
  event = {},
  loading,
  success,
  error,
  handleChange,
  handleSubmit,
}) =>
  <StyleMessengerCheckIn>
    <ContentPanel title="Import a guest lists as CSV.">
      {!success && <HeadsUpInfo/>}
      <Form loading={loading} success={success} error={error}>
        <Message
          success
          header='Success!'
          content="Your file upload process have been kicked off successfully. We'll let you know when it's done."
        />

        <Message
          error
          header='Error!'
          content="Something prevented us from successfully uploading your file. Please try again later."
        />

        <Form.Field>
          <label>Upload a CSV file</label>
          <Input type="file"
                 name="csv"
                 onChange={handleChange}
                 id="csv_upload"
                 accept=".csv"
          />
        </Form.Field>

        <Form.Field>
          <Button onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Field>
      </Form>
    </ContentPanel>
  </StyleMessengerCheckIn>

export default MessengerCheckIn;
