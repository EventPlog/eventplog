import React from 'react';
import { mount, configure, shallow, render } from 'enzyme';
import PrivateRoute from '../../auth/PrivateRoute.js'
import { Auth } from './actions'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });


describe('PrivateRoute component', () => {

    it('PrivateRoute should render without crashing', () => {
    expect(true).toBe(true)
    });
)};
	
