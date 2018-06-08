import initialState from './intialState';
import actionTypes from '../actions/types'

const communityReducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.COMMUNITY_INDEX_START:
      return {...state, status: 'processing'};
    case actionTypes.COMMUNITY_INDEX_COMPLETE:
      return {...state, communities: action.payload };
    case actionTypes.COMMUNITY_INDEX_FAIL:
      return {...state, status: 'failed'};
    default:
      return state;
  }
};

export default communityReducer