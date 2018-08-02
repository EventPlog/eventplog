import { combineReducers } from 'redux';
import organizer from './organizer-reducer';
import organizers from './organizers-reducer';
import volunteers from './volunteers-reducer';

let rootOrganizersReducer = combineReducers({
  organizer,
  organizers,
  volunteers,
})

export default rootOrganizersReducer