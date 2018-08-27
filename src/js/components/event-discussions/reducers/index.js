import { combineReducers } from 'redux';
import event_discussion from './event-discussion-reducer';

let rootCommunitiesReducer = combineReducers({
  event_discussion,
})

export default rootCommunitiesReducer