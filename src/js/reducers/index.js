import { combineReducers } from 'redux';
import auth from '../components/login/reducers'
import lead from '../components/leads/reducers'
import events from '../components/events/reducers'
import users from '../components/user/reducers'
import communities from '../components/communities/reducers'

let rootReducer = combineReducers({
  auth,
  lead,
  events,
  users,
  communities,
})

export default rootReducer
