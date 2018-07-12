import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const eventsReducer = (state=initialState.events, action) => {
  switch(action.type) {
    case actionTypes.EVENT_INDEX_START:
      return {...state, loading: true }

    case actionTypes.EVENT_INDEX_COMPLETE:
      return [...state, ...action.payload]

    case actionTypes.EVENT_INDEX_FAIL:
      return {...state, error: action.payload }

    case actionTypes.EVENT_ATTEND_CREATE_COMPLETE:
      return updateItemInCollection(state, action.payload)

    default:
      return state;
  }
};

export default eventsReducer