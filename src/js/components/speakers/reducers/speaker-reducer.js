import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const speakerReducer = (state=initialState.speaker, action) => {
  let data;
  switch(action.type) {
    case actionTypes.SPEAKER_SHOW_START:
    case actionTypes.SPEAKER_UPDATE_START:
      return {...state, loading: true }

    case actionTypes.SPEAKER_SHOW_COMPLETE:
    case actionTypes.SPEAKER_UPDATE_COMPLETE:
      return {...state, ...action.payload, loading: false, error: false}

    case actionTypes.SPEAKER_SHOW_FAIL:
    case actionTypes.SPEAKER_UPDATE_FAIL:
      return {...state, error: action.payload, loading: false }

    case actionTypes.SPEAKER_COMMENT_UPDATE_COMPLETE:
      return {...state, comments: action.payload, loading: false}

    case actionTypes.SPEAKER_COMMENT_INDEX_COMPLETE:
      data = [...state.comments.data, ...action.payload.data]
      return {...state, comments: {data, meta: action.payload.meta}}

    default:
      return state;
  }
};

export default speakerReducer