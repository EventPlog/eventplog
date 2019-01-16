import React from 'react'

import SetupQuestions from 'js/components/questions/components/setup-questions'

const defaultQuestions = [
  {body: 'First Name', question_type: 'short_answer', default: true},
  {body: 'Last Name', question_type: 'short_answer', default: true},
  {body: 'Gender', question_type: 'single_choice', default: true, options: [{body: 'Male'}, {body: 'Female'}]},
  {body: 'Email', question_type: 'short_answer', default: true},
]

const SetupRSVPQuestions = ({
  event = {},
  allowNext,
}) => {
  return (
    <SetupQuestions recipient_id={event.id}
                    recipient_type="Event"
                    category="rsvp"
                    allowNext={allowNext}
                    defaultQuestions={defaultQuestions} />
  )
}

export default SetupRSVPQuestions