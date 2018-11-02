// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import defaults from 'js/styles/theme/variables'
import MainContent from './components/main-content'
import { media } from 'js/styles/mixins'

const StyledNewEvent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 200px;
  
  .main-content {
    flex: 1;
    margin-top: 60px;
    
    ${
      media.phone`
        width: 100%;
        align-items: end;
        padding: 1rem 2rem;
      `
    }
  }
  
  ul {
    margin: 0
  }
`

type EventType = {
  event: {name: string},
  error: any,
  loading: boolean,
  community_id: integer,
  emailCreated?: boolean,
  handleChange: () => {},
  submitEvent: () => {}
}

const NewEvent = (props: eventType) => (
  <StyledNewEvent>
    <MainContent {...props } />
  </StyledNewEvent>
)

export default NewEvent
