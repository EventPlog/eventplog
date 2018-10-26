import { combineReducers } from 'redux';
import community from './community-reducer';
import communities from './communities-reducer';
import communities_suggestions from './communities-suggestions-reducer';

let rootCommunitiesReducer = combineReducers({
  community,
  communities,
  communities_suggestions,
})

export default rootCommunitiesReducer