import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const eventsReducer = (state=initialState.events, action) => {
  let data = []
  switch(action.type) {
    case actionTypes.EVENT_INDEX_START:
    case actionTypes.EVENT_ATTEND_CREATE_START:
      data = action.payload.data && action.payload.data.page == 1
        ? []
        : state.data
      return {...state, data, loading: true }

    case actionTypes.EVENT_INDEX_COMPLETE:
      data = action.payload.meta && action.payload.meta.current_page == 1
              ? action.payload.data
              : [...state.data, ...action.payload.data]
      return {...state, ...action.payload, data, loading: false, error: false}

    case actionTypes.EVENT_INDEX_FAIL:
      return {...state, error: action.payload, loading: false }

    case actionTypes.EVENT_ATTEND_CREATE_COMPLETE:
      if (!state.data) return state
      data = state.data.filter(event => event.id != action.payload.event_id)
      return {...state, data, loading: false}

    default:
      return state;
  }
};

export default eventsReducer