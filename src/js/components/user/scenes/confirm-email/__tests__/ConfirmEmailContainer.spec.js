import React from 'react';
import { ConfirmEmailContainer } from '../ConfirmEmailContainer';
import MainContent from '../components/main-content'
import { mount } from 'enzyme';

describe('ConfirmEmail', () => {
  const containerProps = {id: 2}
  const ChildComponent = () => <div/>
  let wrapper;

  beforeAll(() => {
    wrapper = mount( <ConfirmEmailContainer children={ChildComponent} /> );
  })

  test('it should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('it should pass the right props to child components', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })
});