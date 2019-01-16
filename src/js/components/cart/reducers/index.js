import { combineReducers } from 'redux';
import cart from './cart-reducer';

let rootCartReducer = combineReducers({
  cart,
})

export default rootCartReducer