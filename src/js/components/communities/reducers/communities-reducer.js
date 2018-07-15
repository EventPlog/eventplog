import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const communityReducer = (state=initialState.communities, action) => {
  switch(action.type) {
    case actionTypes.COMMUNITY_INDEX_START:
      return {loading: true};

    case actionTypes.COMMUNITY_INDEX_COMPLETE:
      return action.payload

    case actionTypes.COMMUNITY_INDEX_FAIL:
      return {loading: false, error: action.payload}

    case actionTypes.COMMUNITY_FOLLOW_CREATE_COMPLETE:
      return updateItemInCollection(state, action.payload)

    default:
      return state;
  }
};

export default communityReducer