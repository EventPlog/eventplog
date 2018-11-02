import { shallow } from 'enzyme';
import rootSpeakersReducer from '../index'
import speakerReducer from '../speaker-reducer';
import actionTypes from 'js/components/speakers/actions/types'
import speakersReducer from '../speakers-reducer';
import initialState from '../intialState'

describe('speakersReducer', () => {
  it('returns the initial state by default', () => {
    expect(speakersReducer(undefined, {type: '__INIT__'})).toEqual(initialState.speakers)
  })

  describe(`when a ${actionTypes.SPEAKER_INDEX_START} type is passed in`, () => {
    it('returns the state with loading set to true', () => {
      const action = {
        type: actionTypes.SPEAKER_INDEX_START
      }
      const result = speakersReducer(initialState.speakers, action)
      expect(result.loading).toEqual(true)
    })
  })

  describe(`when a ${actionTypes.SPEAKER_INDEX_COMPLETE} type is passed in`, () => {
    const speakers = {data: [{id: 1}, {id: 2}]}
    const action = {
      type: actionTypes.SPEAKER_INDEX_COMPLETE,
      payload: speakers
    }
    const result = speakersReducer(initialState.speakers, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('appends the payload to the returned state', () => {
      expect(result.data).toEqual(action.payload.data)
    })
  })

  describe(`when a ${actionTypes.SPEAKER_INDEX_FAIL} type is passed in`, () => {
    const action = {
      type: actionTypes.SPEAKER_INDEX_FAIL,
      payload: 'Invalid speaker email'
    }
    const result = speakersReducer(initialState.speakers, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('adds the error to the state', () => {
      expect(result.error).toEqual(action.payload)
    })
  })

  describe(`when a ${actionTypes.SPEAKER_CREATE_COMPLETE} type is passed in`, () => {
    const state = {data: [{id: 1}, {id: 2}]}
    const newSpeaker = {id: 3, title: 'New horizon'}
    const action = {
      type: actionTypes.SPEAKER_CREATE_COMPLETE,
      payload: newSpeaker
    }
    const result = speakersReducer(state, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('adds the newly created speaker to the state', () => {
      expect(result.data.length).toEqual(state.data.length + 1)
      expect(result.data.find(s => s.id == newSpeaker.id)).toEqual(newSpeaker)
    })
  })

  describe(`when a ${actionTypes.SPEAKER_DELETE_COMPLETE} type is passed in`, () => {
    const state = {data: [{id: 1}, {id: 2}]}
    const action = {
      type: actionTypes.SPEAKER_DELETE_COMPLETE,
      payload: state.data[1]
    }
    const result = speakersReducer(state, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('removes the deleted speaker from the state', () => {
      expect(result.data.length).toEqual(state.data.length - 1)
      expect(result.data.find(s => s.id == state.data[1].id)).toEqual(undefined)
    })
  })

})
