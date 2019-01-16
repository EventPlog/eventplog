import { shallow } from 'enzyme';
import rootPresentationsReducer from '../index'
import presentation from '../sponsorship-reducer';
import presentations from '../sponsorships-reducer';
import initialState from '../intialState'

describe('rootPresentationsReducer', () => {
  it('renders initially with default data', () => {
    expect(rootPresentationsReducer(undefined, {type: '__INIT__'})).toEqual(initialState)
  })
})
