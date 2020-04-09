import * as actionType from '../action/actionType.js';

const initialState={
    productList:[],
    addtocartitems: [],
    addedtocart:false
   
}

 const productListReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case actionType.FETCH_PRODUCT_LIST:
            return {
                ...state,
                productList:action.payload.productListItems
            }

        case actionType.ADD_TO_CART:
            return {
                ...state,
                addtocartitems: [...state.addtocartitems, action.payload],
                addedtocart:true
            }
            default : 
            return state;
    }
}

export default productListReducer;