import { combineReducers } from 'redux';
import speakers from './speakers-reducer';

let rootSpeakersReducer = combineReducers({
  speakers,
})

export default rootSpeakersReducer