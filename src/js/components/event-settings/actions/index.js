import actionTypes from 'js/components/events/actions/types'
import eventActionTypes from'./types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'
import mockEventApi from '../../../mock-api/lead-api'

export const mockCheckIn = (eventId, user) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.CHECK_IN_START })

    return mockEventApi.create(eventId).then(res => {
      dispatch({type: actionTypes.CHECK_IN_COMPLETE, payload: {...user}})
      return {feedback_url: 'http://feedback_url.com'}
    })
  }
}

export const checkInByForm = (eventId, user) => {
  let actions = baseActions({
    requestType: actionTypes.CHECK_IN_START,
    receiveType: actionTypes.CHECK_IN_COMPLETE,
    failType: actionTypes.CHECK_IN_FAIL,
  })

  return handleApiCall({
    actions,
    data: user,
    errorMessage: 'Something prevented creating an event',
    caller: 'new event',
    route: `/api/v1/web/events/${eventId}/check_ins`,
    requestMethod: 'POST'
  })
}

export const updateEventOrganizer = (organizer) => {
  let actions = baseActions({
    requestType: eventActionTypes.EVENT_ORGANIZER_UPDATE_START,
    receiveType: eventActionTypes.EVENT_ORGANIZER_UPDATE_COMPLETE,
    failType: eventActionTypes.EVENT_ORGANIZER_UPDATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: organizer,
    errorMessage: 'Something prevented us from creating these organizers',
    caller: 'update organizer',
    route: `/api/v1/web/event_organizers/${organizer.id}`,
    requestMethod: 'PATCH'
  })
}
export const inviteOrganizers = (invitation) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_ORGANIZER_INVITATION_CREATE_START,
    receiveType: actionTypes.EVENT_ORGANIZER_INVITATION_CREATE_COMPLETE,
    failType: actionTypes.EVENT_ORGANIZER_INVITATION_CREATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: invitation,
    errorMessage: 'Something prevented creating these invations',
    caller: 'new invitation',
    route: `/api/v1/web/invitations`,
    requestMethod: 'POST'
  })
}

export const deleteInvitation = (invitation) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_ORGANIZER_INVITATION_DELETE_START,
    receiveType: actionTypes.EVENT_ORGANIZER_INVITATION_DELETE_COMPLETE,
    failType: actionTypes.EVENT_ORGANIZER_INVITATION_DELETE_FAIL,
  })

  return handleApiCall({
    actions,
    data: invitation,
    errorMessage: 'Something prevented creating these invations',
    caller: 'new invitation',
    route: `/api/v1/web/invitations/${invitation.id}`,
    requestMethod: 'PATCH'
  })
}
