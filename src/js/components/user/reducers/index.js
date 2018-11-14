
import { combineReducers } from 'redux';
import user from './userReducer';

let rootCommunitiesReducer = combineReducers({
  user,
})

export default rootCommunitiesReducer;