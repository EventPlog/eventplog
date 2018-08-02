import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const organizerReducer = (state=initialState.organizer, action) => {
  switch(action.type) {
    case actionTypes.EVENT_ORGANIZER_CREATE_START:
    case actionTypes.EVENT_ORGANIZER_SHOW_START:
    case actionTypes.EVENT_ORGANIZER_UPDATE_START:
      return {loading: true}

    case actionTypes.EVENT_ORGANIZER_CREATE_COMPLETE:
    case actionTypes.EVENT_ORGANIZER_SHOW_COMPLETE:
    case actionTypes.EVENT_ORGANIZER_UPDATE_COMPLETE:
      return {...action.payload}

    case actionTypes.EVENT_ORGANIZER_CREATE_FAIL:
    case actionTypes.EVENT_ORGANIZER_SHOW_FAIL:
    case actionTypes.EVENT_ORGANIZER_UPDATE_FAIL:
      return {error: true}

    default:
      return state;
  }
};

export default organizerReducer