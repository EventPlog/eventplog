import { combineReducers } from 'redux';
import auth from 'js/components/login/reducers'
import lead from 'js/components/leads/reducers'
import events from 'js/components/events/reducers'
import users from 'js/components/user/reducers'
import communities from 'js/components/communities/reducers'
import invitations from 'js/components/invitations/reducers'

let rootReducer = combineReducers({
  auth,
  lead,
  events,
  users,
  communities,
  invitations,
})

export default rootReducer
