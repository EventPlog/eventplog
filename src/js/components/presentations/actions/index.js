import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'

export const getPresentations = (params) => {
  let actions = baseActions({
    requestType: actionTypes.PRESENTATION_INDEX_START,
    receiveType: actionTypes.PRESENTATION_INDEX_COMPLETE,
    failType: actionTypes.PRESENTATION_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving presentations.',
    caller: 'get presentations',
    route: `/api/v1/web/presentations/index_by_params`,
    requestMethod: 'POST'
  })
}

export const getPresentationsByVerb = (params) => {
  let actions = baseActions({
    requestType: actionTypes.PRESENTATION_INDEX_START,
    receiveType: actionTypes.PRESENTATION_INDEX_COMPLETE,
    failType: actionTypes.PRESENTATION_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving presentations.',
    caller: 'get presentations',
    route: `/api/v1/web/presentations/by_verb`,
    requestMethod: 'POST'
  })
}

export const getPresentation = (presentationId) => {
  let actions = baseActions({
    requestType: actionTypes.PRESENTATION_SHOW_START,
    receiveType: actionTypes.PRESENTATION_SHOW_COMPLETE,
    failType: actionTypes.PRESENTATION_SHOW_FAIL,
  })

  return handleApiCall({
    actions,
    data: presentationId,
    errorMessage: 'Something prevented us from retrieving this presentation.',
    caller: 'get presentations',
    route: `/api/v1/web/presentations/${presentationId}`,
    requestMethod: 'GET'
  })
}

export const createPresentation = (params) => {
  let actions = baseActions({
    requestType: actionTypes.PRESENTATION_CREATE_START,
    receiveType: actionTypes.PRESENTATION_CREATE_COMPLETE,
    failType: actionTypes.PRESENTATION_CREATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from creating this presentation. Please try again later or contact support.',
    caller: 'create presentation',
    route: `/api/v1/web/presentations`,
    requestMethod: 'POST'
  })
}

export const updatePresentation = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.PRESENTATION_UPDATE_START,
    receiveType: actionTypes.PRESENTATION_UPDATE_COMPLETE,
    failType: actionTypes.PRESENTATION_UPDATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from updating this presentation. Please try again later or contact support.',
    caller: 'updatew presentation',
    route: `/api/v1/web/presentations/${params.presentation.id}`,
    requestMethod: 'PATCH'
  })
}

export const deletePresentation = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.PRESENTATION_DELETE_START,
    receiveType: actionTypes.PRESENTATION_DELETE_COMPLETE,
    failType: actionTypes.PRESENTATION_DELETE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving this presentation. Please try again later or contact support.',
    caller: 'get presentations',
    route: `/api/v1/web/presentations/${params.id}`,
    requestMethod: 'PATCH'
  })
}

export const updateViewCount = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.PRESENTATION_UPDATE_START,
    receiveType: actionTypes.PRESENTATION_UPDATE_COMPLETE,
    failType: actionTypes.PRESENTATION_UPDATE_FAIL,
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
