import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'

export const getQuestions = (params) => {
  let actions = baseActions({
    requestType: actionTypes.QUESTION_INDEX_START,
    receiveType: actionTypes.QUESTION_INDEX_COMPLETE,
    failType: actionTypes.QUESTION_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: {question: params},
    errorMessage: 'Something prevented us from retrieving questions',
    caller: 'get questions',
    route: `/api/v1/web/questions/index_by_params`,
    requestMethod: 'POST'
  })
}

export const createQuestion = (question) => {
  let actions = baseActions({
    requestType: actionTypes.QUESTION_CREATE_START,
    receiveType: actionTypes.QUESTION_CREATE_COMPLETE,
    failType: actionTypes.QUESTION_CREATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: { question },
    errorMessage: 'Something prevented creating this field',
    caller: 'get questions',
    route: `/api/v1/web/questions`,
    requestMethod: 'POST'
  })
}

export const updateQuestion = (question) => {
  let actions = baseActions({
    requestType: actionTypes.QUESTION_UPDATE_START,
    receiveType: actionTypes.QUESTION_UPDATE_COMPLETE,
    failType: actionTypes.QUESTION_UPDATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: { question },
    errorMessage: 'Something prevented updating this field',
    caller: 'update questions',
    route: `/api/v1/web/questions/${question.id}`,
    requestMethod: 'PATCH'
  })
}

export const deleteQuestion = (question) => {
  let actions = baseActions({
    requestType: actionTypes.QUESTION_DELETE_START,
    receiveType: actionTypes.QUESTION_DELETE_COMPLETE,
    failType: actionTypes.QUESTION_DELETE_FAIL,
  })

  return handleApiCall({
    actions,
    data: { question },
    errorMessage: 'Something prevented deleting this field',
    caller: 'delete questions',
    route: `/api/v1/web/questions/${question.id}`,
    requestMethod: 'DELETE'
  })
}

export const batchUpdateQuestions = (params) => {
  let actions = baseActions({
    requestType: actionTypes.QUESTION_INDEX_START,
    receiveType: actionTypes.QUESTION_INDEX_COMPLETE,
    failType: actionTypes.QUESTION_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented updating the questions order',
    caller: 'get questions',
    route: `/api/v1/web/questions/update_all`,
    requestMethod: 'PATCH'
  })
}

