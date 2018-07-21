// import initialState from './intialState';
// import actionTypes from '../actions/types'
// import { updateItemInCollection } from 'js/reducers/helpers'
//
// const invitationReducer = (state=initialState.todo_items, action) => {
//   switch(action.type) {
//     case actionTypes.EVENT_CHECKLIST_TODO_ITEM_CREATE_START:
//     case actionTypes.EVENT_CHECKLIST_TODO_ITEM_SHOW_START:
//     case actionTypes.EVENT_CHECKLIST_TODO_ITEM_UPDATE_START:
//       return {loading: true}
//
//     case actionTypes.EVENT_CHECKLIST_TODO_ITEM_CREATE_COMPLETE:
//     case actionTypes.EVENT_CHECKLIST_TODO_ITEM_SHOW_COMPLETE:
//     case actionTypes.EVENT_CHECKLIST_TODO_ITEM_UPDATE_COMPLETE:
//       return {...action.payload}
//
//     case actionTypes.EVENT_CHECKLIST_TODO_ITEM_CREATE_FAIL:
//     case actionTypes.EVENT_CHECKLIST_TODO_ITEM_SHOW_FAIL:
//     case actionTypes.EVENT_CHECKLIST_TODO_ITEM_UPDATE_FAIL:
//       return {error: true}
//
//     default:
//       return state;
//   }
// };
//
// export default invitationReducer