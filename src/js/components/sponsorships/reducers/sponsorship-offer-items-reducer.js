import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const sponsor_offer_itemsReducer = (state=initialState.sponsorship_offer_items, action) => {
  let data;
  switch(action.type) {
    case actionTypes.SPONSORSHIP_OFFER_ITEM_INDEX_START:
      return {...state, loading: true }

    case actionTypes.SPONSORSHIP_OFFER_ITEM_INDEX_COMPLETE:
      return {...state, ...action.payload, loading: false, error: false}

    case actionTypes.SPONSORSHIP_OFFER_ITEM_INDEX_FAIL:
      return {...state, error: action.payload, loading: false }

    case actionTypes.SPONSORSHIP_OFFER_ITEM_CREATE_COMPLETE:
    case actionTypes.SPONSORSHIP_OFFER_ITEM_UPDATE_COMPLETE:
      data = updateItemInCollection(state.data, action.payload, true)
      data = data.sort((s, t) => s.amount > t.amount)
      return {...state, data, loading: false, error: false}

    case actionTypes.SPONSORSHIP_OFFER_ITEM_DELETE_COMPLETE:
      data = state.data.filter(sponsor_offer_item => sponsor_offer_item.id != action.payload.id)
      return {...state, data, loading: false, error: false}

    case actionTypes.SPONSORSHIP_OFFER_SHOW_COMPLETE:
      return action.payload.sponsorship_offer_items

    default:
      return state;
  }
};

export default sponsor_offer_itemsReducer