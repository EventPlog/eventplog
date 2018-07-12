import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const eventReducer = (state=initialState.event, action) => {
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

    default:
      return state;
  }
};

export default eventReducer