import React from 'react';
import { Partner } from '../Partner';
import ContentPanel from 'js/components/shared/content-panel'
import ContentSection from "js/components/shared/content-section";
import ContentEditable from 'js/components/shared/content-editable'
import Sidebar from 'js/components/shared/sidebar'
import { shallow } from 'enzyme';
import variables from 'js/styles/theme/variables'
import AddComment from "js/components/shared/comments/add-comment";
import Comments from "js/components/shared/comments";
import AboutUser from 'js/components/user/scenes/user/components/AboutUser'
import Button from 'js/components/shared/button'
import Loading from 'js/components/shared/loading'

describe('Partner', () => {
  const props = {
    event: {id: 3},
    partner: {
      id: 1,
      title: 'An awesome title',
      partner_type: 'talk',
      summary: 'A short summary',
      details: 'A lot of details',
      user: {id: 1}
    },
    theme: variables,
    user: {id: 1},
    currentUser: {id: 1},
  }

  const wrapper = shallow( <Partner {...props} /> );

  it('should render correctly', () => {

    expect(wrapper).toMatchSnapshot()

  })
});