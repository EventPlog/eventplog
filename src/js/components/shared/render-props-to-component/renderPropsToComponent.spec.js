import React from 'react';
import renderPropsToComponent  from './renderPropsToComponent';
import { shallow, mount } from 'enzyme';

describe('renderPropsToComponent', () => {
  const containerProp = {name: 'John Doe'}
  const Container = (props) => <div>{props.children(containerProp)}</div>
  const ChildComponent = (props) => <p>{props.name}</p>
  let wrapper;

  beforeAll(() => {
    wrapper = mount( renderPropsToComponent(Container, ChildComponent) );
  })

  test('it should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(Container).length).toEqual(1);
    expect(wrapper.find(ChildComponent).length).toEqual(1);
  })

  test('it should pass the container prop to the child', () => {
    expect(wrapper.find('p').text()).toEqual(containerProp.name)
  })
});