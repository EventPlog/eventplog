import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const guestReducer = (state=initialState.guest, action) => {
  switch(action.type) {
    case actionTypes.GUEST_CREATE_START:
    case actionTypes.GUEST_SHOW_START:
    case actionTypes.GUEST_UPDATE_START:
      return {loading: true}

    case actionTypes.GUEST_CREATE_COMPLETE:
    case actionTypes.GUEST_SHOW_COMPLETE:
    case actionTypes.GUEST_UPDATE_COMPLETE:
      return {...action.payload, loading: false}

    case actionTypes.GUEST_CREATE_FAIL:
    case actionTypes.GUEST_SHOW_FAIL:
    case actionTypes.GUEST_UPDATE_FAIL:
      return {error: action.payload, loading: false}

    default:
      return state;
  }
};

export default guestReducer