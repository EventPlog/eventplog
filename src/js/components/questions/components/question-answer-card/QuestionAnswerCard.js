import React from 'react'
import { Table, Header, Form, Checkbox, Radio } from 'semantic-ui-react'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import { media } from 'js/styles/mixins'

import { Input, TextArea, Select, Button } from 'js/components/shared'
import NewQuestion from '../new-question/NewQuestion'

const styles = css`
  max-width: 400px;
  width: 100%;
  
  .question-holder {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    background: ${props => props.theme.gray};
    padding: 1rem;
    
    ${
      media.phone`
        display: block;
      `
    }
  } 
`

const getQuestionType = (question, handleChange, handleBlur) => {
  const { response = {} } = question
  switch (question.question_type) {
    case 'long_text':
      return <TextArea value={response.body}
                       onBlur={handleBlur}
                       onChange={(e) => handleChange({body: e.target.value})} />

    case 'single_choice':
      return (
        <div>
          {question.options.map((opt = {}) =>
            <Form.Field>
              <Radio label={opt.body}
                     checked={response.body == opt.body}
                     onKeyUp={handleBlur}
                     onChange={(e, attr) => handleChange({body: attr.value}, true)}
                     value={opt.body} />
            </Form.Field>
          )}
        </div>
      )

    case 'multi_choice':
      return (
        <div>
          {question.options.map((opt = {}) =>
            <Form.Field>
              <Checkbox label={opt.body}
                        checked={response.body && response.body.find && response.body.find(o => o == opt.body)}
                        onKeyPress={handleBlur}
                        onChange={(e, attr) => {
                          if (response.body && response.body.find && response.body.find(o => o == attr.value)) {
                            return handleChange({body: [...(response.body || []).filter(o => o != attr.value)]})
                          }
                          handleChange({body: [...(response.body || []), attr.value]}, true)
                        }}
                        value={opt.body} />
            </Form.Field>
          )}
        </div>
      )

    default:
      return <Input value={response.body}
                    onBlur={handleBlur}
                    onChange={(e) => handleChange({body: e.target.value})} />
  }
}

const QuestionAnswerCard = ({
  question = {},
  response = {},
  handleChange,
  handleBlur,
  className,
}) => {
  return (
    <Form.Field className={`wide email-holder ${className}`}>
      <label>{question.body}</label>
      { getQuestionType(question, handleChange, handleBlur) }
    </Form.Field>
  )
}

export default styled(QuestionAnswerCard)`${styles}`
