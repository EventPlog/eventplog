import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import LoginForm from '../EmailLoginForm';
import LoginFormWithContainer from '../index'
import { Route, Link, MemoryRouter } from 'react-router-dom'
//import { Simulate } from 'react-addons-test-utils'

configure({ adapter: new Adapter() });

describe(' The EmailLoginForm component', () => {
    let component;
    beforeEach(() =>{
        component = shallow(<LoginFormWithContainer />);
    })
    
    describe(' The LoginFormWithContainer', ()=>{
        it('should render once', () => {
            expect(component.length).toBe(1);
          });
    })

    describe('container component <LoginForm />', () => {
        it('should render once with props', () => {
          const component = shallow(<LoginForm />);
          expect(component.length).toEqual(1);
        });

        it('should update state through handleChange method', () => {
            const props = {
              
            };
      
            const component = render(
                 <LoginForm {...props} />
              
            );
            console.log(component)
           // component.instance().handleChange({ target: { value: 'boobae', name: 'email' } });
           // component.instance().handleChange({ target: { value: 'password123', name: 'password' } });
      
           // expect(component.state('email')).toEqual('boobae');
           // expect(component.state('password')).toEqual('password123');
          });
    })

   
})