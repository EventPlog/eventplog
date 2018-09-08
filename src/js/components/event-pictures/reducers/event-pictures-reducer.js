import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const eventPicturesReducer = (state=initialState.event_pictures, action) => {
  let organizers_invitations, data;
  switch(action.type) {
    case actionTypes.EVENT_PICTURE_INDEX_START:
      return {...state, loading: true}

    case actionTypes.EVENT_PICTURE_INDEX_COMPLETE:
      return {...state, ...action.payload, loading: false}

    case actionTypes.EVENT_PICTURE_INDEX_FAIL:
      return {...state, loading: false, error: true}

    default:
      return state;
  }
};

export default eventPicturesReducer