import { combineReducers } from 'redux';
import event_pictures from './event-pictures-reducer';
import event_picture from './event-picture-reducer';

let rootCommunitiesReducer = combineReducers({
  event_pictures,
  event_picture,
})

export default rootCommunitiesReducer