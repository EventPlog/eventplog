import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const eventChecklistReducer = (state=initialState.event_checklist, action) => {
  let pending, in_progress, completed
  switch(action.type) {
    case actionTypes.EVENT_CHECKLIST_INDEX_START:
      return {...state, loading: true }

    case actionTypes.EVENT_CHECKLIST_INDEX_COMPLETE:
      // const {todo_items = []} = action.payload
      // pending = todo_items.filter(item => item.status == 'pending')
      // in_progress = todo_items.filter(item => item.status == 'in progress')
      // completed = todo_items.filter(item => item.status == 'completed')
      return {...state, ...action.payload, loading: false}

    case actionTypes.EVENT_CHECKLIST_INDEX_FAIL:
      return {...state, error: action.payload, loading: false }

    default:
      return state;
  }
};

export default eventChecklistReducer