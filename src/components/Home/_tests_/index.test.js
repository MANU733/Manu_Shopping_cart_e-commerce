import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Home from '../index.js';


Enzyme.configure({ adapter: new Adapter() });

describe("Home page test case",()=>{
    test("render without error",()=>{
        const props={
            productList:[],
            signinidToken:null,
            signinusername:null,
            addtocart:jest.fn()
        }
        const wrapper=shallow(<Home {...props}/>);
        expect(wrapper.exists()).toBe(true)
        
    })
    test("render else part",()=>{
        const props={
            productList:[],
            signinidToken:"manustring",
            signinusername:"manu",
            addtocart:jest.fn()
        }
        const wrapper=shallow(<Home {...props}/>);
        expect(wrapper.exists()).toBe(true)
    })
    // test("handleChange ",()=>{
    //     const props={
    //         productList:[],
    //         signinidToken:"manustring",
    //         signinusername:"manu",
    //         addtocart:jest.fn()
    //     }
    //     const setstatemock=jest.fn(); 
    //     React.useState=jest.fn(()=>[1,setstatemock]);
    //     const wrapper=shallow(<Home {...props}/>);
    //     const findElement=wrapper.find('[data-test="paginatiom"]')
    //     findElement.simulate('change',{target:{value:2}})
    //     expect(setstatemock).toHaveBeenCalledWith(2)
    // })

    test("form",()=>{
        const props={
            productList:[{productName:"manu"}],
            signinidToken:"manustring",
            signinusername:"manu",
            addtocart:jest.fn()
        }

        const setstatemock=jest.fn(); 
        const setinputtext=jest.fn();
        React.useState=jest.fn(()=>[[],setstatemock]);
        React.useState=jest.fn(()=>['manu',setinputtext]);
        const wrapper=shallow(<Home {...props}/>);
        const findElement=wrapper.find('form')
        findElement.simulate('submit',{preventDefault(){}})
        expect(setinputtext).toHaveBeenCalled()
        
    })

    test("click inputbase",()=>{
        const props={
            productList:[{productName:"manu"}],
            signinidToken:"manustring",
            signinusername:"manu",
            addtocart:jest.fn()
        }

        const setInput=jest.fn(); 
        React.useState=jest.fn(()=>['',setInput]);
        const wrapper=shallow(<Home {...props}/>);
        const findElement=wrapper.find('[data-test="inputbase"]')
        findElement.simulate('change',{target:{value:"manu"}})
        expect(setInput).toHaveBeenCalledWith("manu")

    })


    test("difficult part",()=>{
        const props={
            productList:[{productName:"manu"}],
            signinidToken:"manustring",
            signinusername:"manu",
            addtocart:jest.fn(),
            actionproductList:jest.fn()
        }

        const data=[
            {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfV65e02VBB4nH1JWxlALA9ZgGuQspoBnrWM_68h2CWERcZ1yQ",
            productName: "Samsung galaxy S3",
            productPrice: 25000,
            productdetails: "abc",
            id: 0.8983056958298032,
            quantity: 1
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfV65e02VBB4nH1JWxlALA9ZgGuQspoBnrWM_68h2CWERcZ1yQ",
                productName: "Samsung galaxy S333333",
                productPrice: 25000,
                productdetails: "abc",
                id: 0.8983056958298032898988,
                quantity: 1
                },
                {
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfV65e02VBB4nH1JWxlALA9ZgGuQspoBnrWM_68h2CWERcZ1yQ",
                    productName: "Samsung galaxy ewrfewS3",
                    productPrice: 25000,
                    productdetails: "abc",
                    id: 0.8983056958298032,
                    quantity: 1
                    }
            ]

        const setstatemock=jest.fn(); 
        React.useState=jest.fn(()=>[data,setstatemock]);
        const wrapper=shallow(<Home {...props}/>);
        const findElement=wrapper.find('[data-test="pagination"]')
        findElement.simulate('change',{value:2})
    })

    
    test("difficult part 223",()=>{
        const props={
            productList:[{productName:"manu"}],
            signinidToken:"manustring",
            signinusername:"manu",
            addtocart:jest.fn(),
            actionproductList:jest.fn()
        }

        const data=[  {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfV65e02VBB4nH1JWxlALA9ZgGuQspoBnrWM_68h2CWERcZ1yQ",
            productName: "Samsung galaxy ewrfewS3",
            productPrice: 25000,
            productdetails: "abc",
            id: 0.8983056958298032,
            quantity: 1
            }]
      
        const wrapper=shallow(<Home {...props}/>);
        const findElement=wrapper.find('[data-test="inputbase"]')
        findElement.simulate('change',{target:{value:"iphone"}})
        const setstatemock=jest.fn(); 
        React.useState=jest.fn(()=>[data,setstatemock]);
       
    })

    
})

