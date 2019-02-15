import initialState from './intialState';
import actionTypes from '../actions/types'
import eventActionTypes from 'js/components/events/actions/types'

const communityReducer = (state=initialState.community, action) => {
  switch(action.type) {
    case actionTypes.CATEGORY_SHOW_START:
    case actionTypes.CATEGORY_CREATE_START:
    case actionTypes.CATEGORY_UPDATE_START:
      return {...state, loading: true};

    case actionTypes.CATEGORY_SHOW_COMPLETE:
    case actionTypes.CATEGORY_CREATE_COMPLETE:
    case actionTypes.CATEGORY_UPDATE_COMPLETE:
    case actionTypes.CATEGORY_FOLLOW_CREATE_COMPLETE:
    case actionTypes.CATEGORY_FOLLOW_DELETE_COMPLETE:
      return action.payload

    case actionTypes.CATEGORY_SHOW_FAIL:
    case actionTypes.CATEGORY_CREATE_FAIL:
    case actionTypes.CATEGORY_UPDATE_FAIL:
      return {loading: false, error: action.payload}

    case eventActionTypes.EVENT_SHOW_COMPLETE:
      return {loading: false, ...action.payload.community}

    default:
      return state;
  }
};

export default communityReducer