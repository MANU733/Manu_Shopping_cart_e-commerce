// import React from 'react';
// import Enzyme from 'enzyme';
// import { shallow ,mount} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import Cart from '../index.js'


// Enzyme.configure({ adapter: new Adapter() });


// describe('<cart/>',()=>{
//     let props={}
//     beforeEach(()=>{
//         props={
//             addtocartitems: [{
//             image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfV65e02VBB4nH1JWxlALA9ZgGuQspoBnrWM_68h2CWERcZ1yQ',
//             productName:'Samsung galaxy S3',
//             productPrice:25000,
//             productdetails:'abc',
//             id:Math.random(),
//             quantity:1
//         }]
//         }
//     })
//     test('Render without error',()=>{
//         props.addtocartitems=[{}]
//         const wrapper = mount(<Cart {...props}/>)
//         expect( wrapper.exists()).toBe(true)
//     })
// })