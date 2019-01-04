import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const partnersReducer = (state=initialState.partners, action) => {
  let data;
  switch(action.type) {
    case actionTypes.PARTNER_INDEX_START:
      return {...state, loading: true }

    case actionTypes.PARTNER_INDEX_COMPLETE:
      return {...state, ...action.payload, loading: false, error: false}

    case actionTypes.PARTNER_INDEX_FAIL:
      return {...state, error: action.payload, loading: false }

    case actionTypes.PARTNER_CREATE_COMPLETE:
    case actionTypes.PARTNER_UPDATE_COMPLETE:
      data = updateItemInCollection(state.data, action.payload, true)
      return {...state, data, loading: false, error: false}

    case actionTypes.PARTNER_DELETE_COMPLETE:
      data = state.data.filter(partner => partner.id != action.payload.id)
      return {...state, data, loading: false, error: false}

    default:
      return state;
  }
};

export default partnersReducer