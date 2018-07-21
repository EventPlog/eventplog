import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const eventsReducer = (state=initialState.guests, action) => {
  let data
  switch(action.type) {
    case actionTypes.GUEST_INDEX_START:
      return {...state, loading: true }

    case actionTypes.GUEST_INDEX_COMPLETE:
      return {...state, ...action.payload, loading: false}

    case actionTypes.GUEST_INDEX_FAIL:
      return {...state, error: action.payload, loading: false }

    case actionTypes.GUEST_DELETE_COMPLETE:
      data = state.data.filter(guest => guest.id != action.payload.id)
      return {...state, data, loading: false }

    default:
      return state;
  }
};

export default eventsReducer