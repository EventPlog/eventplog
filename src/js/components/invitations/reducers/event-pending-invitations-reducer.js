import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const eventsReducer = (state=initialState.event_pending_invitations, action) => {
  switch(action.type) {
    case actionTypes.INVITATION_EVENT_PENDING_INDEX_START:
      return {loading: true }

    case actionTypes.INVITATION_EVENT_PENDING_INDEX_COMPLETE:
      return [...action.payload]

    case actionTypes.INVITATION_EVENT_PENDING_INDEX_FAIL:
      return {loading: false, error: action.payload }

    case actionTypes.INVITATION_EVENT_PENDING_CREATE_COMPLETE:
    case actionTypes.INVITATION_EVENT_PENDING_UPDATE_COMPLETE:
      return [
        ...state.filter(invite => invite.id != action.payload.id),
        action.payload.id,
      ]

    case actionTypes.INVITATION_EVENT_PENDING_DELETE_COMPLETE:
      return [
        ...state.filter(invite => invite.id != action.payload.id),
      ]

    default:
      return state;
  }
};

export default eventsReducer