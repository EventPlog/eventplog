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

export const getCommunity = (eventId) => {
  let actions = baseActions({
    requestType: actionTypes.COMMUNITY_SHOW_START,
    receiveType: actionTypes.COMMUNITY_SHOW_COMPLETE,
    failType: actionTypes.COMMUNITY_SHOW_FAIL,
  })

  return handleApiCall({
    actions,
    eventId,
    errorMessage: 'Something prevented us from retrieving this community',
    caller: 'getCommunity',
    route: `/api/v1/web/communities/${eventId}`,
    requestMethod: 'GET'
  })
}

export const createCommunity = (data) => {
  let actions = baseActions({
    requestType: actionTypes.COMMUNITY_INDEX_START,
    receiveType: actionTypes.COMMUNITY_INDEX_COMPLETE,
    failType: actionTypes.COMMUNITY_INDEX_FAIL,
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
    errorMessage: 'Something prevented getting an event.',
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

// =========== MOCKS ===============

export const mockGetCommunities = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.COMMUNITY_INDEX_START })

    return mockApi.index().then(res => {
      dispatch({type: actionTypes.COMMUNITY_INDEX_COMPLETE, payload: res})
      return res
    })
  }
}

export const mockGetCommunity = (communityId) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.COMMUNITY_SHOW_START })

    return mockApi.show(communityId).then(res => {
      dispatch({type: actionTypes.COMMUNITY_SHOW_COMPLETE, payload: res})
      return res
    })
  }
}

export const mockCreateCommunity = () => dispatch =>
  mockApi.create().then(res => {
    dispatch({type: actionTypes.COMMUNITY_CREATE_COMPLETE, payload: res})
    return res
  })
