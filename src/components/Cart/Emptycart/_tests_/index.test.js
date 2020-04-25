import React from 'react';
import Enzyme from 'enzyme'
import { shallow ,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Emptycart from '../index.js';
import toJson from 'enzyme-to-json';
 
Enzyme.configure({ adapter: new Adapter() });


test('render the component correctly', () => {
    const wrapper = mount(<Emptycart />);
    expect(wrapper.find('[data-test="Empty-cart"]').length).toBeGreaterThan(1);
  });

  test('Snapshot testing', () => {
    const wrapper = mount(<Emptycart />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
