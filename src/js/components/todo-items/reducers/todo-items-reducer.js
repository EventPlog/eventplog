import initialState from './intialState';
import actionTypes from '../actions/types'
import checklistTypes from 'js/components/event-planning/actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const eventChecklistReducer = (state=initialState.todo_items, action) => {
  let data, comments, todo_item, updatedItem, comments_data
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

    case actionTypes.TODO_ITEM_CREATE_COMPLETE:
    case actionTypes.TODO_ITEM_UPDATE_COMPLETE:
      data = updateItemInCollection(state.data, action.payload, true)
      return {...state, data, loading: false}

    case actionTypes.TODO_ITEM_DELETE_COMPLETE:
      data = state.data.filter(item => item.id != action.payload.id)
      return {...state, data, loading: false}

    case actionTypes.TODO_ITEM_COMMENT_CREATE_COMPLETE:
    case actionTypes.TODO_ITEM_COMMENT_UPDATE_COMPLETE:
      todo_item = state.data.find(todo => todo.id == action.payload.recipient_id)

      updatedItem = {...todo_item, comments: action.payload}
      data = updateItemInCollection(state.data || [], updatedItem, true)
      return {...state, data, loading: false}

    case actionTypes.TODO_ITEM_COMMENT_INDEX_COMPLETE:
      // find the to_do item that owns the comments to be updated
      todo_item = state.data.find(todo => todo.id == action.payload.recipient_id)

      // update its comments data
      comments_data = [...todo_item.comments.data, ...action.payload.data]
      updatedItem = {...todo_item, comments: {data: comments_data, meta: action.payload.meta}}
      data = updateItemInCollection(state.data || [], updatedItem, true)
      return {...state, data, loading: false}

    default:
      return state;
  }
};

export default eventChecklistReducer