import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'

export const getEvent = (eventId, slug) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_SHOW_START,
    receiveType: actionTypes.EVENT_SHOW_COMPLETE,
    failType: actionTypes.EVENT_SHOW_FAIL,
  });

  return handleApiCall({
    actions,
    data: {eventId, slug},
    errorMessage: 'Something prevented us from retrieving this event. Please try again later.',
    caller: 'leads',
    route: `/api/v1/web/events/${eventId}`,
    requestMethod: 'GET'
  });
}

export const getPastEvents = (params) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_PAST_INDEX_START,
    receiveType: actionTypes.EVENT_PAST_INDEX_COMPLETE,
    failType: actionTypes.EVENT_PAST_INDEX_FAIL,
  });

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving past events.',
    caller: 'leads',
    route: `/api/v1/web/communities/${params.community_id}/events/past`,
    requestMethod: 'GET'
  });
}

export const checkForValidSlug = (slug) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_SLUG_VERIFY_START,
    receiveType: actionTypes.EVENT_SLUG_VERIFY_COMPLETE,
    failType: actionTypes.EVENT_SLUG_VERIFY_FAIL,
  })

  return handleApiCall({
    actions,
    data: {slug},
    errorMessage: 'Something prevented us from verifying this slug.',
    caller: 'verify slug',
    route: `/api/v1/web/events/verify_slug/${slug}`,
    requestMethod: 'GET'
  })
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
    route: `/api/v1/web/events`,
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
    data: {...eventParams, limit},
    errorMessage: 'Something prevented us getting event suggestions.',
    caller: 'get events',
    route: `/api/v1/web${communityDetails}/events/suggestions`,
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
    errorMessage: 'Something prevented us from registering your interest for this event.',
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
    data: {comment},
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
    data: {comment},
    errorMessage: 'Something prevented us from creating a comment.',
    caller: 'PATCH updateComment',
    route: `/api/v1/web/comments/${comment.id}`,
    requestMethod: 'PATCH'
  })
}

export const getComments = (params) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_COMMENT_INDEX_START,
    receiveType: actionTypes.EVENT_COMMENT_INDEX_COMPLETE,
    failType: actionTypes.EVENT_COMMENT_INDEX_FAIL
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving comments.',
    caller: 'POST index Comments',
    route: `/api/v1/web/comments/index_by_params`,
    requestMethod: 'POST'
  })
}

export const getAnnouncements = (params) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_ANNOUNCEMENT_INDEX_START,
    receiveType: actionTypes.EVENT_ANNOUNCEMENT_INDEX_COMPLETE,
    failType: actionTypes.EVENT_ANNOUNCEMENT_INDEX_FAIL
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving announcemnts.',
    caller: 'POST index announcements',
    route: `/api/v1/web/announcements`,
    requestMethod: 'GET'
  })
}

export const createAnnouncement = (announcement) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_ANNOUNCEMENT_UPDATE_START,
    receiveType: actionTypes.EVENT_ANNOUNCEMENT_UPDATE_COMPLETE,
    failType: actionTypes.EVENT_ANNOUNCEMENT_UPDATE_FAIL
  })

  return handleApiCall({
    actions,
    data: announcement,
    errorMessage: 'Something prevented us from creating an announcement.',
    caller: 'POST createAnnouncement',
    route: `/api/v1/web/announcements`,
    requestMethod: 'POST'
  })
}

export const updateAnnouncement = (announcement) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_ANNOUNCEMENT_UPDATE_START,
    receiveType: actionTypes.EVENT_ANNOUNCEMENT_UPDATE_COMPLETE,
    failType: actionTypes.EVENT_ANNOUNCEMENT_UPDATE_FAIL
  })

  return handleApiCall({
    actions,
    data: announcement,
    errorMessage: 'Something prevented us from creating a comment.',
    caller: 'PATCH updateAnnouncement',
    route: `/api/v1/web/announcements/${announcement.id}`,
    requestMethod: 'PATCH'
  })
}

export const updateViewCount = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.EVENT_VIEWS_UPDATE_START,
    receiveType: actionTypes.EVENT_VIEWS_UPDATE_COMPLETE,
    failType: actionTypes.EVENT_VIEWS_UPDATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from updating a view count. Please try again later or contact support.',
    caller: 'update view count',
    route: `/api/v1/web/views`,
    requestMethod: 'POST'
  })
}
