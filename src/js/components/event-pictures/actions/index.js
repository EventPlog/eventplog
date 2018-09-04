import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'

export const getEventPictures = (data) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_PICTURE_INDEX_START,
    receiveType: actionTypes.EVENT_PICTURE_INDEX_COMPLETE,
    failType: actionTypes.EVENT_PICTURE_INDEX_FAIL
  })

  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented us from retrieving pictures.',
    caller: 'POST event pictures',
    route: `/api/v1/web/pictures/index_by_params`,
    requestMethod: 'POST'
  })
}

