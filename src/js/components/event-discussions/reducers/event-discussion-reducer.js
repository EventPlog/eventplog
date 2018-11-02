import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const eventReducer = (state=initialState.event_discussion, action) => {
  let organizers_invitations, data;
  switch(action.type) {
    case actionTypes.EVENT_DISCUSSION_SHOW_START:
    case actionTypes.EVENT_DISCUSSION_UPDATE_START:
      return {...state, loading: true}

    case actionTypes.EVENT_DISCUSSION_SHOW_COMPLETE:
    case actionTypes.EVENT_DISCUSSION_UPDATE_COMPLETE:
      return {...state, ...action.payload, loading: false}

    case actionTypes.EVENT_DISCUSSION_SHOW_FAIL:
    case actionTypes.EVENT_DISCUSSION_UPDATE_FAIL:
      return {...state, loading: false, error: true}

    case actionTypes.EVENTDISCUSSION_COMMENT_CREATE_COMPLETE:
    case actionTypes.EVENTDISCUSSION_COMMENT_UPDATE_COMPLETE:
      return {...state, comments: action.payload}

    case actionTypes.EVENTDISCUSSION_COMMENT_INDEX_COMPLETE:
      data = [...state.comments.data, ...action.payload.data]
      return {...state, comments: {data, meta: action.payload.meta}}

    default:
      return state;
  }
};

export default eventReducer