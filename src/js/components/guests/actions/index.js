import actionTypes from './types'
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

export const getGuests = (data) => {
  let actions = baseActions({
    requestType: actionTypes.GUEST_INDEX_START,
    receiveType: actionTypes.GUEST_INDEX_COMPLETE,
    failType: actionTypes.GUEST_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: data,
    errorMessage: 'Something prevented getting the guest list for this event.',
    caller: 'new event',
    route: `/api/v1/web/events/${data.event_id}/user_events`,
    requestMethod: 'GET'
  })
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
    caller: 'check in guest',
    route: `/api/v1/web/events/${eventId}/check_ins`,
    requestMethod: 'POST'
  })
}

export const updateGuest = (params) => {
  let actions = baseActions({
    requestType: actionTypes.GUEST_UPDATE_START,
    receiveType: actionTypes.GUEST_UPDATE_COMPLETE,
    failType: actionTypes.GUEST_UPDATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from updating this guest.',
    caller: 'update guest',
    route: `/api/v1/web/user_events/${params.id}`,
    requestMethod: 'PATCH'
  })
}

export const deleteGuest = (id) => {
  let actions = baseActions({
    requestType: actionTypes.GUEST_DELETE_START,
    receiveType: actionTypes.GUEST_DELETE_COMPLETE,
    failType: actionTypes.GUEST_DELETE_FAIL,
  })

  return handleApiCall({
    actions,
    data: {deleted: true},
    errorMessage: 'Something prevented us from deleting this guest.',
    caller: 'delete guest',
    route: `/api/v1/web/user_events/${id}`,
    requestMethod: 'PATCH'
  })
}
