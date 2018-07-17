import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const eventsReducer = (state=initialState.invitation, action) => {
  switch(action.type) {
    case actionTypes.INVITATION_INDEX_START:
      return {...state, loading: true }

    case actionTypes.INVITATION_INDEX_COMPLETE:
      return [...state, ...action.payload]

    case actionTypes.INVITATION_INDEX_FAIL:
      return {...state, error: action.payload }

    default:
      return state;
  }
};

export default eventsReducer