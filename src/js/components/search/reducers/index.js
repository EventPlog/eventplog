import { combineReducers } from 'redux';
import query from './search-reducer';

let rootSearchReducer = combineReducers({
  query,
})

export default rootSearchReducer