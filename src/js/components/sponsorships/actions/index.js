import actionTypes from './types'
import { handleApiCall, baseActions } from '../../../services/actionHelpers'

export const getSponsors = (params) => {
  let actions = baseActions({
    requestType: actionTypes.SPONSORSHIP_INDEX_START,
    receiveType: actionTypes.SPONSORSHIP_INDEX_COMPLETE,
    failType: actionTypes.SPONSORSHIP_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving sponsors.',
    caller: 'get sponsors',
    route: `/api/v1/web/sponsors/index_by_params`,
    requestMethod: 'POST'
  })
}

export const getSponsorsByVerb = (params) => {
  let actions = baseActions({
    requestType: actionTypes.SPONSORSHIP_INDEX_START,
    receiveType: actionTypes.SPONSORSHIP_INDEX_COMPLETE,
    failType: actionTypes.SPONSORSHIP_INDEX_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving sponsors.',
    caller: 'get sponsors',
    route: `/api/v1/web/sponsors/by_verb`,
    requestMethod: 'POST'
  })
}

export const getSponsorship = (sponsorId) => {
  let actions = baseActions({
    requestType: actionTypes.SPONSORSHIP_SHOW_START,
    receiveType: actionTypes.SPONSORSHIP_SHOW_COMPLETE,
    failType: actionTypes.SPONSORSHIP_SHOW_FAIL,
  })

  return handleApiCall({
    actions,
    data: sponsorId,
    errorMessage: 'Something prevented us from retrieving this sponsor.',
    caller: 'get sponsors',
    route: `/api/v1/web/sponsors/${sponsorId}`,
    requestMethod: 'GET'
  })
}

export const createSponsorship = (params) => {
  let actions = baseActions({
    requestType: actionTypes.SPONSORSHIP_CREATE_START,
    receiveType: actionTypes.SPONSORSHIP_CREATE_COMPLETE,
    failType: actionTypes.SPONSORSHIP_CREATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from creating this sponsorship. Please try again later or contact support.',
    caller: 'create sponsorship',
    route: `/api/v1/web/sponsorships`,
    requestMethod: 'POST'
  })
}

export const updateSponsorship = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.SPONSORSHIP_UPDATE_START,
    receiveType: actionTypes.SPONSORSHIP_UPDATE_COMPLETE,
    failType: actionTypes.SPONSORSHIP_UPDATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from updating this sponsorship. Please try again later or contact support.',
    caller: 'update sponsorship',
    route: `/api/v1/web/sponsorships/${params.id}`,
    requestMethod: 'PATCH'
  })
}

export const deleteSponsorship = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.SPONSORSHIP_DELETE_START,
    receiveType: actionTypes.SPONSORSHIP_DELETE_COMPLETE,
    failType: actionTypes.SPONSORSHIP_DELETE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving this sponsor. Please try again later or contact support.',
    caller: 'get sponsors',
    route: `/api/v1/web/sponsorships/${params.id}`,
    requestMethod: 'PATCH'
  })
}

export const updateViewCount = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.SPONSORSHIP_UPDATE_START,
    receiveType: actionTypes.SPONSORSHIP_UPDATE_COMPLETE,
    failType: actionTypes.SPONSORSHIP_UPDATE_FAIL,
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

export const getSponsorshipOffer = (params) => {
  let actions = baseActions({
    requestType: actionTypes.SPONSORSHIP_OFFER_SHOW_START,
    receiveType: actionTypes.SPONSORSHIP_OFFER_SHOW_COMPLETE,
    failType: actionTypes.SPONSORSHIP_OFFER_SHOW_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving this sponsorship offer.',
    caller: 'get sponsors',
    route: `/api/v1/web/sponsorship_offers/0`,
    requestMethod: 'GET'
  })
}

export const updateSponsorshipOffer = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.SPONSORSHIP_OFFER_UPDATE_START,
    receiveType: actionTypes.SPONSORSHIP_OFFER_UPDATE_COMPLETE,
    failType: actionTypes.SPONSORSHIP_OFFER_UPDATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from updating this sponsorship offer. Please try again later or contact support.',
    caller: 'update sponsorship',
    route: `/api/v1/web/sponsorship_offers/${params.id}`,
    requestMethod: 'PATCH'
  })
}

export const getSponsorshipOfferItems = (params) => {
  let actions = baseActions({
    requestType: actionTypes.SPONSORSHIP_OFFER_ITEM_SHOW_START,
    receiveType: actionTypes.SPONSORSHIP_OFFER_ITEM_SHOW_COMPLETE,
    failType: actionTypes.SPONSORSHIP_OFFER_ITEM_SHOW_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving this sponsor.',
    caller: 'get sponsors',
    route: `/api/v1/web/sponsorship_offer_items`,
    requestMethod: 'GET'
  })
}

export const getSponsorshipOfferItem = (sponsorId) => {
  let actions = baseActions({
    requestType: actionTypes.SPONSORSHIP_OFFER_ITEM_SHOW_START,
    receiveType: actionTypes.SPONSORSHIP_OFFER_ITEM_SHOW_COMPLETE,
    failType: actionTypes.SPONSORSHIP_OFFER_ITEM_SHOW_FAIL,
  })

  return handleApiCall({
    actions,
    data: sponsorId,
    errorMessage: 'Something prevented us from retrieving this sponsor.',
    caller: 'get sponsors',
    route: `/api/v1/web/sponsorship_offer_items/${sponsorId}`,
    requestMethod: 'GET'
  })
}

export const createSponsorshipOfferItem = (params) => {
  let actions = baseActions({
    requestType: actionTypes.SPONSORSHIP_OFFER_ITEM_CREATE_START,
    receiveType: actionTypes.SPONSORSHIP_OFFER_ITEM_CREATE_COMPLETE,
    failType: actionTypes.SPONSORSHIP_OFFER_ITEM_CREATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from creating this sponsor. Please try again later or contact support.',
    caller: 'create sponsor',
    route: `/api/v1/web/sponsorship_offer_items`,
    requestMethod: 'POST'
  })
}

export const updateSponsorshipOfferItem = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.SPONSORSHIP_OFFER_ITEM_UPDATE_START,
    receiveType: actionTypes.SPONSORSHIP_OFFER_ITEM_UPDATE_COMPLETE,
    failType: actionTypes.SPONSORSHIP_OFFER_ITEM_UPDATE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from updating this sponsor. Please try again later or contact support.',
    caller: 'update sponsorship offer item',
    route: `/api/v1/web/sponsorship_offer_items/${params.sponsorship_offer_item.id}`,
    requestMethod: 'PATCH'
  })
}

export const deleteSponsorshipOfferItem = (params = {}) => {
  let actions = baseActions({
    requestType: actionTypes.SPONSORSHIP_OFFER_ITEM_DELETE_START,
    receiveType: actionTypes.SPONSORSHIP_OFFER_ITEM_DELETE_COMPLETE,
    failType: actionTypes.SPONSORSHIP_OFFER_ITEM_DELETE_FAIL,
  })

  return handleApiCall({
    actions,
    data: params,
    errorMessage: 'Something prevented us from retrieving this sponsor. Please try again later or contact support.',
    caller: 'delete sponsorship offer item',
    route: `/api/v1/web/sponsorship_offer_items/${params.id}`,
    requestMethod: 'PATCH'
  })
}
