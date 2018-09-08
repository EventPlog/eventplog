import React from 'react';
import CsvImport from '../CsvImport';
import ContentPanel from 'js/components/shared/content-panel'
import { shallow } from 'enzyme';

describe('CsvImport', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <CsvImport  /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(ContentPanel).length).toEqual(1);
  })
});