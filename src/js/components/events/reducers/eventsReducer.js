import initialState from './intialState';
import actionTypes from '../actions/types'

const eventsReducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.EVENT_INDEX_START:
      return {...state, loading: true }

    case actionTypes.EVENT_INDEX_COMPLETE:
      return {...state, loading: false, events: action.payload }

    case actionTypes.EVENT_CREATE_START:
    case actionTypes.EVENT_SHOW_START:
    case actionTypes.EVENT_UPDATE_START:
      return {...state, event: {loading: true} }

    case actionTypes.EVENT_CREATE_COMPLETE:
    case actionTypes.EVENT_SHOW_COMPLETE:
    case actionTypes.EVENT_UPDATE_COMPLETE:
      return {...state, event: {...action.payload}}

    default:
      return state;
  }
};

export default eventsReducer