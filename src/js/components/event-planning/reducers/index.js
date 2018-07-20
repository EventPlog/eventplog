import { combineReducers } from 'redux';
import event_checklist from './event-checklist-reducer';

let rootEventChecklistReducer = combineReducers({
  event_checklist,
})

export default rootEventChecklistReducer