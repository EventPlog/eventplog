import actionTypes from 'js/components/resources/actions/types'
import resourcesReducer from '../resources-reducer';
import initialState from '../intialState'

describe('resourcesReducer', () => {
  it('returns the initial state by default', () => {
    expect(resourcesReducer(undefined, {type: '__INIT__'})).toEqual(initialState.resources)
  })

  describe(`when a ${actionTypes.RESOURCE_INDEX_START} type is passed in`, () => {
    it('returns the state with loading set to true', () => {
      const action = {
        type: actionTypes.RESOURCE_INDEX_START
      }
      const result = resourcesReducer(initialState.resources, action)
      expect(result.loading).toEqual(true)
    })
  })

  describe(`when a ${actionTypes.RESOURCE_INDEX_COMPLETE} type is passed in`, () => {
    const resources = {data: [{id: 1}, {id: 2}]}
    const action = {
      type: actionTypes.RESOURCE_INDEX_COMPLETE,
      payload: resources
    }
    const result = resourcesReducer(initialState.resources, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('appends the payload to the returned state', () => {
      expect(result.data).toEqual(action.payload.data)
    })
  })

  describe(`when a ${actionTypes.RESOURCE_INDEX_FAIL} type is passed in`, () => {
    const action = {
      type: actionTypes.RESOURCE_INDEX_FAIL,
      payload: 'Invalid resource email'
    }
    const result = resourcesReducer(initialState.resources, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('adds the error to the state', () => {
      expect(result.error).toEqual(action.payload)
    })
  })

  describe(`when a ${actionTypes.RESOURCE_CREATE_COMPLETE} type is passed in`, () => {
    const state = {data: [{id: 1}, {id: 2}]}
    const newResource = {id: 3, title: 'New horizon'}
    const action = {
      type: actionTypes.RESOURCE_CREATE_COMPLETE,
      payload: newResource
    }
    const result = resourcesReducer(state, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('adds the newly created resource to the state', () => {
      expect(result.data.length).toEqual(state.data.length + 1)
      expect(result.data.find(s => s.id == newResource.id)).toEqual(newResource)
    })
  })

  describe(`when a ${actionTypes.RESOURCE_DELETE_COMPLETE} type is passed in`, () => {
    const state = {data: [{id: 1}, {id: 2}]}
    const action = {
      type: actionTypes.RESOURCE_DELETE_COMPLETE,
      payload: state.data[1]
    }
    const result = resourcesReducer(state, action)

    it('returns the state with loading set to false', () => {
      expect(result.loading).toEqual(false)
    })

    it('removes the deleted resource from the state', () => {
      expect(result.data.length).toEqual(state.data.length - 1)
      expect(result.data.find(s => s.id == state.data[1].id)).toEqual(undefined)
    })
  })

})
