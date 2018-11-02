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

export const createComment = (comment, parentComment) => {
  let actions = baseActions({
    requestType: `${comment.trackable_type.toUpperCase()}_COMMENT_UPDATE_START`,
    receiveType: `${comment.trackable_type.toUpperCase()}_COMMENT_UPDATE_COMPLETE`,
    failType: `${comment.trackable_type.toUpperCase()}_COMMENT_UPDATE_FAIL`,
  })

  return handleApiCall({
    actions,
    data: {comment},
    errorMessage: 'Something prevented us from creating a comment.',
    caller: 'POST createComment',
    route: `/api/v1/web/comments`,
    requestMethod: 'POST'
  })
}

export const updateComment = (comment, parentComment) => {
  let actions = baseActions({
    requestType: `${comment.trackable_type.toUpperCase()}_COMMENT_UPDATE_START`,
    receiveType: `${comment.trackable_type.toUpperCase()}_COMMENT_UPDATE_COMPLETE`,
    failType: `${comment.trackable_type.toUpperCase()}_COMMENT_UPDATE_FAIL`,
  })

  return handleApiCall({
    actions,
    data: {comment},
    errorMessage: 'Something prevented us from creating a comment.',
    caller: 'PATCH updateComment',
    route: `/api/v1/web/comments/${comment.id}`,
    requestMethod: 'PATCH'
  })
}

export const getComments = (params) => {
  let actions = baseActions({
    requestType: `${comment.trackable_type.toUpperCase()}_COMMENT_INDEX_START`,
    receiveType: `${comment.trackable_type.toUpperCase()}_COMMENT_INDEX_COMPLETE`,
    failType: `${comment.trackable_type.toUpperCase()}_COMMENT_INDEX_FAIL`,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving comments.',
    caller: 'GET index Comments',
    route: `/api/v1/web/comments/index_by_params`,
    requestMethod: 'POST'
  })
}
