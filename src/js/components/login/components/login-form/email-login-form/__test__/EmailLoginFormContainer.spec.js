import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import { LoginFormContainer } from '../EmailLoginFormContainer';

configure({ adapter: new Adapter() });

describe(' LoginFormContainer component', () => {
    let wrapper;

    const defaultProps = {
        loginByEmail: () => new Promise(() => {}, () => {}),
        
    }

    beforeEach(() => {
        wrapper = shallow(
            <LoginFormContainer {...defaultProps} >
                {() => {
                    return <h1>Hello BooBae</h1>
                }}
            </LoginFormContainer>
            );
    });

    it('should render <EmailLoginFormContainer/> correctly', () => {
        expect(wrapper.instance().state.user).toEqual({});

        const events = [
            {
                target: {
                    name: 'firstName',
                    value: 'Ebube'
                }
            },
            {
                target: {
                    name: 'email',
                    value: 'boobae@gmail.com'
                }
            },
            {
                target: {
                    name: 'lastname',
                    value: 'Egbuna'
                }
            },
            {
                target: {
                    name: 'password',
                    value: 'bae'
                }
            }];

        events.forEach((event) => {
            wrapper.instance().handleChange(event);
            expect(wrapper.instance().state.user[event.target.name]).toEqual(event.target.value);
        });        
    })

    it('Should set loading to true when handleSubmit is called', () => {
        wrapper.instance().handleSubmit();
        expect(wrapper.instance().state.loading).toBeTruthy();
    })

    it('Should get all props and state when an event occurs ', () => {
        wrapper.instance().getStateAndActions();
        expect(Object.keys(wrapper.instance().getStateAndActions()).length).toEqual(6)
    })
})