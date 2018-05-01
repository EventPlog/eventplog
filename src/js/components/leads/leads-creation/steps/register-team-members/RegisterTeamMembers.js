import React from 'react'

import {
  Button,
  Form,
  TextArea,
  Icon,
} from 'semantic-ui-react'

const RegisterTeamMembers = ({changeStep, handleChange, handleSubmit}) => {
  return (
    <Form>
      <Form.Field>
        <label>Who would you work with on this event?</label>
        <TextArea onChange={(e, {value}) => handleChange('teamMembers', value)}
                  placeholder='Type email addresses separated by commas'/>
      </Form.Field>

      <Form.Field>
        <Button onClick={() => {
        handleSubmit('teamMembers')
        changeStep((step) => step + 1)
      }}>
          Next
          <Icon name="chevron right"/>
        </Button>
        <Button className="default">
          Skip
          <Icon name="angle double right"/>
        </Button>
      </Form.Field>
    </Form>
  )
}

export default RegisterTeamMembers