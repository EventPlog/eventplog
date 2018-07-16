import { combineReducers } from 'redux';
import event from './event-reducer';
import events from './events-reducer';
import events_suggestions from './events-suggestions-reducer';

let rootCommunitiesReducer = combineReducers({
  event,
  events,
  events_suggestions,
})

export default rootCommunitiesReducer