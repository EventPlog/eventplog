import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const presentationReducer = (state=initialState.presentation, action) => {
  let data;
  switch(action.type) {
    case actionTypes.PRESENTATION_SHOW_START:
    case actionTypes.PRESENTATION_UPDATE_START:
      return {...state, loading: true }

    case actionTypes.PRESENTATION_SHOW_COMPLETE:
    case actionTypes.PRESENTATION_UPDATE_COMPLETE:
      return {...state, ...action.payload, loading: false, error: false}

    case actionTypes.PRESENTATION_SHOW_FAIL:
    case actionTypes.PRESENTATION_UPDATE_FAIL:
      return {...state, error: action.payload, loading: false }

    case actionTypes.PRESENTATION_COMMENT_UPDATE_COMPLETE:
      return {...state, comments: action.payload, loading: false}

    case actionTypes.PRESENTATION_COMMENT_INDEX_COMPLETE:
      data = [...state.comments.data, ...action.payload.data]
      return {...state, comments: {data, meta: action.payload.meta}}

    default:
      return state;
  }
};

export default presentationReducer