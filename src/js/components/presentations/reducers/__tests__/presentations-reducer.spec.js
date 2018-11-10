import { shallow } from 'enzyme';
import rootPresentationsReducer from '../index'
import presentationReducer from '../presentation-reducer';
import actionTypes from 'js/components/presentations/actions/types'
import presentationsReducer from '../presentations-reducer';
import initialState from '../intialState'

describe('presentationsReducer', () => {
  it('returns the initial state by default', () => {
    expect(presentationsReducer(undefined, {type: '__INIT__'})).toEqual(initialState.presentations)
  })

  describe(`when a ${actionTypes.PRESENTATION_INDEX_START} type is passed in`, () => {
    it('returns the state with loading set to true', () => {
      const action = {
        type: actionTypes.PRESENTATION_INDEX_START
      }
      const result = presentationsReducer(initialState.presentations, action)
      expect(result.loading).toEqual(true)
    })
  })

  describe(`when a ${actionTypes.PRESENTATION_INDEX_COMPLETE} type is passed in`, () => {
    const presentations = {data: [{id: 1}, {id: 2}]}
    const action = {
      type: actionTypes.PRESENTATION_INDEX_COMPLETE,
      payload: presentations
    }
    const result = presentationsReducer(initialState.presentations, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('appends the payload to the returned state', () => {
      expect(result.data).toEqual(action.payload.data)
    })
  })

  describe(`when a ${actionTypes.PRESENTATION_INDEX_FAIL} type is passed in`, () => {
    const action = {
      type: actionTypes.PRESENTATION_INDEX_FAIL,
      payload: 'Invalid presentation email'
    }
    const result = presentationsReducer(initialState.presentations, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('adds the error to the state', () => {
      expect(result.error).toEqual(action.payload)
    })
  })

  describe(`when a ${actionTypes.PRESENTATION_CREATE_COMPLETE} type is passed in`, () => {
    const state = {data: [{id: 1}, {id: 2}]}
    const newPresentation = {id: 3, title: 'New horizon'}
    const action = {
      type: actionTypes.PRESENTATION_CREATE_COMPLETE,
      payload: newPresentation
    }
    const result = presentationsReducer(state, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('adds the newly created presentation to the state', () => {
      expect(result.data.length).toEqual(state.data.length + 1)
      expect(result.data.find(s => s.id == newPresentation.id)).toEqual(newPresentation)
    })
  })

  describe(`when a ${actionTypes.PRESENTATION_DELETE_COMPLETE} type is passed in`, () => {
    const state = {data: [{id: 1}, {id: 2}]}
    const action = {
      type: actionTypes.PRESENTATION_DELETE_COMPLETE,
      payload: state.data[1]
    }
    const result = presentationsReducer(state, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('removes the deleted presentation from the state', () => {
      expect(result.data.length).toEqual(state.data.length - 1)
      expect(result.data.find(s => s.id == state.data[1].id)).toEqual(undefined)
    })
  })

})
