import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const partnerReducer = (state=initialState.partner, action) => {
  let data;
  switch(action.type) {
    case actionTypes.PARTNER_SHOW_START:
    case actionTypes.PARTNER_UPDATE_START:
      return {...state, loading: true }

    case actionTypes.PARTNER_SHOW_COMPLETE:
    case actionTypes.PARTNER_UPDATE_COMPLETE:
      return {...state, ...action.payload, loading: false, error: false}

    case actionTypes.PARTNER_SHOW_FAIL:
    case actionTypes.PARTNER_UPDATE_FAIL:
      return {...state, error: action.payload, loading: false }

    case actionTypes.PARTNER_COMMENT_UPDATE_COMPLETE:
      return {...state, comments: action.payload, loading: false}

    case actionTypes.PARTNER_COMMENT_INDEX_COMPLETE:
      data = [...state.comments.data, ...action.payload.data]
      return {...state, comments: {data, meta: action.payload.meta}}

    default:
      return state;
  }
};

export default partnerReducer