import actionTypes from './types'
import { handleApiCall, baseActions } from 'js/services/actionHelpers'
import mockApi from 'js/mock-api/community-api'

export const getCommunities = (data) => {
  let actions = baseActions({
    requestType: actionTypes.COMMUNITY_INDEX_START,
    receiveType: actionTypes.COMMUNITY_INDEX_COMPLETE,
    failType: actionTypes.COMMUNITY_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented us from retrieving communities',
    caller: 'getCommunities',
    route: `/api/v1/web/communities`,
    requestMethod: 'GET'
  })
}

export const getCommunitiesByName = (data) => {
  let actions = baseActions({
    requestType: actionTypes.COMMUNITY_INDEX_START,
    receiveType: actionTypes.COMMUNITY_INDEX_COMPLETE,
    failType: actionTypes.COMMUNITY_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented us from retrieving communities',
    caller: 'getCommunities',
    route: `/api/v1/web/communities/search_by_name`,
    requestMethod: 'POST'
  })
}

export const getCommunitiesByVerb = (data) => {
  let actions = baseActions({
    requestType: actionTypes.COMMUNITY_INDEX_START,
    receiveType: actionTypes.COMMUNITY_INDEX_COMPLETE,
    failType: actionTypes.COMMUNITY_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented us from retrieving communities',
    caller: 'getCommunities',
    route: `/api/v1/web/communities/by_verb`,
    requestMethod: 'POST'
  })
}

export const getCommunitiesSuggestions = (data) => {
  let actions = baseActions({
    requestType: actionTypes.COMMUNITY_SUGGESTIONS_INDEX_START,
    receiveType: actionTypes.COMMUNITY_SUGGESTIONS_INDEX_COMPLETE,
    failType: actionTypes.COMMUNITY_SUGGESTIONS_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented us from retrieving communities',
    caller: 'getCommunities',
    route: `/api/v1/web/communities/suggestions`,
    requestMethod: 'GET'
  })
}

export const getCommunity = (communityId, slug) => {
  let actions = baseActions({
    requestType: actionTypes.COMMUNITY_SHOW_START,
    receiveType: actionTypes.COMMUNITY_SHOW_COMPLETE,
    failType: actionTypes.COMMUNITY_SHOW_FAIL,
  })

  return handleApiCall({
    actions,
    data: {communityId, slug},
    errorMessage: 'Something prevented us from retrieving this community',
    caller: 'getCommunity',
    route: `/api/v1/web/communities/${communityId}`,
    requestMethod: 'GET'
  })
}

export const createCommunity = (data) => {
  let actions = baseActions({
    requestType: actionTypes.COMMUNITY_CREATE_START,
    receiveType: actionTypes.COMMUNITY_CREATE_COMPLETE,
    failType: actionTypes.COMMUNITY_CREATE_FAIL,
  })

  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented us from creating a community',
    caller: 'createCommunity',
    route: `/api/v1/web/communities`,
    requestMethod: 'POST'
  })
}

export const updateCommunity = (data) => {
  let actions = baseActions({
    requestType: actionTypes.COMMUNITY_UPDATE_START,
    receiveType: actionTypes.COMMUNITY_UPDATE_COMPLETE,
    failType: actionTypes.COMMUNITY_UDPATE_FAIL,
  })

  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented us from updating this community',
    caller: 'updateCommunity',
    route: `/api/v1/web/communities/${data.id}`,
    requestMethod: 'PATCH'
  })
}

export const getCommunityEvents = (communityId) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_INDEX_START,
    receiveType: actionTypes.EVENT_INDEX_COMPLETE,
    failType: actionTypes.EVENT_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: communityId,
    errorMessage: 'Something prevented getting events.',
    caller: 'get events',
    route: `/api/v1/web/communities/${communityId}/events`,
    requestMethod: 'GET'
  })
}

export const followCommunity = (community) => {
  let actions = baseActions({
    requestType: actionTypes.COMMUNITY_FOLLOW_CREATE_START,
    receiveType: actionTypes.COMMUNITY_FOLLOW_CREATE_COMPLETE,
    failType: actionTypes.COMMUNITY_FOLLOW_CREATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: community,
    errorMessage: 'Something prevented us getting event suggestions.',
    caller: 'post follow community',
    route: `/api/v1/web/communities/${community.id}/user_communities`,
    requestMethod: 'POST'
  })
}

export const unFollowCommunity = (community) => {
  let actions = baseActions({
    requestType: actionTypes.COMMUNITY_FOLLOW_DELETE_START,
    receiveType: actionTypes.COMMUNITY_FOLLOW_DELETE_COMPLETE,
    failType: actionTypes.COMMUNITY_FOLLOW_DELETE_FAIL,
  })

  return handleApiCall({
    actions,
    data: community,
    errorMessage: 'Something prevented us getting event suggestions.',
    caller: 'post follow community',
    route: `/api/v1/web/communities/${community.id}/user_communities/${community.id}`,
    requestMethod: 'DELETE'
  })
}

export const checkForValidSlug = (slug) => {
  let actions = baseActions({
    requestType: actionTypes.COMMUNITY_SLUG_VERIFY_START,
    receiveType: actionTypes.COMMUNITY_SLUG_VERIFY_COMPLETE,
    failType: actionTypes.COMMUNITY_SLUG_VERIFY_FAIL,
  })

  return handleApiCall({
    actions,
    data: {slug},
    errorMessage: 'Something prevented us from verifying this slug.',
    caller: 'verify slug',
    route: `/api/v1/web/communities/verify_slug/${slug}`,
    requestMethod: 'GET'
  })
}

export const updateViewCount = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.COMMUNITY_VIEWS_UPDATE_START,
    receiveType: actionTypes.COMMUNITY_VIEWS_UPDATE_COMPLETE,
    failType: actionTypes.COMMUNITY_VIEWS_UPDATE_FAIL,
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

export const addCommunityToStore = (community) => {
  return (dispatch) => dispatch({
    type: actionTypes.COMMUNITY_SHOW_COMPLETE,
    payload: community
  })
}

export const getUserCommunities = (data) => {
  let actions = baseActions({
    requestType: actionTypes.USER_COMMUNITY_INDEX_START,
    receiveType: actionTypes.USER_COMMUNITY_INDEX_COMPLETE,
    failType: actionTypes.USER_COMMUNITY_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented us from retrieving your communities',
    caller: 'get user_communities',
    route: `/api/v1/web/communities/by_verb`,
    requestMethod: 'GET'
  })
}

