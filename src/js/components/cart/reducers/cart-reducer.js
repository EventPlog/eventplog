import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'
import Auth from 'js/auth'

const CART = 'cart'

const cartReducer = (state=initialState.cart, action) => {
  let data, cookieData;
  switch(action.type) {
    case actionTypes.CART_INDEX_START:
      return {...state, loading: true }

    case actionTypes.CART_INDEX_COMPLETE:
      return {...state, ...action.payload, loading: false, error: false}

    case actionTypes.CART_INDEX_FAIL:
      return {...state, error: action.payload, loading: false }

    case actionTypes.CART_ITEM_CREATE_COMPLETE:
    case actionTypes.CART_ITEM_UPDATE_COMPLETE:
      cookieData = JSON.parse(Auth.getCookie(CART) || '[]')
      data = updateItemInCollection(cookieData, action.payload, true)
      Auth.setCookie(CART, data)
      return {...state, data, loading: false, error: false}

    case actionTypes.CART_ITEM_DELETE_COMPLETE:
      cookieData = JSON.parse(Auth.getCookie(CART) || '[]')
      data = cookieData.filter(item => item.id != action.payload.id)
      Auth.setCookie(CART, data)
      return {...state, data, loading: false, error: false}

    default:
      return state;
  }
};

export default cartReducer