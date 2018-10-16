import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'
import Auth from 'js/auth'

export const confirmEmail = (data) => {
  let actions = baseActions({
    requestType: actionTypes.CONFIRM_START,
    receiveType: actionTypes.CONFIRM_COMPLETE,
    failType: actionTypes.CONFIRM_FAIL,
  })

  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented confirming this email address',
    caller: 'confirm email',
    route: `/api/v1/web/users/confirm`,
    requestMethod: 'POST'
  })
}

export const getUser = (data) => {
  let actions = baseActions({
    requestType: actionTypes.USER_SHOW_START,
    receiveType: actionTypes.USER_SHOW_COMPLETE,
    failType: actionTypes.USER_SHOW_FAIL,
  })

  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented fetching this user',
    caller: 'get user',
    route: `/api/v1/web/users/${data.user_id}`,
    requestMethod: 'GET'
  })
}

export const updateUser = (user) => {
  let actions = baseActions({
    requestType: actionTypes.USER_UPDATE_START,
    receiveType: actionTypes.USER_UPDATE_COMPLETE,
    failType: actionTypes.USER_UPDATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: {user},
    errorMessage: 'Something prevented us from updating this user',
    caller: 'update user',
    route: `/api/v1/web/users/${user.id}`,
    requestMethod: 'PATCH'
  })
}

