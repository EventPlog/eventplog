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
    errorMessage: 'Something prevented this operation from completing sucessfully',
    caller: 'new event',
    route: `/api/v1/web/communities`,
    requestMethod: 'POST'
  })
}

