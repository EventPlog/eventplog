import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const invitationReducer = (state=initialState.invitation, action) => {
  switch(action.type) {
    case actionTypes.INVITATION_CREATE_START:
    case actionTypes.INVITATION_SHOW_START:
    case actionTypes.INVITATION_UPDATE_START:
      return {loading: true}

    case actionTypes.INVITATION_CREATE_COMPLETE:
    case actionTypes.INVITATION_SHOW_COMPLETE:
    case actionTypes.INVITATION_UPDATE_COMPLETE:
      return {...action.payload}

    case actionTypes.INVITATION_CREATE_FAIL:
    case actionTypes.INVITATION_SHOW_FAIL:
    case actionTypes.INVITATION_UPDATE_FAIL:
      return {error: true}

    case actionTypes.INVITATION_ORGANIZER_INVITATION_CREATE_COMPLETE:
    case actionTypes.INVITATION_ORGANIZER_INVITATION_UPDATE_COMPLETE:
      return {...state, organizers_invitations: action.payload}

    default:
      return state;
  }
};

export default invitationReducer