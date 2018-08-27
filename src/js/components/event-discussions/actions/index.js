import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'

export const getEventDiscussion = (eventId) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_DISCUSSION_SHOW_START,
    receiveType: actionTypes.EVENT_DISCUSSION_SHOW_COMPLETE,
    failType: actionTypes.EVENT_DISCUSSION_SHOW_FAIL
  })

  return handleApiCall({
    actions,
    data: eventId,
    errorMessage: 'Something prevented us from retrieving comments.',
    caller: 'GET event discussion',
    route: `/api/v1/web/events/${eventId}/event_discussions/0`,
    requestMethod: 'GET'
  })
}

export const getComments = (params) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_DISCUSSION_COMMENT_INDEX_START,
    receiveType: actionTypes.EVENT_DISCUSSION_COMMENT_INDEX_COMPLETE,
    failType: actionTypes.EVENT_DISCUSSION_COMMENT_INDEX_FAIL
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving comments.',
    caller: 'POST index Comments',
    route: `/api/v1/web/comments/index_by_params`,
    requestMethod: 'POST'
  })
}

export const createComment = (comment) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_DISCUSSION_COMMENT_CREATE_START,
    receiveType: actionTypes.EVENT_DISCUSSION_COMMENT_CREATE_COMPLETE,
    failType: actionTypes.EVENT_DISCUSSION_COMMENT_CREATE_FAIL
  })

  return handleApiCall({
    actions,
    data: comment,
    errorMessage: 'Something prevented us from creating a comment.',
    caller: 'POST createComment',
    route: `/api/v1/web/comments`,
    requestMethod: 'POST'
  })
}

export const updateComment = (comment) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_DISCUSSION_COMMENT_UPDATE_START,
    receiveType: actionTypes.EVENT_DISCUSSION_COMMENT_UPDATE_COMPLETE,
    failType: actionTypes.EVENT_DISCUSSION_COMMENT_UPDATE_FAIL
  })

  return handleApiCall({
    actions,
    data: comment,
    errorMessage: 'Something prevented us from updating a comment.',
    caller: 'PATCH updateComment',
    route: `/api/v1/web/comments/${comment.id}`,
    requestMethod: 'PATCH'
  })
}