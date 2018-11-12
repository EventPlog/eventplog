import { shallow } from 'enzyme';
import actionTypes from 'js/components/guests/actions/types'
import guestsReducer from '../guests-reducer';
import initialState from '../intialState'

describe('guestsReducer', () => {
  it('returns the initial state by default', () => {
    expect(guestsReducer(undefined, {type: '__INIT__'})).toEqual(initialState.guests)
  })

  describe(`when a ${actionTypes.GUEST_INDEX_START} type is passed in`, () => {
    it('returns the state with loading set to true', () => {
      const action = {
        type: actionTypes.GUEST_INDEX_START
      }
      const result = guestsReducer(initialState.guests, action)
      expect(result.loading).toEqual(true)
    })
  })

  describe(`when a ${actionTypes.GUEST_INDEX_COMPLETE} type is passed in`, () => {
    const guests = {data: [{id: 1}, {id: 2}]}
    const action = {
      type: actionTypes.GUEST_INDEX_COMPLETE,
      payload: guests
    }
    const result = guestsReducer(initialState.guests, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('appends the payload to the returned state', () => {
      expect(result.data).toEqual(action.payload.data)
    })
  })

  describe(`when a ${actionTypes.GUEST_INDEX_FAIL} type is passed in`, () => {
    const action = {
      type: actionTypes.GUEST_INDEX_FAIL,
      payload: 'Invalid guest email'
    }
    const result = guestsReducer(initialState.guests, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('adds the error to the state', () => {
      expect(result.error).toEqual(action.payload)
    })
  })

  describe(`when a ${actionTypes.GUEST_UPDATE_COMPLETE} type is passed in`, () => {
    const state = {data: [{id: 1}, {id: 2}]}
    const newPresentation = {id: 3, title: 'New horizon'}
    const action = {
      type: actionTypes.GUEST_UPDATE_COMPLETE,
      payload: newPresentation
    }
    const result = guestsReducer(state, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('adds the newly created guest to the state', () => {
      expect(result.data.length).toEqual(state.data.length + 1)
      expect(result.data.find(s => s.id == newPresentation.id)).toEqual(newPresentation)
    })
  })

  describe(`when a ${actionTypes.GUEST_DELETE_COMPLETE} type is passed in`, () => {
    const state = {data: [{id: 1}, {id: 2}], meta: {total_count: 2}}
    const action = {
      type: actionTypes.GUEST_DELETE_COMPLETE,
      payload: state.data[1]
    }
    const result = guestsReducer(state, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('removes the deleted guest from the state', () => {
      expect(result.data.length).toEqual(state.data.length - 1)
      expect(result.data.find(s => s.id == state.data[1].id)).toEqual(undefined)
    })
  })

})
