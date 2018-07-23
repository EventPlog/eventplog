// external
import React, { Component } from 'react'

// local
import QuickFeedbackForm  from './QuickFeedbackForm'
import FeedbackContainer from '../../FeedbackContainer'
import renderPropsToComponent from 'js/components/shared/render-props-to-component'

export default renderPropsToComponent(FeedbackContainer, QuickFeedbackForm)

