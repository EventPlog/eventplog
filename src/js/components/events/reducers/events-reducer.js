import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const eventsReducer = (state=initialState.events, action) => {
  let data
  switch(action.type) {
    case actionTypes.EVENT_INDEX_START:
    case actionTypes.EVENT_ATTEND_CREATE_START:
      return {...state, loading: true }

    case actionTypes.EVENT_INDEX_COMPLETE:
      return {...state, ...action.payload, loading: false}

    case actionTypes.EVENT_INDEX_FAIL:
      return {...state, error: action.payload, loading: false }

    case actionTypes.EVENT_ATTEND_CREATE_COMPLETE:
      data = state.data.filter(event => event.id != action.payload.id)
      return {...state, data, loading: false}

    default:
      return state;
  }
};

export default eventsReducer