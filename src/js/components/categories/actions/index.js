import actionTypes from './types'
import { handleApiCall, baseActions } from 'js/services/actionHelpers'

export const getCategories = (data) => {
  let actions = baseActions({
    requestType: actionTypes.CATEGORY_INDEX_START,
    receiveType: actionTypes.CATEGORY_INDEX_COMPLETE,
    failType: actionTypes.CATEGORY_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented us from retrieving categories',
    caller: 'getCategories',
    route: `/api/v1/web/categories`,
    requestMethod: 'GET'
  })
}

export const getCategoriesByName = (data) => {
  let actions = baseActions({
    requestType: actionTypes.CATEGORY_INDEX_START,
    receiveType: actionTypes.CATEGORY_INDEX_COMPLETE,
    failType: actionTypes.CATEGORY_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented us from retrieving categories',
    caller: 'getCategories',
    route: `/api/v1/web/categories/search_by_name`,
    requestMethod: 'POST'
  })
}

export const getCategoriesByVerb = (data) => {
  let actions = baseActions({
    requestType: actionTypes.CATEGORY_INDEX_START,
    receiveType: actionTypes.CATEGORY_INDEX_COMPLETE,
    failType: actionTypes.CATEGORY_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented us from retrieving categories',
    caller: 'getCategories',
    route: `/api/v1/web/categories/by_verb`,
    requestMethod: 'POST'
  })
}

export const getCategoriesSuggestions = (data) => {
  let actions = baseActions({
    requestType: actionTypes.CATEGORY_SUGGESTIONS_INDEX_START,
    receiveType: actionTypes.CATEGORY_SUGGESTIONS_INDEX_COMPLETE,
    failType: actionTypes.CATEGORY_SUGGESTIONS_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented us from retrieving categories',
    caller: 'getCategories',
    route: `/api/v1/web/categories/suggestions`,
    requestMethod: 'GET'
  })
}

export const getCategory = (category_id, slug) => {
  let actions = baseActions({
    requestType: actionTypes.CATEGORY_SHOW_START,
    receiveType: actionTypes.CATEGORY_SHOW_COMPLETE,
    failType: actionTypes.CATEGORY_SHOW_FAIL,
  })

  return handleApiCall({
    actions,
    data: {category_id, slug},
    errorMessage: 'Something prevented us from retrieving this category',
    caller: 'getCategory',
    route: `/api/v1/web/categories/${category_id}`,
    requestMethod: 'GET'
  })
}

export const createCategory = (data) => {
  let actions = baseActions({
    requestType: actionTypes.CATEGORY_CREATE_START,
    receiveType: actionTypes.CATEGORY_CREATE_COMPLETE,
    failType: actionTypes.CATEGORY_CREATE_FAIL,
  })

  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented us from creating a category',
    caller: 'createCategory',
    route: `/api/v1/web/categories`,
    requestMethod: 'POST'
  })
}

export const updateCategory = (data) => {
  let actions = baseActions({
    requestType: actionTypes.CATEGORY_UPDATE_START,
    receiveType: actionTypes.CATEGORY_UPDATE_COMPLETE,
    failType: actionTypes.CATEGORY_UDPATE_FAIL,
  })

  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented us from updating this category',
    caller: 'updateCategory',
    route: `/api/v1/web/categories/${data.id}`,
    requestMethod: 'PATCH'
  })
}

export const getCategoryEvents = (communityId) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_INDEX_START,
    receiveType: actionTypes.EVENT_INDEX_COMPLETE,
    failType: actionTypes.EVENT_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: categoryId,
    errorMessage: 'Something prevented getting events.',
    caller: 'get events',
    route: `/api/v1/web/categories/${categoryId}/events`,
    requestMethod: 'GET'
  })
}

export const followCategory = (followable) => {
  let actions = baseActions({
    requestType: actionTypes.CATEGORY_FOLLOW_CREATE_START,
    receiveType: actionTypes.CATEGORY_FOLLOW_CREATE_COMPLETE,
    failType: actionTypes.CATEGORY_FOLLOW_CREATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: followable,
    errorMessage: 'Something prevented us getting event suggestions.',
    caller: 'post follow category',
    route: `/api/v1/web/user_followings`,
    requestMethod: 'POST'
  })
}

export const unFollowCategory = (followable) => {
  let actions = baseActions({
    requestType: actionTypes.CATEGORY_FOLLOW_DELETE_START,
    receiveType: actionTypes.CATEGORY_FOLLOW_DELETE_COMPLETE,
    failType: actionTypes.CATEGORY_FOLLOW_DELETE_FAIL,
  })

  return handleApiCall({
    actions,
    data: followable,
    errorMessage: 'Something prevented us getting event suggestions.',
    caller: 'post follow category',
    route: `/api/v1/web/user_followings/0`,
    requestMethod: 'DELETE'
  })
}

export const checkForValidSlug = (slug) => {
  let actions = baseActions({
    requestType: actionTypes.CATEGORY_SLUG_VERIFY_START,
    receiveType: actionTypes.CATEGORY_SLUG_VERIFY_COMPLETE,
    failType: actionTypes.CATEGORY_SLUG_VERIFY_FAIL,
  })

  return handleApiCall({
    actions,
    data: {slug},
    errorMessage: 'Something prevented us from verifying this slug.',
    caller: 'verify slug',
    route: `/api/v1/web/categories/verify_slug/${slug}`,
    requestMethod: 'GET'
  })
}

export const updateViewCount = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.CATEGORY_VIEWS_UPDATE_START,
    receiveType: actionTypes.CATEGORY_VIEWS_UPDATE_COMPLETE,
    failType: actionTypes.CATEGORY_VIEWS_UPDATE_FAIL,
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

export const addCategoryToStore = (community) => {
  return (dispatch) => dispatch({
    type: actionTypes.CATEGORY_SHOW_COMPLETE,
    payload: category
  })
}

export const getUserCategories = (data) => {
  let actions = baseActions({
    requestType: actionTypes.USER_CATEGORY_INDEX_START,
    receiveType: actionTypes.USER_CATEGORY_INDEX_COMPLETE,
    failType: actionTypes.USER_CATEGORY_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented us from retrieving your categories',
    caller: 'get user_categories',
    route: `/api/v1/web/categories/by_verb`,
    requestMethod: 'GET'
  })
}

