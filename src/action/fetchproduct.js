import * as actionType from './actionType.js';
import productListItems from '../productList';

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