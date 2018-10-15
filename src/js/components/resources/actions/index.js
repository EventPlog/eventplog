import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'

export const getResources = (params) => {
  let actions = baseActions({
    requestType: actionTypes.RESOURCE_INDEX_START,
    receiveType: actionTypes.RESOURCE_INDEX_COMPLETE,
    failType: actionTypes.RESOURCE_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving resources.',
    caller: 'get resources',
    route: `/api/v1/web/resources/index_by_params`,
    requestMethod: 'POST'
  })
}

export const getResourcesByVerb = (params) => {
  let actions = baseActions({
    requestType: actionTypes.RESOURCE_INDEX_START,
    receiveType: actionTypes.RESOURCE_INDEX_COMPLETE,
    failType: actionTypes.RESOURCE_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving resources.',
    caller: 'get resources',
    route: `/api/v1/web/resources/by_verb`,
    requestMethod: 'POST'
  })
}

export const getResource = (params) => {
  let actions = baseActions({
    requestType: actionTypes.RESOURCE_SHOW_START,
    receiveType: actionTypes.RESOURCE_SHOW_COMPLETE,
    failType: actionTypes.RESOURCE_SHOW_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving this resource.',
    caller: 'get resources',
    route: `/api/v1/web/resources/index_by_params`,
    requestMethod: 'POST'
  })
}

export const createResource = (params) => {
  let actions = baseActions({
    requestType: actionTypes.RESOURCE_CREATE_START,
    receiveType: actionTypes.RESOURCE_CREATE_COMPLETE,
    failType: actionTypes.RESOURCE_CREATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from creating this resource. Please try again later or contact support.',
    caller: 'create resource',
    route: `/api/v1/web/resources`,
    requestMethod: 'POST'
  })
}

export const updateResource = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.RESOURCE_UPDATE_START,
    receiveType: actionTypes.RESOURCE_UPDATE_COMPLETE,
    failType: actionTypes.RESOURCE_UPDATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from updating this resource. Please try again later or contact support.',
    caller: 'updatew resource',
    route: `/api/v1/web/resources/${params.id}`,
    requestMethod: 'PATCH'
  })
}

export const deleteResource = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.RESOURCE_DELETE_START,
    receiveType: actionTypes.RESOURCE_DELETE_COMPLETE,
    failType: actionTypes.RESOURCE_DELETE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving this resource. Please try again later or contact support.',
    caller: 'get resources',
    route: `/api/v1/web/resources/${params.id}`,
    requestMethod: 'PATCH'
  })
}

export const updateViewCount = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.RESOURCE_UPDATE_START,
    receiveType: actionTypes.RESOURCE_UPDATE_COMPLETE,
    failType: actionTypes.RESOURCE_UPDATE_FAIL,
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
