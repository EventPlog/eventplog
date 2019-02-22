import React from 'react';
import NewPartnerLeadForm, {
  partnerTypeOptions
} from '../NewPartnerLeadForm';
import Input from 'js/components/shared/input'
import TextArea from 'js/components/shared/text-area'
import Button from 'js/components/shared/button'
import Select from 'js/components/shared/select'
import Loading from 'js/components/shared/loading'
import variables from 'js/styles/theme/variables'
import PlaceSelector from 'js/components/shared/place-selector'
import { shallow } from 'enzyme'

describe('NewPartnerLeadForm', () => {
  const props = {
    event: {id: 3},
    partner_lead: {
      company_name: 'An awesome title',
      extra_details: 'more details',
      accept_terms: true,
      user: {
        id: 1,
        email: 'some@one.com',
        first_name: 'Kent',
        last_name: 'Bent',
        phone_number: '803234',
      }
    },
    theme: variables,
    currentUser: {id: 1},
  }

  const wrapper = shallow( <NewPartnerLeadForm {...props} /> );

  it('should render correctly', () => {

    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find(Input).length).toEqual(5);
    expect(wrapper.find(TextArea).length).toEqual(1);
 })

  describe('when rendering the buttons', () => {
    it('shows only the save and cancel buttons when the partner id does not exist', () => {
      expect(wrapper.find(Button).length).toEqual(2);
      expect(wrapper.find(Button).at(0).props().children).toEqual('Save');
      expect(wrapper.find(Button).at(1).props().children).toEqual('Cancel');
    })

    it('shows only the save button when the partner id exists', () => {
      const modifiedProps = {...props, partner_lead: {...props.partner_lead, id: 1} }
      const existingPartnerWrapper = shallow( <NewPartnerLeadForm {...modifiedProps} /> );

      expect(existingPartnerWrapper.find(Button).length).toEqual(3);
      expect(existingPartnerWrapper.find(Button).at(0).props().children).toEqual('Save');
      expect(existingPartnerWrapper.find(Button).at(1).props().children).toEqual('Cancel');
      expect(existingPartnerWrapper.find(Button).at(2).props().children).toEqual('Delete');
    })
  })

  describe('when rendering the form fields', () => {
    it('renders the email input correctly', () => {
      expect(wrapper.find(Input).at(0).props().name).toEqual('first_name')
      expect(wrapper.find(Input).at(0).props().value).toEqual(props.partner_lead.user.first_name)
    })

    it('renders the last_name input correctly', () => {
      expect(wrapper.find(Input).at(1).props().name).toEqual('last_name')
      expect(wrapper.find(Input).at(1).props().value).toEqual(props.partner_lead.user.last_name)
    })

    it('renders the email input correctly', () => {
      expect(wrapper.find(Input).at(2).props().name).toEqual('email')
      expect(wrapper.find(Input).at(2).props().value).toEqual(props.partner_lead.user.email)
    })

    it('renders the phone number field correctly', () => {
      expect(wrapper.find(Input).at(3).props().name).toEqual('phone_number')
      expect(wrapper.find(Input).at(3).props().value).toEqual(props.partner_lead.user.phone_number)
    })

    it('renders the company name field correctly', () => {
      expect(wrapper.find(Input).at(4).props().name).toEqual('company_name')
      expect(wrapper.find(Input).at(4).props().value).toEqual(props.partner_lead.company_name)
    })

    it('renders the extra details field correctly', () => {
      expect(wrapper.find(TextArea).at(0).props().name).toEqual('extra_details')
      expect(wrapper.find(TextArea).at(0).props().value).toEqual(props.partner_lead.extra_details)
    })
  })
});