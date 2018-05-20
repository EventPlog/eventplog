import { combineReducers } from 'redux';
import auth from '../components/login/reducers'
import lead from '../components/leads/reducers'
import events from '../components/events/reducers'
import users from '../components/user/reducers'

let rootReducer = combineReducers({
  auth,
  lead,
  events,
  users,
})

export default rootReducer
