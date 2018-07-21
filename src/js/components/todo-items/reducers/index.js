import { combineReducers } from 'redux';
import todo_item from './todo-item-reducer';
import todo_items from './todo-items-reducer';

let rootEventChecklistReducer = combineReducers({
  todo_item,
  todo_items,
})

export default rootEventChecklistReducer