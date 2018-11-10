import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const presentationsReducer = (state=initialState.presentations, action) => {
  let data;
  switch(action.type) {
    case actionTypes.PRESENTATION_INDEX_START:
      return {...state, loading: true }

    case actionTypes.PRESENTATION_INDEX_COMPLETE:
      return {...state, ...action.payload, loading: false, error: false}

    case actionTypes.PRESENTATION_INDEX_FAIL:
      return {...state, error: action.payload, loading: false }

    case actionTypes.PRESENTATION_CREATE_COMPLETE:
    case actionTypes.PRESENTATION_UPDATE_COMPLETE:
      data = updateItemInCollection(state.data, action.payload, true)
      return {...state, data, loading: false, error: false}

    case actionTypes.PRESENTATION_DELETE_COMPLETE:
      data = state.data.filter(presentation => presentation.id != action.payload.id)
      return {...state, data, loading: false, error: false}

    default:
      return state;
  }
};

export default presentationsReducer