import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'

export const updateEventChecklist = (event_checklist) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_CHECKLIST_UPDATE_START,
    receiveType: actionTypes.EVENT_CHECKLIST_UPDATE_COMPLETE,
    failType: actionTypes.EVENT_CHECKLIST_UPDATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: event_checklist,
    errorMessage: 'Something prevented updating this planning detail. Please try again later or contact support.',
    caller: 'update event checklist',
    route: `/api/v1/web/event_checklists/${event_checklist.id}`,
    requestMethod: 'PATCH'
  })
}

export const getEventChecklist = (params) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_CHECKLIST_INDEX_START,
    receiveType: actionTypes.EVENT_CHECKLIST_INDEX_COMPLETE,
    failType: actionTypes.EVENT_CHECKLIST_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us retrieving the checklist for this event. Please try again later or contact support.',
    caller: 'get event checklist',
    route: `/api/v1/web/events/${params.event_id}/event_checklists/0`,
    requestMethod: 'GET'
  })
}

export const getPendingInvitations = (params) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_CHECKLIST_USER_PENDING_INDEX_START,
    receiveType: actionTypes.EVENT_CHECKLIST_USER_PENDING_INDEX_COMPLETE,
    failType: actionTypes.EVENT_CHECKLIST_USER_PENDING_INDEX_FAIL,
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
