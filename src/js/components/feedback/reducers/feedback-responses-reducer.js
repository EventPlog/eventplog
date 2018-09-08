import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const eventChecklistReducer = (state=initialState.feedback_responses, action) => {
  let pending, in_progress, completed
  switch(action.type) {
    case actionTypes.EVENT_CHECKLIST_INDEX_START:
      return {...state, loading: true }

    case actionTypes.EVENT_CHECKLIST_INDEX_COMPLETE:
      return {...state, ...action.payload, loading: false}

    case actionTypes.EVENT_CHECKLIST_INDEX_FAIL:
      return {...state, error: action.payload, loading: false }

    default:
      return state;
  }
};

export default eventChecklistReducer