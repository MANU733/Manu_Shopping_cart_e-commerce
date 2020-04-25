import * as actionType from './actionType.js';
import productListItems from '../productList';
import axios from 'axios';


export const startsignin=(email,password)=>{

    console.log(email,password)
    const signindata={
        email:email,
        password:password,
        returnSecureToken:true
    }
    return (dispatch)=>{
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC5Vs6oMWr2m1mnH6mlTFl94tZiPMDUtUc',signindata)
        .then(res=>console.log(res,"response"))
        .catch(err=>console.log(err,"error"));
    }
}

export const actionproductList=()=>
{
    return {
        type:actionType.FETCH_PRODUCT_LIST,
        payload:{
            productListItems:productListItems
        }
    }
}

export const addtocart=(ProductList)=>{
    console.log(ProductList)
    return {
        type:actionType.ADD_TO_CART,
        payload:ProductList
    }
}

// export default signin=()=>{
//     return{
//         type:actionType.SIGNIN,
//         payload:response
//     }
    
// }

