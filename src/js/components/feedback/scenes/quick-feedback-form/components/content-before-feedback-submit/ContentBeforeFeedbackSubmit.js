import React from 'react'
import { Form, Message, Checkbox } from 'semantic-ui-react'
import styled from 'styled-components'

// local
import Button from 'js/components/shared/button'
import { media } from 'js/styles/mixins'

import TextArea from 'js/components/shared/text-area'
import Input from 'js/components/shared/input'
import Select from 'js/components/shared/select'
import Rating from 'js/components/shared/rating'

const ContentBeforeFeedbackSubmit = ({
  event = {},
  feedback = {},
  handleChange,
  handleSubmit,
  loading,
  error,
  current_user,
}) => {

  const {
    id,
    satisfaction_level,
    net_promoter_score,
    feedback_note,
    anonymous,
    email
  } = feedback

  const loggedIn = current_user && current_user.id
  const requiredFieldsEmpty = !(satisfaction_level && net_promoter_score && feedback_note && (loggedIn || email))

  if (!loading && !error && (!event || !event.id)) {
    return <p>We can't find the event specified. <Button.Link to="/">Home</Button.Link></p>
  }
  return (
    <Form loading={loading} error={error}>
      <Message
        error
        header='An error occured.'
        content={error}
      />

      {!loggedIn &&
        <Form.Field>
          <label>What's your email?*</label>
          <small>The same one you RSVPed to the event with.</small>
          <Input value={email}
                 name="email"
                 type="email"
                 placeholder="someone@example.com"
                 onChange={({target}) => handleChange(target.name, target.value)} />
        </Form.Field>
      }

      <Form.Field>
        <label>How satisfied are you with this event?*</label>
        <Rating value={satisfaction_level}
                name="satisfaction_level"
                max={10}
                onRate={(e, attr) => handleChange('satisfaction_level', attr.rating)} />
      </Form.Field>

      <Form.Field>
        <label>How likely are you to invite someone to a similar event hosted by this community?*</label>
        <Rating value={net_promoter_score}
                max={10}
                onRate={(e, attr) => {handleChange('net_promoter_score', attr.rating)} } />
      </Form.Field>

      <Form.Field>
        <label>What did you love about the event? How would you improve it?*</label>
        <TextArea name="feedback_note"
                  value={feedback_note}
                  placeholder='I love the way the facilitator broke down the details. I would have preferred we spend more time in the Q and A section though.'
                  onChange={({target}) => handleChange(target.name, target.value)} />
      </Form.Field>

      <Form.Field>
        <Checkbox name="anonymous"
                   value="anonymous"
                   checked={anonymous}
                   label="Keep me anonymous"
                   onClick={(e, attr) => handleChange(attr.name, attr.checked)}
        />
      </Form.Field>

      <Form.Group>
        <Form.Field>
          <Button inverted type='submit'
                  disabled={requiredFieldsEmpty}
                  onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Field>
      </Form.Group>
    </Form>
  )
}

export default ContentBeforeFeedbackSubmit

