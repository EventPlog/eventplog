import React from 'react';
import { Partners, generateTitle } from '../Partners';
import PartnersList from '../PartnersList';
import NewPartner from '../../new-partner'
import ContentPanel from 'js/components/shared/content-panel'
import { shallow } from 'enzyme';
import variables from 'js/styles/theme/variables'
import { getUserAvatar } from 'js/utils'

describe('Partners', () => {
  const props = {
    event: {id: 3, is_stakeholder: true},
    presentation: {
      id: 1,
      title: 'An awesome title',
      presentation_type: 'talk',
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

  const wrapper = shallow( <Partners {...props} /> );

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

});