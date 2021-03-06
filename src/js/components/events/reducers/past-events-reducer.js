import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const eventsReducer = (state=initialState.past_events, action) => {
  let data
  switch(action.type) {
    case actionTypes.EVENT_PAST_INDEX_START:
      return {...state, loading: true }

    case actionTypes.EVENT_PAST_INDEX_COMPLETE:
      return {...state, ...action.payload, loading: false}

    case actionTypes.EVENT_PAST_INDEX_FAIL:
      return {loading: false, error: action.payload }

    case actionTypes.EVENT_ATTEND_CREATE_COMPLETE:
      data = state.data.filter(event => event.id != action.payload.event_id)
      return {...state, data, loading: false}

    default:
      return state;
  }
};

export default eventsReducer