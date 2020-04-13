import React from 'react';
import Enzyme from 'enzyme'
import { shallow ,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Emptycart from '../index.js'
 
Enzyme.configure({ adapter: new Adapter() });


test('render the component correctly', () => {
    const wrapper = mount(<Emptycart />);
    expect(wrapper.exists()).toBe(true);
  });
