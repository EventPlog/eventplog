import React from 'react';
import ImageUploader from '../ImageUploader';
import Button from 'js/components/shared/button'
import { shallow } from 'enzyme';

describe('ImageUploader', () => {

  it('should render correctly', () => {
    const wrapper = shallow( <ImageUploader /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(Button).length).toEqual(1)
  })
});