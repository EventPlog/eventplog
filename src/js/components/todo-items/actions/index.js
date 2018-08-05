import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'

export const createTodoItem = (todo_item) => {
  let actions = baseActions({
    requestType: actionTypes.TODO_ITEM_CREATE_START,
    receiveType: actionTypes.TODO_ITEM_CREATE_COMPLETE,
    failType: actionTypes.TODO_ITEM_CREATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: todo_item,
    errorMessage: 'Something prevented create a new todo item. Please try again later or contact support.',
    caller: 'create todo item',
    route: `/api/v1/web/todo_items`,
    requestMethod: 'POST'
  })
}

export const updateTodoItem = (todo_item) => {
  let actions = baseActions({
    requestType: actionTypes.TODO_ITEM_UPDATE_START,
    receiveType: actionTypes.TODO_ITEM_UPDATE_COMPLETE,
    failType: actionTypes.TODO_ITEM_UPDATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: todo_item,
    errorMessage: 'Something prevented updating this todo item. Please try again later or contact support.',
    caller: 'update todo item',
    route: `/api/v1/web/todo_items/${todo_item.id}`,
    requestMethod: 'PATCH'
  })
}

export const deleteTodoItem = (todo_item) => {
  let actions = baseActions({
    requestType: actionTypes.TODO_ITEM_DELETE_START,
    receiveType: actionTypes.TODO_ITEM_DELETE_COMPLETE,
    failType: actionTypes.TODO_ITEM_DELETE_FAIL,
  })

  return handleApiCall({
    actions,
    data: todo_item,
    errorMessage: 'Something prevented updating this todo item. Please try again later or contact support.',
    caller: 'update todo item',
    route: `/api/v1/web/todo_items/${todo_item.id}`,
    requestMethod: 'PATCH'
  })
}

export const getTodoItems = (params) => {
  let actions = baseActions({
    requestType: actionTypes.TODO_ITEM_INDEX_START,
    receiveType: actionTypes.TODO_ITEM_INDEX_COMPLETE,
    failType: actionTypes.TODO_ITEM_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us retrieving the checklist for this event. Please try again later or contact support.',
    caller: 'get event checklist',
    route: `/api/v1/web/events/${params.event_id}/event_checklists/0`,
    requestMethod: 'GET'
  })
}

export const createComment = (comment, parentComment) => {
  let actions = baseActions({
    requestType: actionTypes.TODO_ITEM_COMMENT_CREATE_START,
    receiveType: actionTypes.TODO_ITEM_COMMENT_CREATE_COMPLETE,
    failType: actionTypes.TODO_ITEM_COMMENT_CREATE_FAIL
  })

  return handleApiCall({
    actions,
    data: comment,
    errorMessage: 'Something prevented us from creating a comment.',
    caller: 'POST createComment',
    route: `/api/v1/web/comments`,
    requestMethod: 'POST'
  })
}

export const updateComment = (comment, parentComment) => {
  let actions = baseActions({
    requestType: actionTypes.TODO_ITEM_COMMENT_UPDATE_START,
    receiveType: actionTypes.TODO_ITEM_COMMENT_UPDATE_COMPLETE,
    failType: actionTypes.TODO_ITEM_COMMENT_UPDATE_FAIL
  })

  return handleApiCall({
    actions,
    data: comment,
    errorMessage: 'Something prevented us from updating a comment.',
    caller: 'PATCH updateComment',
    route: `/api/v1/web/comments/${comment.id}`,
    requestMethod: 'PATCH'
  })
}
