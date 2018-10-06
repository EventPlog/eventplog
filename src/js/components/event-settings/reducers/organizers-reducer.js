import initialState from './intialState';
import actionTypes from '../actions/types'
import eventActionTypes from 'js/components/events/actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const sortData = (data) => data.sort((next, prev) => next.id < prev.id)

const organizersReducer = (state=initialState.organizers, action) => {
  let organizers
  switch(action.type) {
    case eventActionTypes.EVENT_SHOW_COMPLETE:
    case eventActionTypes.EVENT_UPDATE_COMPLETE:
      if (!action.payload.organizing_team) return state
      return sortData(action.payload.organizing_team
                      .filter(user => user && user.role != 'Volunteer'))

    case actionTypes.EVENT_ORGANIZER_INDEX_START:
    case actionTypes.EVENT_ORGANIZER_UPDATE_START:
      return state

    case actionTypes.EVENT_ORGANIZER_INDEX_COMPLETE:
      return [...state, ...action.payload]

    case actionTypes.EVENT_ORGANIZER_INDEX_FAIL:
    case actionTypes.EVENT_ORGANIZER_UPDATE_FAIL:
      return {...state, error: action.payload, loading: false }

    case actionTypes.EVENT_ORGANIZER_UPDATE_COMPLETE:
      return action.payload.role == 'Volunteer'
        ? state.filter(organizer => organizer.id != action.payload.id)
        : updateItemInCollection(state, action.payload, true)

    case actionTypes.EVENT_ORGANIZER_DELETE_COMPLETE:
      return state.filter(organizer => organizer.id != action.payload.id)

    default:
      return state;
  }
};

export default organizersReducer