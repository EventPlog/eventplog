import { combineReducers } from 'redux';
import presentation from './presentation-reducer';
import presentations from './presentations-reducer';

let rootPresentationsReducer = combineReducers({
  presentation,
  presentations,
})

export default rootPresentationsReducer