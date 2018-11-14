import initialState from './intialState';
import actionTypes from '../actions/types'

const Auth = (state=initialState.user, action) => {
  switch(action.type) {
    case 'CONFIRM_START':
      return {...state, confirmedStatus: 'processing'};
    case 'CONFIRM_COMPLETE':
      return {...state, confirmedStatus: 'confirmed'};
    case 'CONFIRM_FAIL':
      return {...state, confirmedStatus: 'failed'}

    case actionTypes.USER_SHOW_COMPLETE:
      return action.payload

    default:
      return state;
  }
};

export default Auth