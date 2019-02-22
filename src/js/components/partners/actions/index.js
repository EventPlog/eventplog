import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'

export const getPartners = (params) => {
  let actions = baseActions({
    requestType: actionTypes.PARTNER_INDEX_START,
    receiveType: actionTypes.PARTNER_INDEX_COMPLETE,
    failType: actionTypes.PARTNER_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving partners.',
    caller: 'get partners',
    route: `/api/v1/web/partners/index_by_params`,
    requestMethod: 'POST'
  })
}

export const getPartnersByName = (params) => {
  let actions = baseActions({
    requestType: actionTypes.PARTNER_INDEX_START,
    receiveType: actionTypes.PARTNER_INDEX_COMPLETE,
    failType: actionTypes.PARTNER_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving partners.',
    caller: 'get partners',
    route: `/api/v1/web/partners/search_by_name`,
    requestMethod: 'POST'
  })
}

export const getPartnersByVerb = (params) => {
  let actions = baseActions({
    requestType: actionTypes.PARTNER_INDEX_START,
    receiveType: actionTypes.PARTNER_INDEX_COMPLETE,
    failType: actionTypes.PARTNER_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving partners.',
    caller: 'get partners',
    route: `/api/v1/web/partners/by_verb`,
    requestMethod: 'POST'
  })
}

export const getPartner = (partnerId) => {
  let actions = baseActions({
    requestType: actionTypes.PARTNER_SHOW_START,
    receiveType: actionTypes.PARTNER_SHOW_COMPLETE,
    failType: actionTypes.PARTNER_SHOW_FAIL,
  })

  return handleApiCall({
    actions,
    data: partnerId,
    errorMessage: 'Something prevented us from retrieving this partner.',
    caller: 'get partners',
    route: `/api/v1/web/partners/${partnerId}`,
    requestMethod: 'GET'
  })
}

export const createPartner = (params) => {
  let actions = baseActions({
    requestType: actionTypes.PARTNER_CREATE_START,
    receiveType: actionTypes.PARTNER_CREATE_COMPLETE,
    failType: actionTypes.PARTNER_CREATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from creating this partner. Please try again later or contact support.',
    caller: 'create partner',
    route: `/api/v1/web/partners`,
    requestMethod: 'POST'
  })
}

export const updatePartner = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.PARTNER_UPDATE_START,
    receiveType: actionTypes.PARTNER_UPDATE_COMPLETE,
    failType: actionTypes.PARTNER_UPDATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from updating this partner. Please try again later or contact support.',
    caller: 'updatew partner',
    route: `/api/v1/web/partners/${params.partner.id}`,
    requestMethod: 'PATCH'
  })
}

export const deletePartner = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.PARTNER_DELETE_START,
    receiveType: actionTypes.PARTNER_DELETE_COMPLETE,
    failType: actionTypes.PARTNER_DELETE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving this partner. Please try again later or contact support.',
    caller: 'get partners',
    route: `/api/v1/web/partners/${params.id}`,
    requestMethod: 'PATCH'
  })
}

export const getPartnerLead = (partnerLeadId) => {
  let actions = baseActions({
    requestType: actionTypes.PARTNER_SHOW_START,
    receiveType: actionTypes.PARTNER_SHOW_COMPLETE,
    failType: actionTypes.PARTNER_SHOW_FAIL,
  })

  return handleApiCall({
    actions,
    data: partnerLeadId,
    errorMessage: 'Something prevented us from retrieving this partner.',
    caller: 'get partners',
    route: `/api/v1/web/partner_leads/${partnerLeadId}`,
    requestMethod: 'GET'
  })
}

export const createPartnerLead = (params) => {
  let actions = baseActions({
    requestType: actionTypes.PARTNER_CREATE_START,
    receiveType: actionTypes.PARTNER_CREATE_COMPLETE,
    failType: actionTypes.PARTNER_CREATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from creating this partner. Please try again later or contact support.',
    caller: 'create partner',
    route: `/api/v1/web/partner_leads`,
    requestMethod: 'POST'
  })
}

export const updatePartnerLead = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.PARTNER_UPDATE_START,
    receiveType: actionTypes.PARTNER_UPDATE_COMPLETE,
    failType: actionTypes.PARTNER_UPDATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from updating this partner. Please try again later or contact support.',
    caller: 'updatew partner',
    route: `/api/v1/web/partner_leads/${params.partner_lead.id}`,
    requestMethod: 'PATCH'
  })
}
export const updateViewCount = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.PARTNER_UPDATE_START,
    receiveType: actionTypes.PARTNER_UPDATE_COMPLETE,
    failType: actionTypes.PARTNER_UPDATE_FAIL,
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
