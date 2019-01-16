import React from 'react'
import { Table, Header, Form, Checkbox, Radio } from 'semantic-ui-react'
import styled from 'styled-components'
import { media } from 'js/styles/mixins'

import { Input, TextArea, Select, Button } from 'js/components/shared'
import QuestionCard from '../question-card'

const CurrentQuestionsStyles = styled.div`
`

const QuestionsForm = ({
  questions = {data: []},
  defaultQuestions = [],
  onDragStart,
  onDragOver,
  onDragEnd,
}) => {
  const { data = [] } = questions
  const askedQuestions = [...defaultQuestions, ...data]
  return (
    <CurrentQuestionsStyles>
      <Form>
        {
          !!askedQuestions && askedQuestions.map((question, idx) => (
            <QuestionCard {...{question, onDragStart,
                            onDragOver, onDragEnd, questionIndex: idx - defaultQuestions.length,}} />
          ))
        }
      </Form>
    </CurrentQuestionsStyles>
  )
}

export default QuestionsForm
