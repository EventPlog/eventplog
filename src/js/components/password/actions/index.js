import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'
import { mockForgotPasswordApi } from '../mockApi'

export const mockSubmitEmail = (data) => dispatch =>
  mockForgotPasswordApi().then(res => {
    dispatch({type: actionTypes.PASSWORD_FORGOT_COMPLETE, payload: res})
  })

export const mockResetPassword = () => dispatch =>
  mockResetPasswordApi().then(res => {
    dispatch({type: actionTypes.PASSWORD_RESET_COMPLETE, payload: res})
  })

export const submitEmail = (data) => {
  let actions = baseActions({
    requestType: actionTypes.PASSWORD_FORGOT_COMPLETE,
    receiveType: actionTypes.PASSWORD_FORGOT_COMPLETE,
    failType: actionTypes.PASSWORD_FORGOT_FAIL,
  })

  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented us from resetting your password',
    caller: 'submitEmail',
    route: `/api/v1/web/password/forgot`,
    requestMethod: 'GET'
  })
}

