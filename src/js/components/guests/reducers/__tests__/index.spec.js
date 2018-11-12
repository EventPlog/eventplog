import rootGuestsReducer from '../index'
import initialState from '../intialState'

describe('rootGuestsReducer', () => {
  it('renders initially with default data', () => {
    expect(rootGuestsReducer(undefined, {type: '__INIT__'})).toEqual(initialState)
  })
})
