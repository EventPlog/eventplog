import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'

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

