import React from 'react'

import SetupQuestions from 'js/components/questions/components/setup-questions'
import config  from 'js/config/common'

const SetupRSVPQuestions = ({
  event = {},
  allowNext,
}) => {
  return (
    <SetupQuestions recipient_id={event.id}
                    recipient_type="Event"
                    category="rsvp"
                    allowNext={allowNext}
                    defaultQuestions={config.defaultRSVPQuestions} />
  )
}

export default SetupRSVPQuestions