import { combineReducers } from 'redux';
import community from './community-reducer';
import communities from './communities-reducer';
import communities_suggestions from './communities-suggestions-reducer';
import user_communities from './user-communities-reducer'

let rootCommunitiesReducer = combineReducers({
  community,
  communities,
  communities_suggestions,
  user_communities
})

export default rootCommunitiesReducer