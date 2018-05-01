import initialState from './intialState';

const Auth = (state=initialState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return state;

    default:
      return state;
  }
};

export default Auth