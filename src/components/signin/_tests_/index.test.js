import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Signin from '../index.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Sign in test cases',()=>{
    test("Render without error form",()=>{
        const mockfunction=jest.fn();
        const props={
            signinidToken:null,
            startsignin:mockfunction
        }
        const wrapper=shallow(<Signin {...props}/>);
        console.log(wrapper.debug())
        const findElement=wrapper.find('form');
        findElement.simulate('submit',{preventDefault(){}})
        expect(mockfunction.mock.calls.length).toBe(1)
    })
    test("Render without error else part",()=>{
        const props={
            signinidToken:'asdasda'
        }
        const wrapper=shallow(<Signin {...props}/>)
        expect(wrapper.exists()).toBe(true)
    })
    test("Email",()=>{
        const props={
            signinidToken:null
        }
        const setemail=jest.fn()
        React.useState=jest.fn(()=>["",setemail]);
        const wrapper=shallow(<Signin {...props}/>)
        const findelement=wrapper.find('[data-test="Email"]')
        findelement.simulate('change',{target:{value:"hnmanu@gmail.com"}})
        expect(setemail).toHaveBeenCalledWith("hnmanu@gmail.com")
    })

    test("password",()=>{
        const props={
            signinidToken:null
        }
        const setpassword=jest.fn();
        React.useState=jest.fn(()=>["",setpassword]);
        const wrapper=shallow(<Signin {...props}/>);
        const findelement=wrapper.find('[data-test="password"]');
        findelement.simulate('change',{target:{value:"12345678"}})
        expect(setpassword).toHaveBeenCalledWith("12345678")
    })
})