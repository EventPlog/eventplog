import React from 'react';
import styled from 'styled-components';
import { Form, label, Message, Checkbox, Icon } from 'semantic-ui-react'

import ContentPanel from 'js/components/shared/content-panel'
import color from 'js/styles/theme/variables'
import ContentBeforeFeedbackSubmit from '../content-before-feedback-submit'
import ContentAfterFeedbackSubmit from '../content-after-feedback-submit'

const StyleEventUpdate = styled.div`
  width: 100%;
  
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
  loading,
  success,
  handleChange,
  handleSubmit
}) => {

  return (
    <StyleEventUpdate className="main-content">
      <ContentPanel title="Quick feedback">
        {event.show_feedback_url
          ? <ContentAfterFeedbackSubmit {...{event}} />
          : <ContentBeforeFeedbackSubmit {...{feedback, loading, success, handleChange, handleSubmit, event}} />
        }
      </ContentPanel>
    </StyleEventUpdate>
  )
}

export default EventUpdate;
