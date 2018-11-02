import { shallow } from 'enzyme';
import rootSpeakersReducer from '../index'
import speaker from '../speaker-reducer';
import speakers from '../speakers-reducer';
import initialState from '../intialState'

describe('rootSpeakersReducer', () => {
  it('renders initially with default data', () => {
    expect(rootSpeakersReducer(undefined, {type: '__INIT__'})).toEqual(initialState)
  })
})
