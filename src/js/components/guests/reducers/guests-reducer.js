import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const sortData = (data) => data.sort((next, prev) => next.id < prev.id)

const eventsReducer = (state=initialState.guests, action) => {
  let data
  switch(action.type) {
    case actionTypes.GUEST_INDEX_START:
    case actionTypes.GUEST_UPDATE_START:
      return {...state, loading: true }

    case actionTypes.GUEST_INDEX_COMPLETE:
      return {...state, ...action.payload, loading: false}

    case actionTypes.GUEST_INDEX_FAIL:
    case actionTypes.GUEST_UPDATE_FAIL:
      return {...state, error: action.payload, loading: false }

    case actionTypes.GUEST_UPDATE_COMPLETE:
      data = sortData(state.data.filter(guest => guest.id != action.payload.id))
      return {...state, data: [...data, action.payload], loading: false }

    case actionTypes.GUEST_DELETE_COMPLETE:
      data = state.data.filter(guest => guest.id != action.payload.id)
      return {...state, data, loading: false }

    default:
      return state;
  }
};

export default eventsReducer