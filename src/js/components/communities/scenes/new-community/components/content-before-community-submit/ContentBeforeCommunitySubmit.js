import React from 'react'
import { Form, Message } from 'semantic-ui-react'
import styled from 'styled-components'

// local
import Input from 'js/components/shared/input'
import Button from 'js/components/shared/button'
import { media } from 'js/styles/mixins'
import { getCommunityLink } from 'js/utils'

const StyledContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  
  ${
  media.phone`
      align-items: baseline;
    `
  }
    
    
  .submit-form {
    width: 100%;
    max-width: 600px;
  }
  .ui.form {
    margin: 60px 0;
    
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
  
 .same-line {
   display: flex;
   align-items: center;
   white-space: nowrap;
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
    <h3>Create a community</h3>
    <p>
      First choose a community name and url slug.
    </p>

    <div className="submit-form">
      <Form loading={loading} error={!!error}>

        <Message
          error
          header="Error"
          content={error && error.toString()}
        />

          <Form.Field className="wide email-holder">
            <label>What's the name of your community?</label>
            <Input name="name"
                   type="text"
                   value={community.name}
                   placeholder='Community name' onChange={handleChange} />
          </Form.Field>


          <Form.Field>
            <label>How'd you like people to visit your community page?</label>

            <Form.Field widths="equal" className="same-line">
              eventplog.com/c/
              <Input name="slug"
                     value={community.slug}
                     placeholder='something' onChange={handleChange}/>
            </Form.Field>
          </Form.Field>

          <Button onClick={submitCommunity}>Create</Button>
      </Form>
    </div>
  </StyledContent>
)

export default ContentBeforeCommunitySubmit

