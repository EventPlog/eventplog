import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import LoginForm from '../EmailLoginForm';

configure({ adapter: new Adapter() });

describe(' The EmailLoginForm component', () => {

  describe('container component <LoginForm />', () => {
    it('should render once with props', () => {
      const component = shallow(<LoginForm />);
      expect(component.length).toEqual(1);
    });

  })


})