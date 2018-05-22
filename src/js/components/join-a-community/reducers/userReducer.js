import initialState from './intialState';

const Auth = (state=initialState, action) => {
  switch(action.type) {
    case 'CONFIRM_START':
      return {...state, confirmedStatus: 'processing'};
    case 'CONFIRM_COMPLETE':
      return {...state, confirmedStatus: 'confirmed'};
    case 'CONFIRM_FAIL':
      return {...state, confirmedStatus: 'failed'}
    default:
      return state;
  }
};

export default Auth