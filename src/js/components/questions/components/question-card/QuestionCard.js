import React from 'react'
import { Table, Header, Form, Checkbox, Radio } from 'semantic-ui-react'
import styled from 'styled-components'
import { lighten } from 'polished'
import { media } from 'js/styles/mixins'

import { Input, TextArea, Select, Button } from 'js/components/shared'
import NewQuestion from '../new-question/NewQuestion'

const CurrentQuestionsStyles = styled.div`
  .email-holder {
    max-width: 400px;
    width: 100%;
  }
  
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
  
  .cta-holder {
    display: flex;
    flex-direction: column;
    
    ${
      media.phone`
        flex-direction: row;
        
      `
    }
    
    button:first-child {
      margin-bottom: 1rem;
      
      ${
        media.phone`
          margin-bottom: 0;
          margin-right: 1rem;
        `
      }
      
    }
    
  }
  
  .droparea:-moz-drag-over {
    border: 1px solid black;
  }
`

const getQuestionType = (question) => {
  switch (question.question_type) {
    case 'long_text':
      return <TextArea  />
    case 'single_choice':
      return (
        <div>
          {question.options.map((o = {}) =>
            <Form.Field>
              <Radio label={o.body} value={o.body} />
            </Form.Field>
          )}
        </div>
      )
    case 'multi_choice':
      return (
        <div>
          {question.options.map((opt = {}) =>
            <Form.Field>
              <Checkbox label={opt.body} value={opt.body} />
            </Form.Field>
          )}
        </div>
      )

    default:
      return <Input  />
  }
}

const QuestionCard = ({
  question = {},
  loading,
  error,
  createQuestion,
  handleChange,
  updateQuestion,
  deleteQuestion,
  handleOptionChange,
  onDragStart,
  onDragOver,
  onDragEnd,
  questionIndex,
}) => {
  return (
    <CurrentQuestionsStyles>
        {
          question.editing
            ?
            <NewQuestion {...{question,
                              loading,
                              error,
                              handleChange,
                              handleOptionChange,
                              createQuestion,
                              updateQuestion} } />
            :
            <div className="question-holder droparea"
                 draggable
                 onDragStart={(e) => onDragStart(e, question, questionIndex)}
                 onDragEnter={e => e.preventDefault()}
                 onDrop={onDragEnd}
                 onDragOver={(e) => onDragOver(e, question, questionIndex)} >
              <Form.Field className="wide email-holder">
                <label>{question.body}</label>
                { getQuestionType(question) }
              </Form.Field>
              {!question.default &&
              <div className="cta-holder">
                <Button onClick={() => handleChange('editing', true)}>
                  Edit
                </Button>
                <Button className="cancel-btn"
                        onClick={() => deleteQuestion(question)}>
                  Delete
                </Button>
              </div>
              }
            </div>
        }
    </CurrentQuestionsStyles>
  )
}

export default QuestionCard
