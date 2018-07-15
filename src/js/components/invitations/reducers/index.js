import { combineReducers } from 'redux';
import invitation from './invitation-reducer';
import invitations from './invitations-reducer';
import user_pending_invitations from './user-pending-invitations-reducer';
import event_pending_invitations from './event-pending-invitations-reducer';

let rootCommunitiesReducer = combineReducers({
  invitation,
  invitations,
  user_pending_invitations,
  event_pending_invitations,
})

export default rootCommunitiesReducer