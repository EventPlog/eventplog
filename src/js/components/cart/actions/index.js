import actionTypes from './types'
import { handleApiCall, baseActions } from 'js/services/actionHelpers'

export const getCart = (params) => {
  let actions = baseActions({
    requestType: actionTypes.CART_INDEX_START,
    receiveType: actionTypes.CART_INDEX_COMPLETE,
    failType: actionTypes.CART_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving cart.',
    caller: 'get cart',
    route: `/api/v1/web/cart/index_by_params`,
    requestMethod: 'POST'
  })
}

export const getCartByVerb = (params) => {
  let actions = baseActions({
    requestType: actionTypes.CART_INDEX_START,
    receiveType: actionTypes.CART_INDEX_COMPLETE,
    failType: actionTypes.CART_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving cart.',
    caller: 'get cart',
    route: `/api/v1/web/cart/by_verb`,
    requestMethod: 'POST'
  })
}

export const addItemToCart = (cartItem) => {
  return (dispatch) => new Promise((resolve, reject) =>
    resolve(dispatch({
      type: actionTypes.CART_ITEM_CREATE_COMPLETE,
      payload: cartItem
    }))
  )
}

export const removeItemFromCart = (cartItem) => {
  return (dispatch) => new Promise((resolve, reject) =>
    resolve(dispatch({
      type: actionTypes.CART_ITEM_DELETE_COMPLETE,
      payload: cartItem
    }))
  )
}

export const getResource = (params) => {
  let actions = baseActions({
    requestType: actionTypes.CART_SHOW_START,
    receiveType: actionTypes.CART_SHOW_COMPLETE,
    failType: actionTypes.CART_SHOW_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving this resource.',
    caller: 'get cart',
    route: `/api/v1/web/cart/index_by_params`,
    requestMethod: 'POST'
  })
}

export const createResource = (params) => {
  let actions = baseActions({
    requestType: actionTypes.CART_CREATE_START,
    receiveType: actionTypes.CART_CREATE_COMPLETE,
    failType: actionTypes.CART_CREATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from creating this resource. Please try again later or contact support.',
    caller: 'create resource',
    route: `/api/v1/web/cart`,
    requestMethod: 'POST'
  })
}

export const updateResource = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.CART_UPDATE_START,
    receiveType: actionTypes.CART_UPDATE_COMPLETE,
    failType: actionTypes.CART_UPDATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from updating this resource. Please try again later or contact support.',
    caller: 'updatew resource',
    route: `/api/v1/web/cart/${params.id}`,
    requestMethod: 'PATCH'
  })
}

export const deleteResource = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.CART_DELETE_START,
    receiveType: actionTypes.CART_DELETE_COMPLETE,
    failType: actionTypes.CART_DELETE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving this resource. Please try again later or contact support.',
    caller: 'get cart',
    route: `/api/v1/web/cart/${params.id}`,
    requestMethod: 'PATCH'
  })
}

export const updateViewCount = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.CART_UPDATE_START,
    receiveType: actionTypes.CART_UPDATE_COMPLETE,
    failType: actionTypes.CART_UPDATE_FAIL,
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
