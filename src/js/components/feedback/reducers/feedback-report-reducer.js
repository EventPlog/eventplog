import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const eventChecklistReducer = (state=initialState.feedback_report, action) => {
  let data
  switch(action.type) {
    case actionTypes.FEEDBACK_REPORT_SHOW_START:
    case actionTypes.FEEDBACK_REPORT_UPDATE_START:
      return {...state, loading: true }

    case actionTypes.FEEDBACK_REPORT_SHOW_COMPLETE:
    case actionTypes.FEEDBACK_REPORT_UPDATE_COMPLETE:
      return {...state, ...action.payload, loading: false}

    case actionTypes.FEEDBACK_REPORT_SHOW_FAIL:
    case actionTypes.FEEDBACK_REPORT_UPDATE_FAIL:
      return {...state, error: action.payload, loading: false }

    case actionTypes.EVENT_FEEDBACK_RESPONSE_INDEX_COMPLETE:
      data = [...state.feedback_responses.data, ...action.payload.data]
      return {...state, feedback_responses: {data, meta: action.payload.meta}, loading: false}

    default:
      return state;
  }
};

export default eventChecklistReducer