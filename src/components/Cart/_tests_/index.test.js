import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Cart from '../index.js';


Enzyme.configure({ adapter: new Adapter() });

describe('cart test case',()=>{
test('test',()=>{
    const props={
        productList:{addtocartitems:[
            {image: "https://images-eu.ssl-images-amazon.com/images/I/51gsd56fpmL._AC_US218_FMwebp_QL70_.jpg",
productName: "Surf Excel Easy Wash Detergent Powder, 4 kg",
productPrice: 240,
productdetails: "hij",
id: 0.04212288788144347,
quantity: undefined}
        ]
        }
    }
const wrapper=shallow(<Cart {...props}/>)
})
})