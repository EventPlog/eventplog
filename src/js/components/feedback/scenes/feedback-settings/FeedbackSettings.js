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
  feedback = {},
  success,
  loading,
  handleChange,
  handleSubmit,
  handleChangeForRadio,
}) => {
  const { 
    feedback_url, 
    active_feedback_form, 
    feedback_message, 
    post_feedback_message 
  } = feedback;
  return (
    <StyleFeedbackSettings>
      <ContentPanel title="Feedback settings">
        <Form loading={loading} success={success}>
          <Message
            success
            header='Welcome!'
            content="You've successfully checked into this event!"
          />

          <Form.Group grouped>
            <label>Active feedback form</label>
            <Form.Field>
              <Radio
                label='Use the default form'
                name="active_feedback_form"
                value='default'
                checked={active_feedback_form === 'default'}
                onChange={handleChange}
              />
            </Form.Field>

            <Form.Field>
              <Radio
                label='Use a different form'
                name="active_feedback_form"
                value='custom'
                checked={active_feedback_form === 'custom'}
                onChange={handleChange}
              />
              <div className="radio-input">
                <Input name="feedback_url"
                       value={feedback_url}
                       placeholder='url for feedback form' onChange={handleChange}/>
              </div>
            </Form.Field>

          </Form.Group>

          <Form.Group grouped>
            <label>Send Prompt for feedback</label>

            <Form.Field label='30 minutes before end of the event' 
                        name='half_an_hour_prompt' 
                        onChange={handleChange} 
                        control={Checkbox} />

            <Form.Field label='At the end of the event' 
                        name='end_of_day_prompt' 
                        onChange={handleChange} 
                        control={Checkbox} />

            <Form.Field label='One day after the event' 
                        name='one_day_later_prompt' 
                        onChange={handleChange} 
                        control={Checkbox} />

            <Form.Field label='Three days after the event' 
                        name='three_days_later_prompt' 
                        onChange={handleChange} 
                        control={Checkbox} />
          </Form.Group>

          <Form.Group>
            <Form.Field>
              <label>Custom message to appeal to guests to give feedback</label>
              <TextArea name="feedback_message"
                        value={feedback_message}
                        placeholder='Could you help us improve by giving feedback? Thanks!' onChange={handleChange}/>
            </Form.Field>
          </Form.Group>

          <Form.Group>
            <Form.Field>
              <label>Custom message to thank guests for giving feedback</label>
              <TextArea name="post_feedback_message"
                        value={post_feedback_message}
                        placeholder="Thank you for giving feedback!" onChange={handleChange}/>
            </Form.Field>
          </Form.Group>

          <Button inverted type='submit' onClick={handleSubmit}>
            Save
          </Button>
        </Form>
      </ContentPanel>
    </StyleFeedbackSettings>
  )
}

export default FeedbackSettings;
