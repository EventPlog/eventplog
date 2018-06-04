import React from 'react'
import { Form, Message } from 'semantic-ui-react'
import styled from 'styled-components'

// local
import Input from '../../../../shared/input'
import Button from '../../../../shared/button'
import { media } from '../../../../../../styles/mixins'

const StyledContent = styled.div`
  .ui.form {
    margin: 60px;
    
    ${
  media.phone`
        margin: 50px 0;
        
        .inline.fields {
          flex-direction: column;
          align-items: baseline; 
        }
      `
  }
    .field.email-holder {
      flex: 1;
      
      ${
        media.phone`
          width: 100%;
          margin-bottom: 1.5rem;
        `
  }   
      
      input {
        width: 100%;
      }
    }
  }
  
`

const ContentBeforeCommunitySubmit = ({
  community = {},
  handleChange,
  submitCommunity,
  loading,
  error
}) => (
  <StyledContent>
    <p>What's the name of your awesome community?</p>
      <div className="submit-form">
        <Form loading={loading} error={!!error}>

          <Message
            error
            header="Error"
            content={error && error.toString()}
          />

          <Form.Group inline>
            <Form.Field className="email-holder">
              <Input name="text"
                     type="text"
                     value={community.name}
                     placeholder='Community name' onChange={handleChange} />
            </Form.Field>
            <Button onClick={submitCommunity}>Create</Button>
          </Form.Group>
        </Form>
      </div>
  </StyledContent>
)

export default ContentBeforeCommunitySubmit

