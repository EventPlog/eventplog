import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const questionReducer = (state=initialState.question, action) => {
  switch(action.type) {
    case actionTypes.QUESTION_CREATE_START:
    case actionTypes.QUESTION_SHOW_START:
    case actionTypes.QUESTION_UPDATE_START:
      return {loading: true}

    case actionTypes.QUESTION_CREATE_COMPLETE:
    case actionTypes.QUESTION_SHOW_COMPLETE:
    case actionTypes.QUESTION_UPDATE_COMPLETE:
      return {...action.payload}

    case actionTypes.QUESTION_CREATE_FAIL:
    case actionTypes.QUESTION_SHOW_FAIL:
    case actionTypes.QUESTION_UPDATE_FAIL:
      return {error: true}

    case actionTypes.QUESTION_ORGANIZER_QUESTION_CREATE_COMPLETE:
    case actionTypes.QUESTION_ORGANIZER_QUESTION_UPDATE_COMPLETE:
      return {...state, organizers_questions: action.payload}

    default:
      return state;
  }
};

export default questionReducer