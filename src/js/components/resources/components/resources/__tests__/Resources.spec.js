import React from 'react'
import Resources from '../Resources'
import ContentPanel from 'js/components/shared/content-panel'
import { shallow } from 'enzyme'

const props = {
  resources: {
    data: [{id: 1}],
    meta: {
      total_pages: 2,
      active_page: 10,
      current_page: 1,
    }
  },
  requester: {
    recipient_id: 1,
    recipient_type: 'Presentation'
  },
  title: 'Resources shared',
  getResources: () => {},
  attendEvent: () => {},
}

const wrapper = shallow(<Resources {...props} />)

describe('Resources', () => {
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find(ContentPanel).length).toEqual(1)
  })
})