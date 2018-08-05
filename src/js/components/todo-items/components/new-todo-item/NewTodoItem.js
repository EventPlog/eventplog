import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Message, Form } from 'semantic-ui-react'
import styled from 'styled-components'

import { media } from 'js/styles/mixins'
import Loading from 'js/components/shared/loading'
import Input from 'js/components/shared/input'
import Button from 'js/components/shared/button'

const StyledTodoItem = styled.div`
`
const NewTodoItem = ({
  todo_item = {},
  loading,
  error,
  success,
  handleChange,
  handleCreate,
}) => {
  return (
    <StyledTodoItem>
      <Form loading={loading} success={success} error={error}>
        <Message
          success
          header='Success!'
          content={success}
        />

        <Message
          error
          header='Error!'
          content={error}
        />

        <Form.Field>
          <Input name="title"
                 value={todo_item.title}
                 placeholder='ciroma@chukwuma.com'
                 onChange={({target}) => handleChange(target.name, target.value)}/>
        </Form.Field>
        <Button onClick={handleCreate}>
          Save
        </Button>

      </Form>
    </StyledTodoItem>
  )
}

export default NewTodoItem