import React from 'react';
import Enzyme from 'enzyme'
import { shallow ,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Ordersummary from '../index.js';
import { BrowserRouter } from 'react-router-dom';
 
Enzyme.configure({ adapter: new Adapter() });

describe('<Ordersummary/>',()=>{
    let Props={}
    beforeEach(()=>{
        Props={
        grandtotal:220
        }
    })
    test('render without error ',()=>{
        const wrapper = mount(<BrowserRouter><Ordersummary /></BrowserRouter>);
        expect(wrapper.exists()).toBe(true)
    })
 test('render without error props',()=>{
     Props.grandtotal=1212;
     const wrapper = mount(<BrowserRouter><Ordersummary {...Props}/></BrowserRouter>);
     expect(wrapper.text().length).toBeGreaterThan(1);
 })
 test('test find ',()=>{
    const wrapper = mount(<BrowserRouter><Ordersummary /></BrowserRouter>);
    expect(wrapper.find('.test').length).toBeGreaterThan(0)
})

})

