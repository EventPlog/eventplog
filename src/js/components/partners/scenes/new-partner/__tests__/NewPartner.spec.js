import React from 'react';
import NewPartner, {
  partnerTypeOptions
} from '../NewPartner';
import Input from 'js/components/shared/input'
import TextArea from 'js/components/shared/text-area'
import Button from 'js/components/shared/button'
import Select from 'js/components/shared/select'
import Loading from 'js/components/shared/loading'
import variables from 'js/styles/theme/variables'
import PlaceSelector from 'js/components/shared/place-selector'
import { shallow } from 'enzyme'

describe('NewPartner', () => {
  const props = {
    event: {id: 3},
    partner: {
      name: 'An awesome title',
      tagline: 'talk',
      description: 'A short summary',
      location: {address: 'somewhere'},
      tw_username: 'somebody',
      fb_username: 'somebody',
      phone_number: '23457',
      user: {id: 1, email: 'some@one.com'}
    },
    theme: variables,
    user: {id: 1},
    currentUser: {id: 1},
  }

  const wrapper = shallow( <NewPartner {...props} /> );

  it('should render correctly', () => {

    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find(Input).length).toEqual(6);
    expect(wrapper.find(TextArea).length).toEqual(1);
 })

  describe('when rendering the buttons', () => {
    it('shows only the save button when the partner id does not exist', () => {
      expect(wrapper.find(Button).length).toEqual(1);
      expect(wrapper.find(Button).at(0).props().children).toEqual('Save');
    })

    it('shows only the save button when the partner id exists', () => {
      const modifiedProps = {...props, partner: {...props.partner, id: 1} }
      const existingPartnerWrapper = shallow( <NewPartner {...modifiedProps} /> );

      expect(existingPartnerWrapper.find(Button).length).toEqual(2);
      expect(existingPartnerWrapper.find(Button).at(0).props().children).toEqual('Save');
      expect(existingPartnerWrapper.find(Button).at(1).props().children).toEqual('Delete');
    })
  })

  describe('when rendering the form fields', () => {
    it('renders the email input correctly', () => {
      expect(wrapper.find(Input).at(0).props().name).toEqual('name')
      expect(wrapper.find(Input).at(0).props().value).toEqual(props.partner.name)
    })

    it('renders the title input correctly', () => {
      expect(wrapper.find(Input).at(1).props().name).toEqual('tagline')
      expect(wrapper.find(Input).at(1).props().value).toEqual(props.partner.tagline)
    })

    it('renders the description input correctly', () => {
      expect(wrapper.find(TextArea).at(0).props().name).toEqual('description')
      expect(wrapper.find(TextArea).at(0).props().value).toEqual(props.partner.description)
    })

    it('renders the place selector field correctly', () => {
      expect(wrapper.find(PlaceSelector).at(0).props().locationField).toEqual('location')
      expect(wrapper.find(PlaceSelector).at(0).props().location).toEqual(props.partner.location)
    })

    it('renders the phone number field correctly', () => {
      expect(wrapper.find(Input).at(2).props().name).toEqual('phone_number')
      expect(wrapper.find(Input).at(2).props().value).toEqual(props.partner.phone_number)
    })

    it('renders the twitter username field correctly', () => {
      expect(wrapper.find(Input).at(3).props().name).toEqual('tw_username')
      expect(wrapper.find(Input).at(3).props().value).toEqual(props.partner.tw_username)
    })

    it('renders the facebook username field correctly', () => {
      expect(wrapper.find(Input).at(4).props().name).toEqual('fb_username')
      expect(wrapper.find(Input).at(4).props().value).toEqual(props.partner.fb_username)
    })
  })
});