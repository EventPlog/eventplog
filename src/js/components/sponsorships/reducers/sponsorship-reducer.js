import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const sponsorReducer = (state=initialState.sponsorship, action) => {
  let data;
  switch(action.type) {
    case actionTypes.SPONSORSHIP_SHOW_START:
    case actionTypes.SPONSORSHIP_UPDATE_START:
      return {...state, loading: true }

    case actionTypes.SPONSORSHIP_SHOW_COMPLETE:
    case actionTypes.SPONSORSHIP_CREATE_COMPLETE:
    case actionTypes.SPONSORSHIP_UPDATE_COMPLETE:
      return {...state, ...action.payload, loading: false, error: false}

    case actionTypes.SPONSORSHIP_SHOW_FAIL:
    case actionTypes.SPONSORSHIP_UPDATE_FAIL:
      return {...state, error: action.payload, loading: false }

    case actionTypes.SPONSORSHIP_COMMENT_UPDATE_COMPLETE:
      return {...state, comments: action.payload, loading: false}

    case actionTypes.SPONSORSHIP_COMMENT_INDEX_COMPLETE:
      data = [...state.comments.data, ...action.payload.data]
      return {...state, comments: {data, meta: action.payload.meta}}

    default:
      return state;
  }
};

export default sponsorReducer