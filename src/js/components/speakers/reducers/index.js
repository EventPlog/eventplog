import { combineReducers } from 'redux';
import speaker from './speaker-reducer';
import speakers from './speakers-reducer';

let rootSpeakersReducer = combineReducers({
  speaker,
  speakers,
})

export default rootSpeakersReducer