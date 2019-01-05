import { combineReducers } from 'redux';
import partner from './partner-reducer';
import partners from './partners-reducer';

let rootPartnersReducer = combineReducers({
  partner,
  partners,
})

export default rootPartnersReducer