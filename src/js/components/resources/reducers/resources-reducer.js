import initialState from './intialState';
import actionTypes from '../actions/types'
import { updateItemInCollection } from 'js/reducers/helpers'

const resourcesReducer = (state=initialState.resources, action) => {
  let data;
  switch(action.type) {
    case actionTypes.RESOURCE_INDEX_START:
      return {...state, loading: true }

    case actionTypes.RESOURCE_INDEX_COMPLETE:
      return {...state, ...action.payload, loading: false, error: false}

    case actionTypes.RESOURCE_INDEX_FAIL:
      return {...state, error: action.payload, loading: false }

    case actionTypes.RESOURCE_CREATE_COMPLETE:
    case actionTypes.RESOURCE_UPDATE_COMPLETE:
      data = updateItemInCollection(state.data, action.payload, true)
      return {...state, data, loading: false, error: false}

    case actionTypes.RESOURCE_DELETE_COMPLETE:
      data = state.data.filter(resource => resource.id != action.payload.id)
      return {...state, data, loading: false, error: false}

    default:
      return state;
  }
};

export default resourcesReducer