import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const invitationReducer = (state=initialState.todo_item, action) => {
  let comments
  switch(action.type) {
    case actionTypes.TODO_ITEM_CREATE_START:
    case actionTypes.TODO_ITEM_SHOW_START:
    case actionTypes.TODO_ITEM_UPDATE_START:
      return {...state, loading: true}

    case actionTypes.TODO_ITEM_CREATE_COMPLETE:
    case actionTypes.TODO_ITEM_SHOW_COMPLETE:
    case actionTypes.TODO_ITEM_UPDATE_COMPLETE:
      return {...state, ...action.payload, loading: false}

    case actionTypes.TODO_ITEM_CREATE_FAIL:
    case actionTypes.TODO_ITEM_SHOW_FAIL:
    case actionTypes.TODO_ITEM_UPDATE_FAIL:
      return {...state, error: true}

    case actionTypes.TODO_ITEM_COMMENT_CREATE_COMPLETE:
      comments = [...state.comments, action.payload]
      return {...state, comments}

    case actionTypes.TODO_ITEM_COMMENT_UPDATE_COMPLETE:
      comments = updateItemInCollection(state.comments || [], action.payload)
      return {...state, comments}

    default:
      return state;
  }
};

export default invitationReducer