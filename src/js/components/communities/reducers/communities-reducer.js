import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const communityReducer = (state=initialState.communities, action) => {
  let data
  switch(action.type) {
    case actionTypes.COMMUNITY_INDEX_START:
      return {...state, loading: true};

    case actionTypes.COMMUNITY_INDEX_COMPLETE:
      return {...state, ...action.payload, loading: false, error: false}

    case actionTypes.COMMUNITY_INDEX_FAIL:
      return {...state, loading: false, error: action.payload}

    case actionTypes.COMMUNITY_FOLLOW_CREATE_COMPLETE:
      data = updateItemInCollection(state.data, action.payload)
      return {...state, data, loading: false, error: false}

    default:
      return state;
  }
};

export default communityReducer