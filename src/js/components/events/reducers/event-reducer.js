import initialState from './intialState';
import actionTypes from '../actions/types'
import feedbackActionTypes from 'js/components/feedback/actions/types'
import organizerActionTypes from 'js/components/event-settings/actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'
import { updateEventOrganizers } from './helpers'

const eventReducer = (state=initialState.event, action) => {
  let organizers_invitations, data;
  switch(action.type) {
    case actionTypes.EVENT_CREATE_START:
    case actionTypes.EVENT_SHOW_START:
    case actionTypes.EVENT_UPDATE_START:
      return {...state, loading: true}

    case actionTypes.EVENT_CREATE_COMPLETE:
    case actionTypes.EVENT_SHOW_COMPLETE:
    case actionTypes.EVENT_UPDATE_COMPLETE:
      return updateEventOrganizers(action.payload)

    case actionTypes.EVENT_CREATE_FAIL:
    case actionTypes.EVENT_SHOW_FAIL:
    case actionTypes.EVENT_UPDATE_FAIL:
      return {...state, loading: false, error: true}

    case actionTypes.EVENT_ATTEND_CREATE_COMPLETE:
      return {...state, is_attending: true}

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

    case feedbackActionTypes.EVENT_FEEDBACK_CREATE_COMPLETE:
      return {...state, given_feedback: true, show_feedback_url: true}

    case actionTypes.EVENT_COMMENT_INDEX_COMPLETE:
      data = [...state.comments.data, ...action.payload.data]
      return {...state, comments: {data, meta: action.payload.meta}}

    default:
      return state;
  }
};

export default eventReducer