import React from 'react'
import { Button, Form, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledStartPlanningForm = styled.form`
  .ui.input {
    margin: 20px 0;
    font-size: 2em;
    width: 100%;
  }
`

const StartPlanningForm = ({
  title,
  handleTitleChange,
  handleBtnClick: showLeadsForm }) => (
  <StyledStartPlanningForm>
    <Form.Input placeholder="Title of your event" onChange={(e) => handleTitleChange(e.target.value)} />
    <Button primary size='huge' onClick={showLeadsForm}>
      Start Organized Planning
      <Icon name='right arrow' />
    </Button>
  </StyledStartPlanningForm>
)

export default StartPlanningForm