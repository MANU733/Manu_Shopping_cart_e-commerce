import React from 'react';
import { mount, shallow } from 'enzyme';
import CustomBreadcrumbs from '../index';

describe('<CustomBreadcrumbs /> ', () => {
  let PROPS = {};
  beforeEach(() => {
    PROPS = {
     pathName = '/',
    breadCrumbList = [{a:'opo'}]
    };
  });

  test('render the component correctly', () => {
    const wrapper = shallow(<CustomBreadcrumbs {...PROPS} />);
    expect(wrapper.exists()).toBe(true);
  });

  test('render the component correctly', () => {
    PROPS.pathName = '';
    PROPS.breadCrumbList = [{}];
    const wrapper = shallow(<CustomBreadcrumbs {...PROPS} />);
    expect(wrapper.exists()).toBe(true);
  });
});
