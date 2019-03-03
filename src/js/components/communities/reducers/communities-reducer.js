import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const communityReducer = (state=initialState.communities, action) => {
  let data = []
  switch(action.type) {
    case actionTypes.COMMUNITY_INDEX_START:
      data = action.payload.data && action.payload.data.page == 1
        ? []
        : state.data
      return {...state, data, loading: true};

    case actionTypes.COMMUNITY_INDEX_COMPLETE:
      data = action.payload.meta && action.payload.meta.current_page == 1
        ? action.payload.data
        : [...state.data, ...action.payload.data]
      return {...state, ...action.payload, data, loading: false, error: false}

    case actionTypes.COMMUNITY_INDEX_FAIL:
      return {...state, loading: false, error: action.payload}

    case actionTypes.COMMUNITY_CREATE_COMPLETE:
      data = [...state.data, action.payload]
      return { ...state, data, loading: false }

    case actionTypes.COMMUNITY_FOLLOW_CREATE_COMPLETE:
      data = updateItemInCollection(state.data, action.payload, true)
      return {...state, data, loading: false, error: false}

    default:
      return state;
  }
};

export default communityReducer