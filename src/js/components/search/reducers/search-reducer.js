import initialState from './intialState';
import actionTypes from '../actions/types'

const searchContainer = (state=initialState.query, action) => {
  switch(action.type) {
    case actionTypes.QUERY_UPDATE_COMPLETE:
      return {...action.payload}

    default:
      return state;
  }
};

export default searchContainer