import React from 'react'
import styled from 'styled-components'

import ContentPanel from 'js/components/shared/content-panel'
import QuestionsForm from 'js/components/questions/components/questions-form'
import NewQuestion from 'js/components/questions/components/new-question'


import QuestionCard from '../question-card'

const SetupQuestionsStyles = styled.div`
  .content-panel + .content-panel {
    margin-top: 6rem;
  }
`

const SetupQuestions = (props) => {
  return (
    <SetupQuestionsStyles>
      <ContentPanel title="Current RSVP Form">
        <QuestionsForm questionCard={QuestionCard} {...props} />
      </ContentPanel>

      <ContentPanel title="Add a Question">
        <NewQuestion {...props} />
      </ContentPanel>
    </SetupQuestionsStyles>
  )
}

export default SetupQuestions