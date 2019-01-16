import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const eventsReducer = (state=initialState.question, action) => {
  let data;
  switch(action.type) {
    case actionTypes.QUESTION_INDEX_START:
      return {...state, loading: true }

    case actionTypes.QUESTION_INDEX_COMPLETE:
      return { ...state, ...action.payload, loading: false, error: false }

    case actionTypes.QUESTION_INDEX_FAIL:
      return {...state, loading: false, error: action.payload }

    case actionTypes.QUESTION_CREATE_COMPLETE:
    case actionTypes.QUESTION_UPDATE_COMPLETE:
      data = updateItemInCollection(state.data, action.payload, true)
      return { ...state, data }

    case actionTypes.QUESTION_DELETE_COMPLETE:
      data = state.data.filter(q => q.id != action.payload.id)
      return { ...state, data }

    default:
      return state;
  }
};

export default eventsReducer