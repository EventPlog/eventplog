import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'

export const updatePendingInvitation = (invitation) => {
  let actions = baseActions({
    requestType: actionTypes.INVITATION_USER_PENDING_UPDATE_START,
    receiveType: actionTypes.INVITATION_USER_PENDING_UPDATE_COMPLETE,
    failType: actionTypes.INVITATION_USER_PENDING_UPDATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: invitation,
    errorMessage: 'Something prevented updating this invation',
    caller: 'new invitation',
    route: `/api/v1/web/invitations/${invitation.id}`,
    requestMethod: 'PATCH'
  })
}

export const getInvitations = (params) => {
  let actions = baseActions({
    requestType: actionTypes.INVITATION_INDEX_START,
    receiveType: actionTypes.INVITATION_INDEX_COMPLETE,
    failType: actionTypes.INVITATION_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: {invitation: params},
    errorMessage: 'Something prevented creating these invations',
    caller: 'new invitation',
    route: `/api/v1/web/invitations/index_by_params`,
    requestMethod: 'POST'
  })
}

export const getPendingInvitations = (params) => {
  let actions = baseActions({
    requestType: actionTypes.INVITATION_USER_PENDING_INDEX_START,
    receiveType: actionTypes.INVITATION_USER_PENDING_INDEX_COMPLETE,
    failType: actionTypes.INVITATION_USER_PENDING_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: {invitation: params},
    errorMessage: 'Something prevented retrieving pending invations',
    caller: 'pending invitations',
    route: `/api/v1/web/invitations/index_by_params`,
    requestMethod: 'POST',
  })
}
