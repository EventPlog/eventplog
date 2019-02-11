import actionTypes from './types'

export const addQueryToStore = (query) => {
  return (dispatch) => dispatch({
    type: actionTypes.QUERY_UPDATE_COMPLETE,
    payload: query
  })
}
