import { combineReducers } from 'redux';
import auth from '../components/login/reducers'
import lead from '../components/leads/reducers'
import events from '../components/events/reducers'

let rootReducer = combineReducers({
  auth,
  lead,
  events,
})

export default rootReducer
