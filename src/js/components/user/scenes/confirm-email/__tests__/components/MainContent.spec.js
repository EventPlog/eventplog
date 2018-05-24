import React from 'react';
import MainContent from '../../components/main-content'
import { shallow } from 'enzyme';

describe('ConfirmEmail', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <MainContent /> );
    expect(wrapper).toMatchSnapshot()
  })

  describe('when a token is present', () => {
    let token = '123'

    describe('when the status is processing', () => {
      let status = 'processing',
          confirmed = () => {}

      it('should show the confirming email message', () => {
        const wrapper = shallow(<MainContent {...{status, confirmed, token}} />)
        expect(wrapper.find('p').length).toEqual(1)
        expect(wrapper.find('p').text()).toEqual('Confirming your email, please wait....')
      })
    })

    describe('when the status is failed', () => {
      let status = 'failed',
        confirmed = () => {}

      it('should show the confirming email message', () => {
        const wrapper = shallow(<MainContent {...{status, confirmed, token}} />)
        expect(wrapper.find('p').length).toEqual(1)
        expect(wrapper.find('p').text()).toEqual('Your email confirmation failed. Please request for a new one.')
      })
    })

    describe('when the token is confirmed', () => {
      let status = 'confirmed',
        confirmed = () => true

      it('should show a confirmation message', () => {
        const wrapper = shallow(<MainContent {...{status, confirmed, token}} />)
        expect(wrapper.find('p').length).toEqual(1)
        expect(wrapper.find('p').text()).toContain('Your email is confirmed!')
      })
    })
  })

  describe('when a token is absent', () => {
    let token = null,
        status = 'failed',
        confirmed = () => {}

    const wrapper = shallow(<MainContent {...{status, confirmed, token}} />)

    it('shows the right message', () => {
      expect(wrapper.find('p').length).toEqual(1)
      expect(wrapper.find('p').text()).toContain("We've sent you an email")
    })

    it('renders a giphy', () => {
      expect(wrapper.find('img').length).toEqual(1)
    })
  })
});