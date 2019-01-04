import { shallow } from 'enzyme';
import rootPresentationsReducer from '../index'
import sponsorshipReducer from '../sponsorship-reducer';
import actionTypes from 'js/components/sponsorships/actions/types'
import sponsorshipsReducer from '../sponsorships-reducer';
import initialState from '../intialState'

describe('sponsorshipsReducer', () => {
  it('returns the initial state by default', () => {
    expect(sponsorshipsReducer(undefined, {type: '__INIT__'})).toEqual(initialState.sponsorships)
  })

  describe(`when a ${actionTypes.SPONSORSHIP_INDEX_START} type is passed in`, () => {
    it('returns the state with loading set to true', () => {
      const action = {
        type: actionTypes.SPONSORSHIP_INDEX_START
      }
      const result = sponsorshipsReducer(initialState.sponsorships, action)
      expect(result.loading).toEqual(true)
    })
  })

  describe(`when a ${actionTypes.SPONSORSHIP_INDEX_COMPLETE} type is passed in`, () => {
    const sponsorships = {data: [{id: 1}, {id: 2}]}
    const action = {
      type: actionTypes.SPONSORSHIP_INDEX_COMPLETE,
      payload: sponsorships
    }
    const result = sponsorshipsReducer(initialState.sponsorships, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('appends the payload to the returned state', () => {
      expect(result.data).toEqual(action.payload.data)
    })
  })

  describe(`when a ${actionTypes.SPONSORSHIP_INDEX_FAIL} type is passed in`, () => {
    const action = {
      type: actionTypes.SPONSORSHIP_INDEX_FAIL,
      payload: 'Invalid sponsorship email'
    }
    const result = sponsorshipsReducer(initialState.sponsorships, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('adds the error to the state', () => {
      expect(result.error).toEqual(action.payload)
    })
  })

  describe(`when a ${actionTypes.SPONSORSHIP_CREATE_COMPLETE} type is passed in`, () => {
    const state = {data: [{id: 1}, {id: 2}]}
    const newPresentation = {id: 3, title: 'New horizon'}
    const action = {
      type: actionTypes.SPONSORSHIP_CREATE_COMPLETE,
      payload: newPresentation
    }
    const result = sponsorshipsReducer(state, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('adds the newly created sponsorship to the state', () => {
      expect(result.data.length).toEqual(state.data.length + 1)
      expect(result.data.find(s => s.id == newPresentation.id)).toEqual(newPresentation)
    })
  })

  describe(`when a ${actionTypes.SPONSORSHIP_DELETE_COMPLETE} type is passed in`, () => {
    const state = {data: [{id: 1}, {id: 2}]}
    const action = {
      type: actionTypes.SPONSORSHIP_DELETE_COMPLETE,
      payload: state.data[1]
    }
    const result = sponsorshipsReducer(state, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('removes the deleted sponsorship from the state', () => {
      expect(result.data.length).toEqual(state.data.length - 1)
      expect(result.data.find(s => s.id == state.data[1].id)).toEqual(undefined)
    })
  })

})
