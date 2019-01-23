import React from 'react'
import { Form, Message, Table, Header, Radio, Icon, Checkbox } from 'semantic-ui-react'
import styled from 'styled-components'
import { lighten, modularScale }  from 'polished'
import { media } from 'js/styles/mixins'

import { updateItemInCollection } from 'js/reducers/helpers'

import { Input, TextArea, Select, Button } from 'js/components/shared'
import ContentEditable from 'js/components/shared/content-editable'

const NewQuestionStyles = styled.div`
  .ui.table {
    width: 100%;
    max-width: 800px;
    
    .input {
      width: 100%;
    }
  }
  
  button {
    margin-bottom: 3rem;
    
    &.save-btn {
      margin-right: 1rem;
    }
  }
  
  .option-field {
    display: flex;
    align-items: center;
    
    input {
      margin-right: 1rem;
    } 
    
    label {
      flex: 1;
    }
  }
  
  .body-holder {
    display: flex;
    
    .cancel-btn {
      padding: 0.3rem 0.1rem 0.3rem 0.3rem;
      margin: 0 1rem;
      border: none;
    }
  }
  
`

const nonOptionTypes = ['short_text', 'long_text']
const optionTypes = ['single_choice', 'multi_choice']

const EditableLabel = ({
  option,
  handleChange,
  handleSubmit,
}) => (
  option.id
  ? <ContentEditable propName="body"
                     canEdit={true}
                     type="input"
                     defaultValue={option.body}
                     onChange={handleChange}
                     onSubmit={handleSubmit}>
      {option.body}
    </ContentEditable>
  : option.body
)


const OptionField = ({
  question_type,
  handleKeyDown,
  handleChange,
  handleOptionChange,
  option = {},
  options = [],
}) => {
  if (option.deleted) return null
  return (
    <Form.Field className="option-field">
      {question_type == 'single_choice'
        ? <input type="radio" />
        : <input type="checkbox" />
      }
      <label>
        {(option && option.body)
          ? <div className="body-holder">
              <EditableLabel option={option}
                           handleChange={(key, value) => {
                             const updatedOption = {...option, [key]: value}
                             handleChange('options', updateItemInCollection(options, updatedOption))
                           }} />
                <Button className="cancel-btn" onClick={() => {
                  let updatedOption = {...option, deleted: true}
                  handleChange('options', updateItemInCollection(options, updatedOption))
                }}>
                  <Icon name="delete" />
                </Button>
            </div>

          : <Input onBlur={e => {
                     if (e.target.value == '') return
                     handleOptionChange(e, options)
                   }}

                   onKeyDown={(e) => {
                     if (e.which != 13/*enter key*/) return
                     e.preventDefault()
                     handleOptionChange(e, options)
                   }} />

        }
      </label>
    </Form.Field>
  )
}

const NewQuestionForm = ({
  question = {},
  loading,
  error,
  handleChange,
  handleOptionChange,
  createQuestion,
  updateQuestion,
}) => {
  const {
    id,
    body,
    question_type,
    options = [],
  } = question
  const questionOptions = [...nonOptionTypes, ...optionTypes]
                            .map(o =>({key: o, value: o, text: o}))
  return (
    <NewQuestionStyles>
      <Form loading={loading} error={!!error}>

        <Message
          error
          header="Error"
          content={error && error.toString()}
        />

        <Table basic='very' celled collapsing>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Header as='h4'>
                  <Header.Content>
                    Question:
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                <Input name="body"
                       value={body}
                       placeholder="Phone number"
                       onChange={(e) => handleChange(e.target.name, e.target.value)} />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>
                <Header as='h4'>
                  <Header.Content>
                    Type:
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                <Select options={questionOptions}
                        value={question_type}
                        name="question_type"
                        onChange={(e, attr) => handleChange(attr.name, attr.value)} />
              </Table.Cell>
            </Table.Row>

            {optionTypes.includes(question_type) &&
            <Table.Row>
              <Table.Cell>
                <Header as='h4'>
                  <Header.Content>
                    Options:
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                <ul>
                  {
                    options && options.map(option => (
                      <li>
                        <OptionField {...{question_type, option,
                                          options, handleChange, handleOptionChange}} />
                      </li>
                    ))
                  }
                </ul>
                <OptionField {...{question_type, options,
                                  handleChange, handleOptionChange}} />
              </Table.Cell>
            </Table.Row>
            }
          </Table.Body>
        </Table>
        <Button className="save-btn"
                disabled={!body}
                onClick={id ? updateQuestion : createQuestion}>
          Save
        </Button>

        {id &&
          <Button className="cancel-btn" onClick={() => handleChange('editing', false)}>
            Cancel
          </Button>
        }
      </Form>
    </NewQuestionStyles>
  )
}

export default NewQuestionForm
