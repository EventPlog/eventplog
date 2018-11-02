import React from 'react'
import { Form, Message, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

// local
import Input from 'js/components/shared/input'
import Button from 'js/components/shared/button'
import { media } from 'js/styles/mixins'
import color from 'js/styles/theme/variables'
import Select from 'js/components/shared/select'
import colorOptions from 'js/utils/colorOptions'

import {
  getCommunityLink,
  removeSpecialChars
} from 'js/utils'

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

  .field {
    margin-bottom: 2rem;
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

 .btn-create {
   margin-top: 2rem;
 }
 
  .success {
    color: ${props => props.theme.green};
  }
  
  .error {
    color: red;
  }
  
  .warning {
    color: orange;
  }
  
`

const ContentBeforeCommunitySubmit = ({
  community = {},
  handleChange,
  submitCommunity,
  loading,
  slug_check = {},
  checkForValidSlug,
  error
}) => (
  <StyledContent>
    <h3>Create a community</h3>
    <p>
      First choose a community name, brand color and url slug.
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
                   placeholder='Super awesome community'
                   onChange={(e) => handleChange(e.target.name, e.target.value)} />
          </Form.Field>

          <Form.Field>
            <label>What's your brand color?</label>
            <Select options={colorOptions}
                    name="brand_color"
                    value={community.brand_color}
                    defaultValue={color.activeLink}
                    onChange={(e, attr) => handleChange(attr.name, attr.value)}/>
          </Form.Field>

          <Form.Field>
            <label>How'd you like people to visit your community page?</label>
            {slug_check.valid &&
            <div className="success green">Slug is available!</div>}
            {slug_check.error &&
            <div className="error red">{slug_check.error}</div>}
            {slug_check.loading &&
            <div className="">Checking for availability  <Icon loading name='asterisk' /></div>}

            <Form.Field widths="equal" className="same-line">
              eventplog.com/c/
              <Input name="slug"
                     value={community.slug}
                     onBlur={checkForValidSlug}
                     disabled={slug_check.loading}
                     placeholder='something'
                     onChange={(e) => handleChange(e.target.name, removeSpecialChars(e.target.value))}/>
            </Form.Field>
          </Form.Field>

          <Button className="btn-create"
                  disabled={slug_check.error}
                  onClick={submitCommunity}>
            Create
          </Button>
      </Form>
    </div>
  </StyledContent>
)

export default ContentBeforeCommunitySubmit

