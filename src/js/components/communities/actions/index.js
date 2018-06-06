import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'
import { mockIndexApi } from '../mockApi'

export const mockGetCommunities = () => dispatch =>
  mockIndexApi().then(res => {
    dispatch({type: actionTypes.COMMUNITY_INDEX_COMPLETE, payload: res.communities})
  })

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
  mockIndexApi().then(res => {
    dispatch({type: actionTypes.COMMUNITY_INDEX_COMPLETE, payload: res.communities})
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
