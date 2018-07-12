import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const eventsReducer = (state=initialState.events_suggestions, action) => {
  switch(action.type) {
    case actionTypes.EVENT_SUGGESTIONS_INDEX_START:
      return {loading: true }

    case actionTypes.EVENT_SUGGESTIONS_INDEX_COMPLETE:
      return [...action.payload]

    case actionTypes.EVENT_ATTEND_CREATE_COMPLETE:
      return updateItemInCollection(state, action.payload)

    case actionTypes.EVENT_SUGGESTIONS_INDEX_FAIL:
      return {loading: false, error: action.payload }

    default:
      return state;
  }
};

export default eventsReducer