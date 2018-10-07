import React from 'react';
import { Checkbox, Form, Select, Message } from 'semantic-ui-react';
import styled from 'styled-components';
import Input from 'js/components/shared/input'
import Button from 'js/components/shared/button'
import ContentPanel from 'js/components/shared/content-panel'
import Loading from "js/components/shared/loading";
import { media } from 'js/styles/mixins'
import { genEventLink } from 'js/utils'

const StyledCheckInForm = styled.div`
  margin: 2rem 0;
  
  .content-panel {
    width: 100%;
  }
  
  .content-header {
    margin: 2rem;
    
    ${
      media.phone`
        margin: 0;
        margin-bottom: 2rem;
      `
    }
  }
  
  .content-body {
    margin-left: 0;
    margin-right: 0;  
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
  
  .space-top {
    margin-top: 2rem;
  }
`


const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const emptyUser = {
  first_name: '',
  last_name: '',
  email: '',
  gender: 'Male'
}
const CheckInForm = ({
  user = emptyUser,
  event = {},
  check_in_user,
  handleChange,
  handleStateChange,
  handleSubmit,
  success,
  error,
  loading,
}) => {
  if (loading) return <Loading />
  const title = <a href={`${window.location.origin}${genEventLink(event)}?ref=check_in_form`}>{event.title}</a>
  return (
    <StyledCheckInForm className="">
      <div className="app-container">
        <ContentPanel title={<p>Register for {title}</p>}>
          <Form loading={loading} success={success} error={error}>
            <Message
              success
              header='Success!'
              content={success}
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
                      value={user.gender}
                      defaultValue={'male'}
                      placeholder='Gender' options={genderOptions} />
            </Form.Field>

            <Form.Field>
              <label>Email</label>
              <Input name="email"
                     value={user.email}
                     placeholder='ciroma@chukwuma.com'
                     onChange={({target}) => handleChange(target.name, target.value)}/>
            </Form.Field>


            {event.is_stakeholder &&
              <Form.Field className="check-user">
                <Checkbox name="check_in_user"
                          checked={check_in_user}
                          label='Check in'
                          onChange={(el, attr) => handleStateChange(attr.name, attr.checked)}/>
              </Form.Field>
            }

            <Button inverted
                    type='submit'
                    disabled={!user.email}
                    className="space-top"
                    onClick={handleSubmit}>
              Submit
            </Button>
            <Button onClick={() => handleStateChange('user', emptyUser)}>
              Clear
            </Button>
          </Form>
        </ContentPanel>
      </div>
    </StyledCheckInForm>
  )
}

export default CheckInForm;