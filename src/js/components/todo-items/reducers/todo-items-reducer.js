import initialState from './intialState';
import actionTypes from '../actions/types'
import checklistTypes from 'js/components/event-planning/actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const eventChecklistReducer = (state=initialState.todo_items, action) => {
  let data, comments, todo_item, updatedItem
  switch(action.type) {
    case actionTypes.TODO_ITEM_INDEX_START:
    case checklistTypes.EVENT_CHECKLIST_INDEX_START:
      return {...state, loading: true }

    case actionTypes.TODO_ITEM_INDEX_COMPLETE:
      return {...state, ...action.payload, loading: false}

    case actionTypes.TODO_ITEM_INDEX_FAIL:
      return {...state, error: action.payload, loading: false }

    case checklistTypes.EVENT_CHECKLIST_INDEX_COMPLETE:
      return {...state, data: action.payload.todo_items, loading: false}

    case actionTypes.TODO_ITEM_UPDATE_COMPLETE:
      data = updateItemInCollection(state.data, action.payload)
      return {...state, data, loading: false}

    case actionTypes.TODO_ITEM_COMMENT_CREATE_COMPLETE:
    case actionTypes.TODO_ITEM_COMMENT_UPDATE_COMPLETE:
      todo_item = state.data.find(todo => todo.id == action.payload.trackable_id)

      updatedItem = {...todo_item, comments: action.payload}
      data = updateItemInCollection(state.data || [], updatedItem, true)
      return {...state, data, loading: false}

    default:
      return state;
  }
};

export default eventChecklistReducer