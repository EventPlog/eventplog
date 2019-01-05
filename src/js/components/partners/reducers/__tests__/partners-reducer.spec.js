import { shallow } from 'enzyme';
import rootPartnersReducer from '../index'
import partnerReducer from '../partner-reducer';
import actionTypes from 'js/components/partners/actions/types'
import partnersReducer from '../partners-reducer';
import initialState from '../intialState'

describe('partnersReducer', () => {
  it('returns the initial state by default', () => {
    expect(partnersReducer(undefined, {type: '__INIT__'})).toEqual(initialState.partners)
  })

  describe(`when a ${actionTypes.PARTNER_INDEX_START} type is passed in`, () => {
    it('returns the state with loading set to true', () => {
      const action = {
        type: actionTypes.PARTNER_INDEX_START
      }
      const result = partnersReducer(initialState.partners, action)
      expect(result.loading).toEqual(true)
    })
  })

  describe(`when a ${actionTypes.PARTNER_INDEX_COMPLETE} type is passed in`, () => {
    const partners = {data: [{id: 1}, {id: 2}]}
    const action = {
      type: actionTypes.PARTNER_INDEX_COMPLETE,
      payload: partners
    }
    const result = partnersReducer(initialState.partners, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('appends the payload to the returned state', () => {
      expect(result.data).toEqual(action.payload.data)
    })
  })

  describe(`when a ${actionTypes.PARTNER_INDEX_FAIL} type is passed in`, () => {
    const action = {
      type: actionTypes.PARTNER_INDEX_FAIL,
      payload: 'Invalid partner email'
    }
    const result = partnersReducer(initialState.partners, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('adds the error to the state', () => {
      expect(result.error).toEqual(action.payload)
    })
  })

  describe(`when a ${actionTypes.PARTNER_CREATE_COMPLETE} type is passed in`, () => {
    const state = {data: [{id: 1}, {id: 2}]}
    const newPartner = {id: 3, title: 'New horizon'}
    const action = {
      type: actionTypes.PARTNER_CREATE_COMPLETE,
      payload: newPartner
    }
    const result = partnersReducer(state, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('adds the newly created partner to the state', () => {
      expect(result.data.length).toEqual(state.data.length + 1)
      expect(result.data.find(s => s.id == newPartner.id)).toEqual(newPartner)
    })
  })

  describe(`when a ${actionTypes.PARTNER_DELETE_COMPLETE} type is passed in`, () => {
    const state = {data: [{id: 1}, {id: 2}]}
    const action = {
      type: actionTypes.PARTNER_DELETE_COMPLETE,
      payload: state.data[1]
    }
    const result = partnersReducer(state, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('removes the deleted partner from the state', () => {
      expect(result.data.length).toEqual(state.data.length - 1)
      expect(result.data.find(s => s.id == state.data[1].id)).toEqual(undefined)
    })
  })

})
