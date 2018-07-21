import { combineReducers } from 'redux';
import guest from './guest-reducer';
import guests from './guests-reducer';

let rootCommunitiesReducer = combineReducers({
  guest,
  guests,
})

export default rootCommunitiesReducer