import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'
import mockFeedbackApi from 'js/mock-api/feedback-api'

export const mockGetFeedbackReport = (eventId, user) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.FEEDBACK_REPORT_INDEX_START })

    return mockFeedbackApi.create(eventId).then(res => {
      dispatch({type: actionTypes.FEEDBACK_REPORT_INDEX_COMPLETE, payload: {...user}})
      return res;
    })
  }
}

export const getFeedbackReport = (eventId) => {
  let actions = baseActions({
    requestType: actionTypes.FEEDBACK_REPORT_SHOW_START,
    receiveType: actionTypes.FEEDBACK_REPORT_SHOW_COMPLETE,
    failType: actionTypes.FEEDBACK_REPORT_SHOW_FAIL,
  })

  return handleApiCall({
    actions,
    data: {},
    errorMessage: 'Something prevented retrieving a feedback report',
    caller: 'new event',
    route: `/api/v1/web/events/${eventId}/feedback_responses/feedback_report`,
    requestMethod: 'GET'
  })
}

export const submitFeedback = (feedback) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_FEEDBACK_CREATE_START,
    receiveType: actionTypes.EVENT_FEEDBACK_CREATE_COMPLETE,
    failType: actionTypes.EVENT_FEEDBACK_CREATE_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: feedback,
    errorMessage: 'Something prevented submitting this feedback',
    caller: 'new event',
    route: `/api/v1/web/events/${feedback.event_id}/feedback_responses`,
    requestMethod: 'POST'
  })
}
