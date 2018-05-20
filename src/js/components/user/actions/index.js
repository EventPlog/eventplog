import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'
import mockEventApi from '../../../mockApi/lead-api'

export const mockCheckIn = (eventId, user) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.CHECK_IN_START })

    return mockEventApi.create(eventId).then(res => {
      dispatch({type: actionTypes.CHECK_IN_COMPLETE, payload: {...user}})
      return {feedback_url: 'http://feedback_url.com'}
    })
  }
}

export const confirmEmail = (data) => {
  let actions = baseActions({
    requestType: actionTypes.CONFIRM_START,
    receiveType: actionTypes.CONFIRM_COMPLETE,
    failType: actionTypes.CONFIRM_FAIL,
  })

  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented confirming this email address',
    caller: 'new event',
    route: `/api/v1/web/users/confirm`,
    requestMethod: 'POST'
  })
}

