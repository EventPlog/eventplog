import React from 'react'
import { Form, Message } from 'semantic-ui-react'
import styled from 'styled-components'

// local
import Button from 'js/components/shared/button'
import { media } from 'js/styles/mixins'

import TextArea from 'js/components/shared/text-area'
import Select from 'js/components/shared/select'
import Rating from 'js/components/shared/rating'

const ContentBeforeFeedbackSubmit = ({
  event = {},
  feedback = {},
  handleChange,
  handleSubmit,
  loading,
  error
}) => {

  const {
    id,
    satisfaction_level,
    net_promoter_score,
    feedback_note,
  } = feedback

  return (
    <Form loading={loading} error={error}>

      <Form.Field>
        <label>How satisfied are you with this event?</label>
        <Rating value={satisfaction_level}
                name="satisfaction_level"
                max={10}
                onRate={(e, attr) => handleChange('satisfaction_level', attr.rating)} />
      </Form.Field>

      <Form.Field>
        <label>How likely are you to invite someone to a similar event hosted by this community?</label>
        <Rating value={net_promoter_score}
                max={10}
                onRate={(e, attr) => {handleChange('net_promoter_score', attr.rating)} } />
      </Form.Field>

      <Form.Field>
        <label>What did you love about the event? How would you improve it?</label>
        <TextArea name="feedback_note"
                  value={feedback_note}
                  placeholder='Share your thoughts!'
                  onChange={({target}) => handleChange(target.name, target.value)} />
      </Form.Field>

      <Form.Group>
        <Form.Field>
          <Button inverted type='submit' onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Field>
      </Form.Group>
    </Form>
  )
}

export default ContentBeforeFeedbackSubmit

