import initialState from './intialState';
import actionTypes from '../actions/types'

const Auth = (state=initialState.users, action) => {
  switch(action.type) {
    case actionTypes.USER_INDEX_COMPLETE:
      return action.payload

    case actionTypes.USER_SHOW_COMPLETE:
      return action.payload

    default:
      return state;
  }
};

export default Auth