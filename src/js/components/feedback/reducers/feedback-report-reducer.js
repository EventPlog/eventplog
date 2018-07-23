import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const eventChecklistReducer = (state=initialState.feedback_report, action) => {
  let pending, in_progress, completed
  switch(action.type) {
    case actionTypes.FEEDBACK_REPORT_SHOW_START:
      return {...state, loading: true }

    case actionTypes.FEEDBACK_REPORT_SHOW_COMPLETE:
      return {...state, ...action.payload, loading: false}

    case actionTypes.FEEDBACK_REPORT_SHOW_FAIL:
      return {...state, error: action.payload, loading: false }

    default:
      return state;
  }
};

export default eventChecklistReducer