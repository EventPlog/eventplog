import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'
import mockFeedbackApi from '../actions'

export const mockGetFeedbackReport = (eventId, user) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.FEEDBACK_REPORT_INDEX_START })

    return mockFeedbackApi.create(eventId).then(res => {
      dispatch({type: actionTypes.CHECK_IN_COMPLETE, payload: {...user}})
      return res;
    })
  }
}

export const checkInByForm = (eventId, user) => {
  let actions = baseActions({
    requestType: actionTypes.CHECK_IN_START,
    receiveType: actionTypes.CHECK_IN_COMPLETE,
    failType: actionTypes.CHECK_IN_FAIL,
  })

  return handleApiCall({
    actions,
    data: user,
    errorMessage: 'Something prevented creating an event',
    caller: 'new event',
    route: `/api/v1/web/events/${eventId}/check_ins`,
    requestMethod: 'POST'
  })
}

