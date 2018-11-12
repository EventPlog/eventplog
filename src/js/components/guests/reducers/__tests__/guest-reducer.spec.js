import { shallow } from 'enzyme';
import rootPresentationsReducer from '../index'
import guestReducer from '../guest-reducer';
import actionTypes from 'js/components/guests/actions/types'
import guests from '../guests-reducer';
import initialState from '../intialState'

describe('guestReducer', () => {
  it('returns the initial state by default', () => {
    expect(guestReducer(undefined, {type: '__INIT__'})).toEqual(initialState.guest)
  })

  describe('when a show start or update start type is passed in', () => {
    it('returns the state with loading set to true', () => {
      const action = {
        type: actionTypes.GUEST_UDPATE_START
      }
      const result = guestReducer(initialState.guest, action)
      expect(result.loading).toEqual(true)
    })
  })

  describe('when a show complete or update complete type is passed in', () => {
    const action = {
      type: actionTypes.GUEST_UPDATE_COMPLETE,
      payload: {id: 1, title: 'A good speech'}
    }
    const result = guestReducer(initialState.guest, action, actionTypes)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('replaces the store state with the payload', () => {
      expect(result.id).toEqual(action.payload.id)
      expect(result.title).toEqual(action.payload.title)
    })
  })

  describe('when a show fail or update fail type is passed in', () => {
    const action = {
      type: actionTypes.GUEST_UPDATE_FAIL,
      payload: 'Invalid guest email'
    }
    const result = guestReducer(initialState.guest, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('adds the error to the state', () => {
      expect(result.error).toEqual(action.payload)
    })
  })

})
