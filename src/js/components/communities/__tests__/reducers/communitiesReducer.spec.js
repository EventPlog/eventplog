import communityReducer from '../../reducers/communityReducer'
import actionTypes from '../../actions'

test('eventsReducer', () => {
  it('resolves appropriately when it receives the get event action type', () => {
    let action = {
      type: actionTypes.COMMUNITY_INDEX_COMPLETE,
      payload: [
        {id: 1, name: 'An amazing community'}
      ]
    }
    let initialState = {}

    let newState = eventsReducer(initialState, action);

    expect(newState.communities).toEqual(action.payload)
  })
})

