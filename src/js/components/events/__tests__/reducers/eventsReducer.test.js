import eventsReducer from '../../reducers/eventsReducer'
import actionTypes from '../../actions'

test('eventsReducer', () => {
  it('resolves appropriately when it receives the get event action type', () => {
    let action = {
      type: actionTypes.EVENT_GET_COMPLETE,
      payload: {
        id: 1,
        team_members: [{id: 1}],
        organizer: {id: 1}
      }
    }
    let initialState = {}

    let newState = eventsReducer(initialState, action);

    expect(newState.id).toEqual(action.payload.id)
  })
})

