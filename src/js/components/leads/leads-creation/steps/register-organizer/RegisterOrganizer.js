import React from 'react'

import {
  Button,
  Form,
  Input,
  Icon,
  Select,
} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const changeOrganizer = (e, key, cb) => {
  cb(key, e.target.value)
}
const RegisterOrganizer = ({handleChange, handleSubmit}) => (
  <Form>
    <Form.Field>
      <label>First name</label>
      <Input onChange={(e) => changeOrganizer(e, 'first_name', handleChange)}
                placeholder='John'/>
    </Form.Field>

    <Form.Field>
      <label>Last name</label>
      <Input onChange={(e) => changeOrganizer(e, 'last_name', handleChange)}
                placeholder='Doe'/>
    </Form.Field>

    <Form.Field>
      <label>Gender</label>
      <Select onChange={(e) => handleChange('gender', e.target.innerText)}
              placeholder='Gender' options={options} />
    </Form.Field>

    <Form.Field>
      <label>Email</label>
      <Input onChange={(e) => changeOrganizer(e, 'email', handleChange)}
             placeholder='john@doe.com'/>
    </Form.Field>

    <Form.Field>
      <Button className="default">
        <Icon name="chevron left"/>
        Back
      </Button>
      <Button onClick={handleSubmit}>
        Create my planning space
        <Icon name="chevron right"/>
      </Button>
    </Form.Field>
  </Form>
)

export default RegisterOrganizer