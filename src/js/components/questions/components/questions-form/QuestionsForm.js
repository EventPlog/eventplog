import React from 'react'
import { Table, Header, Form, Checkbox, Radio } from 'semantic-ui-react'
import styled from 'styled-components'
import Loading from "js/components/shared/loading";

//================= INTERNAL =================
import { Input, TextArea, Select, Button } from 'js/components/shared'
import { media } from 'js/styles/mixins'

const CurrentQuestionsStyles = styled.div`
`

const QuestionsForm = ({
  questions = {data: []},
  defaultQuestions = [],
  onDragStart,
  onDragOver,
  onDragEnd,
  questionCard: QuestionCard
}) => {
  const { data = [] } = questions
  const askedQuestions = [...defaultQuestions, ...data]

  if (!(askedQuestions && askedQuestions.length > 0)) return <Loading />

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
