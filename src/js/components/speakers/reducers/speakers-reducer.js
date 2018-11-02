import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const speakersReducer = (state=initialState.speakers, action) => {
  let data;
  switch(action.type) {
    case actionTypes.SPEAKER_INDEX_START:
      return {...state, loading: true }

    case actionTypes.SPEAKER_INDEX_COMPLETE:
      return {...state, ...action.payload, loading: false, error: false}

    case actionTypes.SPEAKER_INDEX_FAIL:
      return {...state, error: action.payload, loading: false }

    case actionTypes.SPEAKER_CREATE_COMPLETE:
    case actionTypes.SPEAKER_UPDATE_COMPLETE:
      data = updateItemInCollection(state.data, action.payload, true)
      return {...state, data, loading: false, error: false}

    case actionTypes.SPEAKER_DELETE_COMPLETE:
      data = state.data.filter(speaker => speaker.id != action.payload.id)
      return {...state, data, loading: false, error: false}

    default:
      return state;
  }
};

export default speakersReducer