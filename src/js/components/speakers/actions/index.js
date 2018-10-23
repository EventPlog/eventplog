import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'

export const getSpeakers = (params) => {
  let actions = baseActions({
    requestType: actionTypes.SPEAKER_INDEX_START,
    receiveType: actionTypes.SPEAKER_INDEX_COMPLETE,
    failType: actionTypes.SPEAKER_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving speakers.',
    caller: 'get speakers',
    route: `/api/v1/web/speakers/index_by_params`,
    requestMethod: 'POST'
  })
}

export const getSpeakersByVerb = (params) => {
  let actions = baseActions({
    requestType: actionTypes.SPEAKER_INDEX_START,
    receiveType: actionTypes.SPEAKER_INDEX_COMPLETE,
    failType: actionTypes.SPEAKER_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving speakers.',
    caller: 'get speakers',
    route: `/api/v1/web/speakers/by_verb`,
    requestMethod: 'POST'
  })
}

export const getSpeaker = (params) => {
  let actions = baseActions({
    requestType: actionTypes.SPEAKER_SHOW_START,
    receiveType: actionTypes.SPEAKER_SHOW_COMPLETE,
    failType: actionTypes.SPEAKER_SHOW_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving this speaker.',
    caller: 'get speakers',
    route: `/api/v1/web/speakers/index_by_params`,
    requestMethod: 'POST'
  })
}

export const createSpeaker = (params) => {
  let actions = baseActions({
    requestType: actionTypes.SPEAKER_CREATE_START,
    receiveType: actionTypes.SPEAKER_CREATE_COMPLETE,
    failType: actionTypes.SPEAKER_CREATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from creating this speaker. Please try again later or contact support.',
    caller: 'create speaker',
    route: `/api/v1/web/speakers`,
    requestMethod: 'POST'
  })
}

export const updateSpeaker = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.SPEAKER_UPDATE_START,
    receiveType: actionTypes.SPEAKER_UPDATE_COMPLETE,
    failType: actionTypes.SPEAKER_UPDATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from updating this speaker. Please try again later or contact support.',
    caller: 'updatew speaker',
    route: `/api/v1/web/speakers/${params.id}`,
    requestMethod: 'PATCH'
  })
}

export const deleteSpeaker = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.SPEAKER_DELETE_START,
    receiveType: actionTypes.SPEAKER_DELETE_COMPLETE,
    failType: actionTypes.SPEAKER_DELETE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving this speaker. Please try again later or contact support.',
    caller: 'get speakers',
    route: `/api/v1/web/speakers/${params.id}`,
    requestMethod: 'PATCH'
  })
}

export const updateViewCount = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.SPEAKER_UPDATE_START,
    receiveType: actionTypes.SPEAKER_UPDATE_COMPLETE,
    failType: actionTypes.SPEAKER_UPDATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from updating a view count. Please try again later or contact support.',
    caller: 'update view count',
    route: `/api/v1/web/views`,
    requestMethod: 'POST'
  })
}
