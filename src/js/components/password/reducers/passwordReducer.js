import initialState from './intialState';
import actionTypes from '../actions/types'

const passwordReducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.PASSWORD_FORGOT_START:
      return {...state, status: processing};
    case actionTypes.PASSWORD_FORGOT_COMPLETE:
      return {...state, ...action.payload };
    case actionTypes.PASSWORD_FORGOT_FAIL:
      return {...state, status: failed};
    default:
      return state;
  }
};

export default communityReducer