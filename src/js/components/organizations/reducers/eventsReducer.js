import initialState from './intialState';
import actionTypes from '../actions/types'

const eventsReducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.EVENT_INDEX_COMPLETE:
      return {...state, ...action.payload.data}

    case actionTypes.EVENT_CREATE_COMPLETE:
    case actionTypes.EVENT_SHOW_COMPLETE:
    case actionTypes.EVENT_UPDATE_COMPLETE:
      return {...state, event: {...action.payload.data}}

    default:
      return state;
  }
};

export default eventsReducer