import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import Header from '../Header';

configure({ adapter: new Adapter() });

describe('Header component', () => {
    it('should render <Header/> correctly', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('.header').length).toEqual(1)
        expect(wrapper.find('.app-container').length).toEqual(1)
        expect(wrapper.find('.logo').length).toEqual(1)
        expect(wrapper.find('.menu').length).toEqual(1)
      
       
    })
    it('Should route links correctly correctly', () =>{
        //need to import routes. 
       // const wrapper = mount(<Header/>)
       // console.log(wrapper.instance(<Header/>))
    })
})