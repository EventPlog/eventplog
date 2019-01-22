import React from 'react';
import { SponsorshipOffer, generateTitle } from '../SponsorshipOffer';
import SponsorsList from '../SponsorshipOfferItems';
import TargetAudience from '../components/TargetAudience'
import MediaPartners from '../components/MediaPartners'
import ContentPanel from 'js/components/shared/content-panel'
import NewSponsor from '../../new-sponsorship-offer-item'
import Modal from 'js/components/shared/modal'
import { shallow } from 'enzyme';
import variables from 'js/styles/theme/variables'
import { getUserAvatar } from 'js/utils'

describe('Sponsors', () => {
  const props = {
    event: {id: 3, is_stakeholder: true},
    sponsor: {
      id: 1,
      title: 'An awesome title',
      sponsor_type: 'talk',
      summary: 'A short summary',
      details: 'A lot of details',
      user: {id: 1},
      comments: {
        data: []
      }
    },
    theme: variables,
    currentUser: {id: 1},
    handleViewCount: () => {}
  }

  const wrapper = shallow( <SponsorshipOffer {...props} /> );

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(SponsorsList).length).toEqual(1);
    expect(wrapper.find(MediaPartners).length).toEqual(1);
    expect(wrapper.find(TargetAudience).length).toEqual(1);
  })

  it('renders the right props', () => {
    let SponsorsListInstance = wrapper.find(SponsorsList).at(0)

    expect(SponsorsListInstance.props().title)
        .toEqual(generateTitle(props.event))

    expect(SponsorsListInstance.props().currentUser).toEqual(props.currentUser)
    expect(SponsorsListInstance.props().sponsors).toEqual(props.sponsors)
  })

  describe('when the logged in user is a stakeholder of the event', () => {
    it('shows the pitch content panel', () => {
      expect(wrapper.find(ContentPanel).length).toEqual(2);
      expect(wrapper.find(ContentPanel).at(0).props().title).toEqual('Quick note from organizers');
    })
  })

});