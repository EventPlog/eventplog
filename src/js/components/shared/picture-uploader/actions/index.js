import actionTypes from './types'
import { handleApiCall, baseActions } from 'js/services/actionHelpers'

const cloudName = 'eventplog';

export const uploadImage = (data) => {
  let actions = baseActions({
    requestType: actionTypes.IMAGE_UPLOAD_START,
    receiveType: actionTypes.IMAGE_UPLOAD_COMPLETE,
    failType: actionTypes.IMAGE_UPLOAD_FAIL,
  })

  return handleApiCall({
    actions,
    data: data,
    errorMessage: 'Something prevented us from uploading this image',
    caller: 'createCommunity',
    url: `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
    requestMethod: 'POST',
    uploadOp: true,
    headers: {'X-Requested-With': 'XMLHttpRequest'}
  })
}