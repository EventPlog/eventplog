
import { combineReducers } from 'redux';
import user from './userReducer';
import users from './usersReducer';

let rootCommunitiesReducer = combineReducers({
  user,
  users,
})

export default rootCommunitiesReducer;