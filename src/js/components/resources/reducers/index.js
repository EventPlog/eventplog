import { combineReducers } from 'redux';
import resources from './resources-reducer';

let rootResourcesReducer = combineReducers({
  resources,
})

export default rootResourcesReducer