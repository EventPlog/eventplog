import initialState from './intialState';
import actionTypes from '../actions/types'

const Auth = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.RECEIVE_LEAD_START:
    case actionTypes.RECEIVE_LEAD_UPDATE:
      return {...state, ...action.payload};

    default:
      return state;
  }
};

export default Auth