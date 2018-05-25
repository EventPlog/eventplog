import React from 'react'
import { Form, Label } from 'semantic-ui-react'
import styled from 'styled-components'

// local
import Input from '../../../../../shared/input'
import Button from '../../../../../shared/button'

const StyledContent = styled.div`
  .ui.form {
    margin: 60px;
    
    .email-holder {
      flex: 1;
      
      input[type='email'] {
        width: 100%;
      }
    }
  }
  
`

const ContentBeforeEmailSubmit = ({ email, handleChange, loading, error }) => (
  <StyledContent>
    <p>Type in your email address so we send you an email with specific instructions on how to reset it.</p>
    <div className="submit-form">
      <Form loading={loading} error={!!error}>
        <Form.Group inline>
          <Form.Field className="email-holder">
            <Input name="email"
                   type="email"
                   value={email}
                   placeholder='ciroma@chukwuma.com' onChange={handleChange}/>

          </Form.Field>
          <Button>Reset</Button>
        </Form.Group>
      </Form>
    </div>
  </StyledContent>
)

export default ContentBeforeEmailSubmit

