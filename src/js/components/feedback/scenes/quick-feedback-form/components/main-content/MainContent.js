import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import ContentPanel from 'js/components/shared/content-panel'
import color from 'js/styles/theme/variables'
import ContentBeforeFeedbackSubmit from '../content-before-feedback-submit'
import ContentAfterFeedbackSubmit from '../content-after-feedback-submit'
import { genEventLink } from 'js/utils'
import Loading from 'js/components/shared/loading'
import FeedbackReport from 'js/components/feedback/scenes/feedback-report'

const StyleEventUpdate = styled.div`
  width: 100%;
  margin-top: 1rem;
  
  > img {
    width: 100%;
  }
  
  form.ui.form {
  
    .fields {
      margin-bottom: 2rem;
    }
    
    .checkbox {
      margin-bottom: 2rem;
    }
    
    .date-time-picker {
    }
  
  }
  
  .cancel {
    margin-left: 1rem;
  }
`

const colorOptions = [
  { key: 'blue', value: color.blue, icon: 'point blue', text: 'blue' },
  { key: 'red', value: color.red, icon: 'point red', text: 'red' },
  { key: 'green', value: color.green, icon: 'point green', text: 'green' },
  { key: 'pink', value: color.pink, icon: 'point pink', text: 'pink' },
  { key: 'orange', value: color.orange, icon: 'point orange', text: 'orange' },
  { key: 'yellow', value: color.yellow, icon: 'point yellow', text: 'yellow' },
]

const EventUpdate = ({
  feedback = {},
  event = {},
  guest_id,
  guest_name,
  loading,
  success,
  error,
  handleChange,
  handleSubmit,
  feedbackCreated,
  current_user,
}) => {

  if(!event || !event.id) return <Loading />

  if (event.given_feedback) {
    return <FeedbackReport />
  }

  const personalGreeting = guest_name && guest_name.trim() ? `for ${guest_name}` : '(Yours)'
  const title = <Link to={`${genEventLink(event, event.community)}?utm_source=feedback_form`}>{event.title}</Link>
  return (
    <StyleEventUpdate className="main-content">
      <ContentPanel title={<p>Quick feedback {personalGreeting} - {title}</p>}>
        {feedbackCreated
          ? <ContentAfterFeedbackSubmit {...{event}} />
          : <ContentBeforeFeedbackSubmit {...{feedback, loading, success, error,
                                              current_user, handleChange,
                                              handleSubmit, event}} />
        }
      </ContentPanel>
    </StyleEventUpdate>
  )
}

export default EventUpdate;
