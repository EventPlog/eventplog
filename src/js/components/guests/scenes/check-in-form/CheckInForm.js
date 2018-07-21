import React from 'react';
import { Checkbox, Form, Select, Message } from 'semantic-ui-react';
import styled from 'styled-components';
import Input from 'js/components/shared/input'
import Button from 'js/components/shared/button'
import ContentPanel from 'js/components/shared/content-panel'

const StyledCheckInForm = styled.div`
  padding: 20px 0;
  
  .content-header {
    font-size: 120%;
  }
  
  .ui.form {
    max-width: 400px;
    margin: auto; 
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
      <ContentPanel title="Register a guest">
        <Form loading={loading} success={success}>
          <Message
            success
            header='Welcome!'
            content="You've successfully checked into this event!"
          />

          <Form.Field>
            <label>First Name</label>
            <Input name="first_name"
                   value={user.first_name}
                   placeholder='Ciroma'
                   onChange={handleChange}/>
          </Form.Field>

          <Form.Field>
            <label>Last Name</label>
            <Input name="last_name"
                   value={user.last_name}
                   placeholder='Chukwuma' onChange={handleChange}/>
          </Form.Field>

          <Form.Field>
            <label>Gender</label>
            <Select onChange={(e) => handleChange(e, 'gender')}
                    defaultValue={user.gender}
                    placeholder='Gender' options={genderOptions} />
          </Form.Field>

          <Form.Field>
            <label>Email</label>
            <Input name="email"
                   value={user.email}
                   placeholder='ciroma@chukwuma.com' onChange={handleChange}/>
          </Form.Field>


          <Form.Field>
            <Checkbox checked label='Check in this guest' />
          </Form.Field>

          <Button inverted type='submit' onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </ContentPanel>
    </StyledCheckInForm>
  )
}

export default CheckInForm;