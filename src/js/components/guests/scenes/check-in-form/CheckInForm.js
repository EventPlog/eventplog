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
    
    .check-user {
       margin-bottom: 2rem;
    }
  }
  
  button + button {
    margin-left: 1rem;
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

const emptyUser = {
  first_name: '',
  last_name: '',
  email: '',
  gender: 'Male'
}
const CheckInForm = ({
  user = emptyUser,
  check_in_user,
  handleChange,
  handleStateChange,
  handleSubmit,
  success,
  error,
  loading,
}) => {
  const successMsg = check_in_user
                      ? `You've successfully checked in ${user.first_name}`
                      : `You've successfully registered ${user.first_name}`
  return (
    <StyledCheckInForm>
      <ContentPanel title="Register a guest">
        <Form loading={loading} success={!!user.email && success} error={error}>
          <Message
            success
            header='Success!'
            content={successMsg}
          />

          <Message
            error
            header='Error!'
            content={error}
          />

          <Form.Field>
            <label>First Name</label>
            <Input name="first_name"
                   value={user.first_name}
                   placeholder='Ciroma'
                   onChange={({target}) => handleChange(target.name, target.value)}/>
          </Form.Field>

          <Form.Field>
            <label>Last Name</label>
            <Input name="last_name"
                   value={user.last_name}
                   placeholder='Chukwuma'
                   onChange={({target}) => handleChange(target.name, target.value)}/>
          </Form.Field>

          <Form.Field>
            <label>Gender</label>
            <Select onChange={(e, attr) => handleChange('gender', attr.value)}
                    defaultValue={user.gender}
                    placeholder='Gender' options={genderOptions} />
          </Form.Field>

          <Form.Field>
            <label>Email</label>
            <Input name="email"
                   value={user.email}
                   placeholder='ciroma@chukwuma.com'
                   onChange={({target}) => handleChange(target.name, target.value)}/>
          </Form.Field>


          <Form.Field className="check-user">
            <Checkbox name="check_in_user"
                      checked={check_in_user}
                      label='Check in this guest'
                      onChange={(el, attr) => handleStateChange(attr.name, attr.checked)}/>
          </Form.Field>

          <Button inverted type='submit' onClick={handleSubmit}>
            Submit
          </Button>
          <Button onClick={() => handleStateChange('user', emptyUser)}>
            Clear
          </Button>
        </Form>
      </ContentPanel>
    </StyledCheckInForm>
  )
}

export default CheckInForm;