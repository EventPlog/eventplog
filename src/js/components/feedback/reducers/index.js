import { combineReducers } from 'redux';
import feedback_responses from './feedback-responses-reducer';
import feedback_report from './feedback-report-reducer'

let rootFeedbackResponsesReducer = combineReducers({
  feedback_responses,
  feedback_report,
})

export default rootFeedbackResponsesReducer