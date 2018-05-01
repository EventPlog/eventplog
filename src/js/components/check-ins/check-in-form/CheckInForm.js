import React, { Component } from 'react';
import { Button, Checkbox, Form, Select, Message } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledCheckInForm = styled.div`
  > form {
    > .field {
      > label {
        padding: 20px 0 10px;
      }
      
      &:nth-last-child(2) {
        margin: 30px 0 20px;
      }
    }
  }
`


const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const FeedbackUrl = ({url}) =>
  <Message info>
    <Message.Header>Help us get better with your feedback!</Message.Header>
    <p>Claim your event swags by completing <a href={url} target="_blank">this feedback form</a> towards the end. Thank you and welcome again!</p>
  </Message>

const CheckInForm = ({
  user = {},
  handleChange,
  handleSubmit,
  success,
  loading,
  feedback_url,
}) => {
  return (
    <StyledCheckInForm>
      <Form loading={loading} success={success}>
        <Message
          success
          header='Welcome!'
          content="You've successfully checked into this event!"
        />

        {feedback_url && <FeedbackUrl url={feedback_url} />}
        <Form.Field>
          <label>First Name</label>
          <input name="first_name"
                 value={user.first_name}
                 placeholder='Ciroma'
                 onChange={handleChange}/>
        </Form.Field>

        <Form.Field>
          <label>Last Name</label>
          <input name="last_name"
                 value={user.last_name}
                 placeholder='Chukwuma' onChange={handleChange}/>
        </Form.Field>

        <Form.Field>
          <label>Email</label>
          <input name="email"
                 value={user.email}
                 placeholder='ciroma@chukwuma.com' onChange={handleChange}/>
        </Form.Field>

        <Form.Field>
          <label>Gender</label>
          <Select onChange={(e) => handleChange(e, 'gender')}
                  defaultValue={user.gender}
                  placeholder='Gender' options={genderOptions} />
        </Form.Field>

        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>

        <Button type='submit' onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </StyledCheckInForm>
  )
}

export default CheckInForm;