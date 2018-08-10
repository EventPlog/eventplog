import { combineReducers } from 'redux';
import event from './event-reducer';
import events from './events-reducer';
import past_events from './past-events-reducer';
import events_suggestions from './events-suggestions-reducer';

let rootCommunitiesReducer = combineReducers({
  event,
  events,
  past_events,
  events_suggestions,
})

export default rootCommunitiesReducer