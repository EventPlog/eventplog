// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import defaults from 'js/styles/theme/variables'
import MainContent from './components/main-content'
import { media, maxMedia } from 'js/styles/mixins'
import EventSubpageWrapper from 'js/components/shared/event-subpage-wrapper'

const StyledQuickFeedbackForm = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 200px;
  
  &.app-container.feedback {
    margin: 0 auto;
  }
  
  .main-content {
    width: 100%;
   
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

type FeedbackFormType = {
  feedback: {satisfaction: string},
  error?: any,
  loading?: boolean,
  handleChange: () => {},
  handleSubmit: () => {}
}

const QuickFeedbackForm = (props: FeedbackFormType) => (
  <EventSubpageWrapper>
    <StyledQuickFeedbackForm className="app-container feedback">
      <MainContent {...props } />
    </StyledQuickFeedbackForm>
  </EventSubpageWrapper>
)

export default QuickFeedbackForm
