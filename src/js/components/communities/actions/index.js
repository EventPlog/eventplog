import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'
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
    errorMessage: 'Something prevented us from retrieving an email',
    caller: 'getCommunities',
    route: `/api/v1/web/communities`,
    requestMethod: 'GET'
  })
}

export const mockCreateCommunity = () => dispatch =>
  mockApi.create().then(res => {
    dispatch({type: actionTypes.COMMUNITY_CREATE_COMPLETE, payload: res})
  })

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
