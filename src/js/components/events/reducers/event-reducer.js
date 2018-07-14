import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const eventReducer = (state=initialState.event, action) => {
  let organizers_invitations;
  switch(action.type) {
    case actionTypes.EVENT_CREATE_START:
    case actionTypes.EVENT_SHOW_START:
    case actionTypes.EVENT_UPDATE_START:
      return {loading: true}

    case actionTypes.EVENT_CREATE_COMPLETE:
    case actionTypes.EVENT_SHOW_COMPLETE:
    case actionTypes.EVENT_UPDATE_COMPLETE:
      return {...action.payload}

    case actionTypes.EVENT_CREATE_FAIL:
    case actionTypes.EVENT_SHOW_FAIL:
    case actionTypes.EVENT_UPDATE_FAIL:
      return {error: true}

    case actionTypes.EVENT_ATTEND_CREATE_COMPLETE:
      return {...state, ...action.payload}

    case actionTypes.EVENT_COMMENT_UPDATE_COMPLETE:
      return {...state, comments: action.payload}

    case actionTypes.EVENT_ANNOUNCEMENT_UPDATE_COMPLETE:
      return {...state, announcements: action.payload}

    case actionTypes.EVENT_ORGANIZER_INVITATION_CREATE_COMPLETE:
      const pendingInvites = action.payload.filter(invite => invite.status == 'pending')
      organizers_invitations = [...state.organizers_invitations, ...pendingInvites]
      return { ...state, organizers_invitations }

    case actionTypes.EVENT_ORGANIZER_INVITATION_UPDATE_COMPLETE:
      organizers_invitations = updateItemInCollection(state.organizer_invitations, action.payload)
      return { ...state, organizers_invitations }

    case actionTypes.EVENT_ORGANIZER_INVITATION_DELETE_COMPLETE:
      organizers_invitations = state.organizers_invitations
                                      .filter(invite => invite.id != action.payload.id)
      return {...state, organizers_invitations }

    default:
      return state;
  }
};

export default eventReducer