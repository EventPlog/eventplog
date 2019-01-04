import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const sponsorsReducer = (state=initialState.sponsorships, action) => {
  let data;
  switch(action.type) {
    case actionTypes.SPONSORSHIP_INDEX_START:
      return {...state, loading: true }

    case actionTypes.SPONSORSHIP_INDEX_COMPLETE:
      return {...state, ...action.payload, loading: false, error: false}

    case actionTypes.SPONSORSHIP_INDEX_FAIL:
      return {...state, error: action.payload, loading: false }

    case actionTypes.SPONSORSHIP_CREATE_COMPLETE:
    case actionTypes.SPONSORSHIP_UPDATE_COMPLETE:
      data = updateItemInCollection(state.data, action.payload, true)
      return {...state, data, loading: false, error: false}

    case actionTypes.SPONSORSHIP_DELETE_COMPLETE:
      data = state.data.filter(sponsor => sponsor.id != action.payload.id)
      return {...state, data, loading: false, error: false}

    case actionTypes.SPONSORSHIP_OFFER_SHOW_COMPLETE:
      return {...state, ...action.payload.sponsorships, loading: false, error: false}

    default:
      return state;
  }
};

export default sponsorsReducer