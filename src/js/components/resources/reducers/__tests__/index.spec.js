import { shallow } from 'enzyme';
import rootResourcesReducer from '../index'
import initialState from '../intialState'

describe('rootResourcesReducer', () => {
  it('renders initially with default data', () => {
    expect(rootResourcesReducer(undefined, {type: '__INIT__'})).toEqual(initialState)
  })
})
