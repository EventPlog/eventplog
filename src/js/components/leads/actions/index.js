import actionTypes from '../actions/types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'
import mockApi from '../../../mock-api/lead-api'

const updateLead = (data) => {
  let actions = baseActions({
    requestType: actionTypes.REQUEST_LEAD_START,
    receiveType: actionTypes.RECEIVE_LEAD_START,
    failType: actionTypes.FAIL_LEAD_START
  });

  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented creating a lead',
    caller: 'leads',
    route: `/leads/new`,
    requestMethod: 'GET'
  });
}

export const mockUpdateLead = (lead) => {
  return (dispatch) => {
    return mockApi.update(lead).then(r => {
      dispatch({type: actionTypes.RECEIVE_LEAD_UPDATE, payload: r})
      return r
    })
  }
}

export const mockUpdateTeamMembers = (leadId, teamMembers) =>
  (dispatch) => mockApi.updateTeamMembers(leadId, teamMembers).then(payload => {
    dispatch({type: actionTypes.RECEIVE_LEAD_UPDATE, payload})
  })

export const mockUpdateOrganizer = (leadId, organizer) =>
  (dispatch) => mockApi.updateOrganizer(leadId, organizer).then(payload => {
    dispatch({type: actionTypes.RECEIVE_LEAD_UPDATE, payload})
  })
