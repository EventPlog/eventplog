import { shallow } from 'enzyme';
import rootPresentationsReducer from '../index'
import partnerReducer from '../partner-reducer';
import actionTypes from 'js/components/partners/actions/types'
import initialState from '../intialState'

describe('partnerReducer', () => {
  it('returns the initial state by default', () => {
    expect(partnerReducer(undefined, {type: '__INIT__'})).toEqual(initialState.partner)
  })

  describe('when a show start or update start type is passed in', () => {
    it('returns the state with loading set to true', () => {
      const action = {
        type: actionTypes.PARTNER_SHOW_START
      }
      const result = partnerReducer(initialState.partner, action)
      expect(result.loading).toEqual(true)
    })
  })

  describe('when a show complete or update complete type is passed in', () => {
    const action = {
      type: actionTypes.PARTNER_SHOW_COMPLETE,
      payload: {id: 1, title: 'A good speech'}
    }
    const result = partnerReducer(initialState.partner, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('appends the payload to the returned state', () => {
      expect(result.id).toEqual(action.payload.id)
      expect(result.title).toEqual(action.payload.title)
    })
  })

  describe('when a show fail or update fail type is passed in', () => {
    const action = {
      type: actionTypes.PARTNER_SHOW_FAIL,
      payload: 'Invalid partner email'
    }
    const result = partnerReducer(initialState.partner, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('adds the error to the state', () => {
      expect(result.error).toEqual(action.payload)
    })
  })

  describe('when a comment update complete type is passed in', () => {
    const comments = {data: [{id: 1}, {id: 2}]}
    const action = {
      type: actionTypes.PARTNER_COMMENT_UPDATE_COMPLETE,
      payload: comments
    }
    const result = partnerReducer(initialState.partner, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('adds the comments to the state', () => {
      expect(result.comments).toEqual(action.payload)
    })
  })

  describe('when a comment index complete type is passed in', () => {
    const comments = {data: [{id: 1}, {id: 2}]}
    const action = {
      type: actionTypes.PARTNER_COMMENT_INDEX_COMPLETE,
      payload: comments
    }
    const result = partnerReducer(initialState.partner, action)

    it('adds the comments to the state', () => {
      expect(result.comments).toEqual(action.payload)
    })
  })
})
