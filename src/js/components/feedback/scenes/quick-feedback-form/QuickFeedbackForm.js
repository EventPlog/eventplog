// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import defaults from 'js/styles/theme/variables'
import MainContent from './components/main-content'
import { media, maxMedia } from 'js/styles/mixins'

const StyledQuickFeedbackForm = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 200px;
  
  .main-content {
    width: 100%;
    max-width: 600px;
    margin: 60px auto;
   
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
  <div className="app-container">
    <MainContent {...props } />
  </div>
)

export default QuickFeedbackForm
