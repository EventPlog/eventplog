import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const eventPictureReducer = (state=initialState.event_picture, action) => {
  let organizers_invitations, data;
  switch(action.type) {
    case actionTypes.EVENT_PICTURE_SHOW_START:
    case actionTypes.EVENT_PICTURE_UPDATE_START:
      return {...state, loading: true}

    case actionTypes.EVENT_PICTURE_SHOW_COMPLETE:
    case actionTypes.EVENT_PICTURE_UPDATE_COMPLETE:
      return {...state, ...action.payload, loading: false}

    case actionTypes.EVENT_PICTURE_SHOW_FAIL:
    case actionTypes.EVENT_PICTURE_UPDATE_FAIL:
      return {...state, loading: false, error: true}

    default:
      return state;
  }
};

export default eventPictureReducer