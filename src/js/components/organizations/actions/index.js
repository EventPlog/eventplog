import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'

export const createOrganization = (organizationParams) => {
  let actions = baseActions({
    requestType: actionTypes.ORGANIZATON_CREATE_START,
    receiveType: actionTypes.ORGANIZATON_CREATE_COMPLETE,
    failType: actionTypes.ORGANIZATON_CREATE_FAIL
  })

  return handleApiCall({
    actions,
    data: organizationParams,
    errorMessage: 'Something prevented creating an organization',
    caller: 'new organization',
    route: `/api/v1/web/communities`,
    requestMethod: 'POST'
  })
}

export const getOrganizations = (organizationParams) => {
  let actions = baseActions({
    requestType: actionTypes.ORGANIZATON_INDEX_START,
    receiveType: actionTypes.ORGANIZATON_INDEX_COMPLETE,
    failType: actionTypes.ORGANIZATON_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: organizationParams,
    errorMessage: 'Something prevented retrieving an organization.',
    caller: 'get organizations',
    route: `/api/v1/web/communities`,
    requestMethod: 'GET'
  })
}
