import React from 'react';
import styled from 'styled-components';
import { Form, label, Message, Checkbox, Radio } from 'semantic-ui-react'
import Input from 'js/components/shared/input'
import TextArea from 'js/components/shared/text-area'
import Button from 'js/components/shared/button'

// internal
import ContentPanel from 'js/components/shared/content-panel'

const StyleFeedbackSettings = styled.div`
  
  .form {
    .fields, .grouped.fields {
      margin-bottom: 2rem;
      
      .field {
        width: 100%;
      }
      
      textarea {
        height: 6em;
        min-height: 4em;
      }
    }
    
    .radio-input {
      margin-top: 0.5rem;
      margin-left: 2rem;
    }
  }
`

const FeedbackSettings = ({
  event = {},
  success,
  loading,
  handleChange,
  handleSubmit
}) => {
  const { feedback_url } = event;
  return (
    <StyleFeedbackSettings>
      <ContentPanel title="Feedback settings">
        <Form loading={loading} success={success}>
          <Message
            success
            header='Success!'
            content="You've successfully updated your settings."
          />

          <Form.Group grouped>
            <label>Link to external feedback form</label>
            <Form.Field>
              <Input name="feedback_url"
                     value={feedback_url}
                     placeholder='url for feedback form' onChange={handleChange}/>
            </Form.Field>
          </Form.Group>

          {/*<Form.Group grouped>*/}
            {/*<label>Send Prompt for feedback</label>*/}
            {/*<Form.Field label='30 minutes before end of the event' control={Checkbox} />*/}
            {/*<Form.Field label='At the end of the event' control={Checkbox} />*/}
            {/*<Form.Field label='One day after the event' control={Checkbox} />*/}
            {/*<Form.Field label='Three days after the event' control={Checkbox} />*/}
          {/*</Form.Group>*/}

          {/*<Form.Group>*/}
            {/*<Form.Field>*/}
              {/*<label>Custom message to appeal to guests to give feedback</label>*/}
              {/*<TextArea name="feedback_message"*/}
                        {/*value={``}*/}
                        {/*placeholder='Could you help us improve by giving feedback? Thanks!' onChange={handleChange}/>*/}
            {/*</Form.Field>*/}
          {/*</Form.Group>*/}


          <Button inverted type='submit' onClick={handleSubmit}>
            Save
          </Button>
        </Form>
      </ContentPanel>
    </StyleFeedbackSettings>
  )
}

export default FeedbackSettings;
