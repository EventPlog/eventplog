import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'
import mockEventApi from 'js/mock-api/event-api'

export const getEvent = (eventId) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_SHOW_START,
    receiveType: actionTypes.EVENT_SHOW_COMPLETE,
    failType: actionTypes.EVENT_SHOW_FAIL,
  });

  return handleApiCall({
    actions,
    eventId,
    errorMessage: 'Something prevented us from retrieving an event',
    caller: 'leads',
    route: `/api/v1/web/events/${eventId}`,
    requestMethod: 'GET'
  });
}

export const mockGetEvent = (eventId) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.EVENT_SHOW_START })

    return mockEventApi.show(eventId).then(res => {
      dispatch({type: actionTypes.EVENT_SHOW_COMPLETE, payload: res})
      return res
    })
  }
}

export const createEvent = (eventParams) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_CREATE_START,
    receiveType: actionTypes.EVENT_CREATE_COMPLETE,
    failType: actionTypes.EVENT_CREATE_FAIL
  })

  return handleApiCall({
    actions,
    data: eventParams,
    errorMessage: 'Something prevented creating an event',
    caller: 'create event',
    route: `/api/v1/web/events`,
    requestMethod: 'POST'
  })
}

export const updateEvent = (eventParams) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_UPDATE_START,
    receiveType: actionTypes.EVENT_UPDATE_COMPLETE,
    failType: actionTypes.EVENT_UPDATE_FAIL
  })

  return handleApiCall({
    actions,
    data: eventParams,
    errorMessage: 'Something prevented updating an event',
    caller: 'update event',
    route: `/api/v1/web/events/${eventParams.id}`,
    requestMethod: 'PATCH'
  })
}

export const mockCreateEvent = (event) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.EVENT_CREATE_START })

    return mockEventApi.create(event).then(res => {
      dispatch({type: actionTypes.EVENT_CREATE_COMPLETE, payload: res})
      return res
    })
  }
}

export const getEvents = (eventParams = {}) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_INDEX_START,
    receiveType: actionTypes.EVENT_INDEX_COMPLETE,
    failType: actionTypes.EVENT_INDEX_FAIL,
  })

  const { community_id } = eventParams
  const communityDetails = community_id ? `/communities/${community_id}` : ''
  return handleApiCall({
    actions,
    data: eventParams,
    errorMessage: 'Something prevented getting an event.',
    caller: 'get events',
    route: `/api/v1/web${communityDetails}/events`,
    requestMethod: 'GET'
  })
}


export const getEventsSuggestions = (eventParams = {}, limit = 2) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_SUGGESTIONS_INDEX_START,
    receiveType: actionTypes.EVENT_SUGGESTIONS_INDEX_COMPLETE,
    failType: actionTypes.EVENT_SUGGESTIONS_INDEX_FAIL,
  })

  const { community_id } = eventParams
  const communityDetails = community_id ? `/communities/${community_id}` : ''
  return handleApiCall({
    actions,
    data: eventParams,
    errorMessage: 'Something prevented us getting event suggestions.',
    caller: 'get events',
    route: `/api/v1/web${communityDetails}/events/suggestions?limit=${limit}`,
    requestMethod: 'GET'
  })
}

export const attendEvent = (event) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_ATTEND_CREATE_START,
    receiveType: actionTypes.EVENT_ATTEND_CREATE_COMPLETE,
    failType: actionTypes.EVENT_ATTEND_CREATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: event,
    errorMessage: 'Something prevented us getting event suggestions.',
    caller: 'get event interest',
    route: `/api/v1/web/events/${event.id}/user_events`,
    requestMethod: 'POST'
  })
}

export const createComment = (comment, parentComment) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_COMMENT_UPDATE_START,
    receiveType: actionTypes.EVENT_COMMENT_UPDATE_COMPLETE,
    failType: actionTypes.EVENT_COMMENT_UPDATE_FAIL
  })

  return handleApiCall({
    actions,
    data: comment,
    errorMessage: 'Something prevented us from creating a comment.',
    caller: 'POST createComment',
    route: `/api/v1/web/comments`,
    requestMethod: 'POST'
  })
}

export const updateComment = (comment, parentComment) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_COMMENT_UPDATE_START,
    receiveType: actionTypes.EVENT_COMMENT_UPDATE_COMPLETE,
    failType: actionTypes.EVENT_COMMENT_UPDATE_FAIL
  })

  return handleApiCall({
    actions,
    data: comment,
    errorMessage: 'Something prevented us from creating a comment.',
    caller: 'PATCH updateComment',
    route: `/api/v1/web/comments/${comment.id}`,
    requestMethod: 'PATCH'
  })
}

export const mockGetEvents = (eventId) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.EVENT_INDEX_START })

    return mockEventApi.index().then(res => {
      dispatch({type: actionTypes.EVENT_INDEX_COMPLETE, payload: res})
      return res
    })
  }
}
